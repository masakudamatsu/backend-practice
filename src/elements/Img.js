import styled from 'styled-components';

const Img = styled.img`
  display: block; /* Prevent images from aligning with other contents */
  height: auto; /* Preserve the aspect ratio */
  margin: auto; /* For vertically centering the image #2 */
  max-width: 100%; /* Control the image size by the box size of the figure */
`;

export default Img;
