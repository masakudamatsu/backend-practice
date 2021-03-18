import styled from 'styled-components';
import PropTypes from 'prop-types';

const TemplateElement = styled.div`
  ${props => props.testProp && 'display: inline-block'}
`;

TemplateElement.propTypes = {
  testProp: PropTypes.bool,
};
export default TemplateElement;
