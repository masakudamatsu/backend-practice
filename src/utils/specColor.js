// Color palette (with Material Design as an example: https://material.io/design/color/the-color-system.html)

const primary = '#6200ee';
const primaryShade = '#3700b3';
const primaryTint = '#bb86fc';

const secondary = '#03dac6'; // should be applied sparingly to accent select parts of your UI (Floating action buttons, Selection controls, like sliders and switches, Highlighting selected text, Progress bars, Links and headlines)
const secondaryShade = '#018786';

const background = '#0a0a0a'; // behind scrollable content
const surface = '#0a0a0a'; // cards, sheets, and menus
const error = 'rgb(254, 254, 50)'; // errors in components, such as invalid text in a text field

// text, iconography, and stroke
const onPrimary = '#ffffff';
const onSecondary = '#000000';
const onBackground = '#ffffff';
const onSurface = '#ffffff';
const onError = '#0a0a0a';

export const color = {
  body: {
    background: background,
    font: onBackground,
  },
  linkText: {
    background: {
      default: background,
      onHover: secondaryShade,
    },
    font: 'inherit',
  },
  section: {
    background: surface,
    font: onSurface,
    linkText: {
      background: primaryShade,
      font: onSurface,
    },
  },
  banner: {
    background: error,
    font: onError,
    linkText: {
      background: secondary,
      font: onError,
    },
  },
  figure: {
    border: onBackground,
  },
  footer: {
    background: secondaryShade,
    borderTop: onSecondary,
    font: onSecondary,
    linkText: {
      background: secondary,
      font: onSecondary,
    },
  },
  header: {
    background: secondary,
    borderBottom: onSecondary,
    font: onSecondary,
  },
  input: {
    background: background,
    border: onBackground,
    font: onBackground,
  },
  get label() {
    return {
      font: this.input.font,
    };
  },
  textCropper: {
    blockElement: secondary,
    capHeightBox: primary,
    textBox: {
      border: error,
      font: onPrimary,
    },
  },
};
