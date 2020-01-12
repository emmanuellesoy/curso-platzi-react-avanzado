import styled, { css, keyframes } from "styled-components";

const fadeInBlur = keyframes`
    from {
      filter: blur(5px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
`;

const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`;

const fadeIn = ({time = "1s", type = "ease"} = {}) => css`animation: ${time} ${fadeInBlur} ${type}`;
const scale = ({time = "1s", type = "ease"} = {}) => css`animation: ${time} ${scaleDown} ${type}`;


export {
    fadeIn,
    scale,
};
