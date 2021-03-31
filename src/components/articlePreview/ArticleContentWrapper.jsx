import { device } from '../globalStyles/device';
import styled from 'styled-components';

const ArticleContentWrapper = styled.div`
  transition-duration: 0.2s;

  @media ${device.extraSmallDevice} {
    margin: 220px auto 6px;
    max-width: 280px;
    text-align: center;
  }

  @media ${device.smallDevice} {
    margin: 300px auto 6px;
    max-width: 400px;
    text-align: center;
  }

  @media ${device.mediumDevice} {
    margin: auto 0 auto 42.5%;
    max-width: 450px;
    text-align: left;
  }

  @media ${device.largeDevice} {
    margin: auto 0 auto 38%;
    max-width: 480px;
    text-align: left;
  }

  @media ${device.extraLargeDevice} {
    margin: auto 0 auto 37%;
    max-width: 550px;
    text-align: left;
  }
`;

export default ArticleContentWrapper;