import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

export const StyledHero = styled.header`
  min-height: calc(66vh - 66px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
