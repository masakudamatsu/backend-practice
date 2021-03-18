import styled from 'styled-components';
import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';
import remify from 'src/utils/remify';

const H1 = styled.h1`
  ${fontCssGenerator(font.h1)}
`;

export default H1;
