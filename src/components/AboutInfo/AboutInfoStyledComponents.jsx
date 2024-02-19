import styled from "styled-components";
import { primaryColor } from "../../constants/styleConstants";
import svgPc from "../../assets/svgs/programming-monitor-svgrepo-com.svg";

export const AboutInfoContainer = styled.div`
  text-align: left;
  /* background-color: #1f1f1f; */
  color: ${primaryColor};
  font-size: 1rem;

  overflow-y: scroll;
  scrollbar-width: none;
  height: inherit;
  padding: .5rem 1rem;
  width: 100%;

  background-image:
  linear-gradient( rgba(0, 0, 0, .85), rgba(0, 0, 0, .85) ) ,
  url(${svgPc});
  background-size: 95% 95%;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

`;