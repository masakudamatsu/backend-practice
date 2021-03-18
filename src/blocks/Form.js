import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputText from 'src/elements/InputText';
import Label from 'src/elements/Label';

import {form, input} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const Form = styled.form`
  position: relative;
`;

const padding = {
  bottom: form.whitespace.belowInputValue,
  left: form.whitespace.left,
  top:
    form.whitespace.aboveLabel +
    form.capHeight.label +
    form.whitespace.aboveInputValue,
};

const extraBorderWidth = (input.borderWidth.active =
  input.borderWidth.inactive);

Form.InputText = styled(InputText)`
  padding-bottom: ${remify(padding.bottom)};
  padding-left: ${remify(padding.left)};
  padding-top: ${remify(padding.top)};
  width: 100%;
  &:active,
  &:hover,
  &:focus {
    padding-bottom: ${remify(padding.bottom - extraBorderWidth)};
    padding-left: ${remify(padding.left - extraBorderWidth)};
    padding-top: ${remify(padding.top - extraBorderWidth)};
  }
  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${remify(padding.bottom * scale)};
    padding-left: ${remify(padding.left * scale)};
    padding-top: ${remify(padding.top * scale)};
    &:active,
    &:hover,
    &:focus {
      padding-bottom: ${remify(padding.bottom * scale - extraBorderWidth)};
      padding-left: ${remify(padding.left * scale - extraBorderWidth)};
      padding-top: ${remify(padding.top * scale - extraBorderWidth)};
    }
  }
`;

Form.Label = styled(Label)`
  position: absolute;
  top: ${remify(form.whitespace.aboveLabel + input.borderWidth.inactive)};
  left: ${remify(form.whitespace.left + input.borderWidth.inactive)};
  transform: translateX(-0.08em); /* To be left-aligned with input text */
  @media only screen and ${mediaQuery.font} {
    top: ${remify(
      form.whitespace.aboveLabel * scale + input.borderWidth.inactive,
    )};
    left: ${remify(form.whitespace.left * scale + input.borderWidth.inactive)};
  }
`;

Form.propTypes = {
  testProp: PropTypes.bool,
};

export default Form;
