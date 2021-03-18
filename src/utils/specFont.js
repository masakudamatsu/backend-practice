export const poppins = {
  light: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 300,
    unitsPerEm: 1000,
    xHeight: 546,
    capHeight: 700,
  },
  thin: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 100,
    unitsPerEm: 1000,
    xHeight: 540,
    capHeight: 702,
  },
}; // Measured with https://opentype.js.org/font-inspector.html

// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;
export const breakpointForFont = 728;

// Type scales
export const typescale = {
  test: {
    capHeight: poppins.thin.capHeight / 10,
    xHeightRatio: 5,
    betweenLinesRatio: 6,
    textCropEm: {
      top: -0.249,
      bottom: -0.255,
    },
    fontMetrics: poppins.thin,
  },
  display: {
    capHeight: 15,
    xHeightRatio: 3,
    betweenLinesRatio: 4,
    textCropEm: {
      top: -0.304, // from -0.281 to -0.327
      bottom: -0.3325, // from -0.305 to -0.350
    },
    fontMetrics: poppins.light,
  },
  body: {
    capHeight: 15,
    xHeightRatio: 3,
    betweenLinesRatio: 4,
    textCropEm: {
      top: -0.304, // from -0.281 to -0.327
      bottom: -0.3325, // from -0.305 to -0.350
    },
    fontMetrics: poppins.light,
  },
  smallPrint: {
    capHeight: 10,
    xHeightRatio: 2,
    betweenLinesRatio: 3,
    textCropEm: {
      top: -0.3165, // from -0.282 to -0.351
      bottom: -0.4195, // from -0.385 to -0.454
    },
    fontMetrics: poppins.light,
  },
};

// Assign type scales to components
export const font = {
  h1: typescale.display,
  footer: typescale.smallPrint,
  linkText: typescale.body,
  section: typescale.body,
  textCropper: typescale.test,
};
