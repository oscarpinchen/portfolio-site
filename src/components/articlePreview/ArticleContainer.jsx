import { device } from '../globalStyles/device';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  display: flex;
  position: relative;
  transition-duration: 0.2s;

  @media ${device.extraSmallDevice} {
    margin: 0 auto 40px;
    max-width: 310px;
  }

  @media ${device.smallDevice} {
    margin: 0 auto 40px;
    max-width: 450px;
  }

  @media ${device.mediumDevice} {
    left: 3.2%;
    margin: 0 auto 40px;
    max-width: 750px;
    min-height: 300px;
  }

  @media ${device.largeDevice} {
    left: 3.2%;
    margin: 0 auto 40px;
    max-width: 800px;
    min-height: 300px;
  }

  @media ${device.extraLargeDevice} {
    left: 2.1%;
    margin: 0 auto 40px;
    max-width: 900px;
    min-height: 300px;
  }
`;

export default ArticleContainer;