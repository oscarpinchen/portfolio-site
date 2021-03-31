import { device } from '../globalStyles/device';
import styled from 'styled-components';

const ArticleImage = styled.img`
  border-radius: 10px;
  position: absolute;
  transition-duration: 0.2s;

  @media ${device.extraSmallDevice} {
    left: 50%;
    max-width: 270px;
    transform: translatex(-50%);
    top: 20px;
  }

  @media ${device.smallDevice} {
    left: 50%;
    max-width: 400px;
    transform: translatex(-50%);
    top: 24px;
  }

  @media ${device.mediumDevice} {
    left: -7.5%;
    max-width: 350px;
    top: 50%;
    transform: translatey(-50%);
  }

  @media ${device.largeDevice} {
    left: -7.5%;
    max-width: 350px;
    top: 50%;
    transform: translatey(-50%);
  }

  @media ${device.extraLargeDevice} {
    left: -10%;
    max-width: 400px;
    top: 50%;
    transform: translatey(-50%);
  }
`;

export default ArticleImage;