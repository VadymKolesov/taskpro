export const getThemeStyle = (css, theme) => {
  switch (theme) {
    case "light":
      return css.light;
    case "violet":
      return css.violet;
    case "dark":
      return css.dark;
    default:
      return css.dark;
  }
};
