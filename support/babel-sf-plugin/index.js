/* eslint-disable no-param-reassign */

/**
 * Converts
 * FROM: $sf(theme.btn_color, 'color')} TO sf('btn_color', 'color')
 * FROM: $sf(theme.btn_color)} TO sf('btn_color'')
 */
module.exports = context => {
  const t = context.types;

  const idxRe = /\bsf\b/;

  function checkSfArguments(file, node) {
    // TODO
  }

  function checkSfBindingNode(file, node) {
    // TODO
  }

  function createStyledFunction() {
    return t.arrowFunctionExpression(
      [t.identifier('themePropertyKey'), t.identifier('propertyKey')],
      t.blockStatement([
        t.returnStatement(
          t.ConditionalExpression(
            t.BinaryExpression('==', t.identifier('propertyKey'), t.NullLiteral()),
            t.arrowFunctionExpression(
              [t.identifier('props')],
              t.blockStatement([
                t.returnStatement(
                  t.memberExpression(
                    t.memberExpression(t.identifier('props'), t.identifier('theme')),
                    t.identifier('themePropertyKey'),
                    true
                  )
                ),
              ])
            ),
            t.arrowFunctionExpression(
              [t.identifier('props')],
              t.blockStatement([
                t.returnStatement(
                  t.memberExpression(
                    t.memberExpression(
                      t.memberExpression(t.identifier('props'), t.identifier('theme')),
                      t.identifier('themePropertyKey'),
                      true
                    ),
                    t.memberExpression(t.identifier('props'), t.identifier('propertyKey'), true),
                    true
                  )
                ),
              ])
            )
          )
        ),
      ])
    );
  }

  function visitSfCallExpression(path, state) {
    const { node } = path;
    checkSfArguments(state.file, node);

    const themePropertyKey = node.arguments[0].property.name;
    const propertyKey = (node.arguments[1] || {}).value;

    path.replaceWith(
      t.callExpression(
        state.temp,
        propertyKey
          ? [t.stringLiteral(themePropertyKey), t.stringLiteral(propertyKey)]
          : [t.stringLiteral(themePropertyKey)]
      )
    );
  }

  function isImportOrRequire(node, name) {
    if (t.isImportDeclaration(node)) {
      return t.isStringLiteral(node.source, { value: name });
    } else if (t.isVariableDeclarator(node)) {
      return (
        t.isCallExpression(node.init) &&
        t.isIdentifier(node.init.callee, { name: 'require' }) &&
        t.isLiteral(node.init.arguments[0], { value: name })
      );
    }
    return false;
  }

  const declareVisitor = {
    'ImportDeclaration|VariableDeclarator'(path, state) {
      if (isImportOrRequire(path.node, './theme')) {
        path.remove();
        return;
      }

      if (!isImportOrRequire(path.node, state.importName)) {
        return;
      }

      checkSfBindingNode(state.file, path.node);
      const bindingName = t.isImportDeclaration(path.node) ? path.node.specifiers[0].local.name : path.node.id.name;
      const sfBindings = path.scope.getOwnBinding(bindingName);

      sfBindings.constantViolations.forEach(refPath => {
        throw state.file.buildCodeFrameError(refPath.node, '`sf` cannot be redefined.');
      });

      let didTransform = false;
      let didSkip = false;

      const temp = path.scope.generateUidIdentifier('sf');

      const f1 = createStyledFunction();
      path.scope.push({
        id: temp,
        init: f1,
      });
      state.temp = temp;
      // Traverse the references backwards to process inner calls before
      // outer calls.
      sfBindings.referencePaths
        .slice()
        .reverse()
        .forEach(refPath => {
          if (refPath.node === sfBindings.node) {
            // Do nothing...
          } else if (refPath.parentPath.isCallExpression()) {
            visitSfCallExpression(refPath.parentPath, state);
            didTransform = true;
          } else {
            // Should this throw?
            didSkip = true;
          }
        });
      if (didTransform && !didSkip) {
        path.remove();
      }
    },
  };

  return {
    visitor: {
      Program(path, state) {
        const importName = state.opts.importName || 'sf';
        // If there can't reasonably be an sf call, exit fast.
        if (importName !== 'sf' || idxRe.test(state.file.code)) {
          // We're very strict about the shape of sf. Some transforms, like
          // "babel-plugin-transform-async-to-generator", will convert arrow
          // functions inside async functions into regular functions. So we do
          // our transformation before any one else interferes.
          const newState = { file: state.file, importName };
          path.traverse(declareVisitor, newState);
        }
      },
    },
  };
};
