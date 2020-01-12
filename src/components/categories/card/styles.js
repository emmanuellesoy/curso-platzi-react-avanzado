import styled from "styled-components";
import { Link } from "@reach/router";

const A = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

const EmojiContainer = styled.div`
  margin: 10px;
`;

const Img = styled.img`
  text-decoration: none;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 75px;
  overflow: hidden;
  object-fit: cover;
  width: 75px;
`;


export {
    A,
    EmojiContainer,
    Img,
};
