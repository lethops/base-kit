/**
 * @full-name Get Static Theme Item
 * @description return function that return theme property
 * // TODO add ThemeType instead of string
 */
export const t = (property: string) => ({ theme }: any) => theme[property];

/**
 * @full-name Get `Dynamic` Theme Item
 * @description return function that return theme property
 * // TODO add ThemeType instead of string(key)
 * // TODO add ModType instead of string(key)
 */
export const dt = <T>(property: string, propsKey: keyof T, defaultValue: string = 'base') => ({
  theme,
  ...props
}: any) => {
  const modEnding = props[propsKey] || defaultValue;
  return theme[`${property}${modEnding ? `_${modEnding}` : ''}`];
};
