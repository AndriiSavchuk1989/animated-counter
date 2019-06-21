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
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  text-align: center;
  overflow: hidden;
`;

View.Counter = styled.p(({ animation }) => {
  if (animation) {
    return css`
      position: absolute;
      width: 100%;
      height: 100%;
      animation: 0.8s ${falling} ease-in;
    `;
  }
  return css`
    position: absolute;
    width: 100%;
    height: 100%;
    animation: 0.8s ${falling} ease-in;
  `;
});

export default View;
