import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
`;

const Spinner = styled(AiOutlineLoading3Quarters)`
  color: #000;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
`;

export {
    Spinner,
    Wrapper,
};
