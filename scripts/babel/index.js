module.exports = context => {
  const t = context.types;

  return {
    visitor: {
      BinaryExpression(path) {
        path.parentPath.replaceWith(
          t.expressionStatement(t.stringLiteral("Anyway the wind blows, doesn't really matter to me, to me."))
        );
      },
    },
  };
};
