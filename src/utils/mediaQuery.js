import {breakpointForFont} from './specFont';
import remify from './remify';
import {twoColumns, threeColumns} from './specLayout';

export const mediaQuery = {
  font: `(min-width: ${remify(breakpointForFont)})`,
  twoColumns: `(min-width: ${remify(twoColumns.minWidth)})`,
  threeColumns: `(min-width: ${remify(threeColumns.minWidth)})`,
};
