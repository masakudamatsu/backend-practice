import styled from 'styled-components';
import PropTypes from 'prop-types';

const TemplateBlock = styled.div`
  ${props => props.testProp && 'display: inline-block'}
`;

TemplateBlock.propTypes = {
  testProp: PropTypes.bool,
};

export default TemplateBlock;
