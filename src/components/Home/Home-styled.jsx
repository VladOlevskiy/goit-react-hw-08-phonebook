import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';

export const Section = styled.section`
  background-image: linear-gradient(
    to right,
    rgb(238, 242, 243),
    rgb(142, 158, 171)
  );
  margin-right: auto;
  margin-left: auto;
`;
export const ParallaxEl = styled(ParallaxBanner)`
  height: 90vh;
`;

export const WrapperContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.23);
`;

export const TitleContent = styled.h3`
  font-size: 26px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  &.main {
    font-size: 36px;
    color: white;
    text-align: center;
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }
`;

export const TextContent = styled.p`
  font-size: 18px;
`;

export const WrapperText = styled.div`
  position: absolute;
  right: 40px;
  padding: 35px;
  background-image: linear-gradient(
    to right,
    rgb(0 0 0 / 54%),
    rgb(104 65 5 / 70%)
  );
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(20px);
  border-radius: 30px;
  width: 600px;
  &.main {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
  @media screen and (max-width: 767px) {
    right: 50%;
    transform: translateX(50%);
    width: 100%;
    max-width: 500px;
  }
  /* &.main {
    width: 800px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -70%);
  } */
`;
