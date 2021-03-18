import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {color} from 'src/utils/specColor';
import {fontCssGenerator} from 'src/utils/getFontCss';
import {mediaQuery} from 'src/utils/mediaQuery';
import {poppins, scale, typescale} from 'src/utils/specFont';
import {textCropper, sectionDiv} from 'src/utils/specLayout';

const Section = styled.section`
  left: ${textCropper.left};
  position: absolute;
  top: ${textCropper.top};
  width: ${textCropper.width};
`;

Section.BlockElement = styled.div`
  background-color: ${color.textCropper.blockElement};
  height: ${textCropper.blockElement.height}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${textCropper.blockElement.height * scale}px;
  }
`;

Section.CapHeightBox = styled.div`
  background-color: ${color.textCropper.capHeightBox};
  height: ${textCropper.capHeightBox.height}px;
  left: 0;
  position: absolute;
  top: ${textCropper.blockElement.height}px;
  width: 100%;
  z-index: -1;
  @media only screen and ${mediaQuery.font} {
    height: ${textCropper.capHeightBox.height * scale}px;
    top: ${textCropper.blockElement.height * scale}px;
  }
`;

Section.TextBox = styled.p`
  border: 1px dashed ${color.textCropper.textBox.border};
  color: ${color.textCropper.textBox.font};

  ${fontCssGenerator(typescale.test)}

  width: 100%;
`;

const TextCropper = () => {
  return (
    <Section>
      <Section.BlockElement />
      <Section.CapHeightBox />
      <Section.TextBox>Hex</Section.TextBox>
      <Section.BlockElement />
    </Section>
  );
};

TextCropper.propTypes = {};

export default TextCropper;
