import styled, { keyframes, css } from "styled-components";

const falling = keyframes`
  0% {
    margin-top: -50px;
  }
  100% {
    margin-top: 20px;
  }
`;

const View = {};

View.Wraper = styled.div`
  position: relative;
`;

View.Counter = styled.p(({ animation }) => {
  if (animation) {
    return css`
      position: absolute;
      width: 100%;
      height: 100%;
      animation: 0.1s ${falling} ease-in-out;
    `;
  }
  return css`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: none;
  `;
});

export default View;
