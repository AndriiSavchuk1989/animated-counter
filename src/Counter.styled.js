import styled, { css, keyframes } from "styled-components";

const falling = keyframes`
  0% {
    margin-top: -50px;
  }
  100% {
    margin-top: 20px;
  }
`;

const Counter = {};

Counter.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Counter.IncreaseButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid black;
`;
Counter.DecreaseButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid black;
`;
Counter.ViewBoard = styled.p`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  text-align: center;
  line-height: 50px;
  overflow: hidden;
`;

Counter.View1 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

Counter.View = styled.span(({ animationStart }) => {
  if (animationStart) {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation: 0.1s ${falling} ease-in;
    `;
  }
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: 0.1s ${falling} ease-in;
  `;
});

export default Counter;
