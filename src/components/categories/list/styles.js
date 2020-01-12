import styled, { css, keyframes } from "styled-components";
import { scale } from "../../../styles/animations";

const Ul = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    background: #ffffff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20;
    transform: scale(0.5);
    ${scale()}
    z-index: 1;
  `}
`;

const Li = styled.li`
  padding: 0 8px;
`;

export {
    Ul,
    Li,
};
