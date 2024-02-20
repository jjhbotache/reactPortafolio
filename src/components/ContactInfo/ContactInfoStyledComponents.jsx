import styled from "styled-components";

export const ContactInfoContainer = styled.div`
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

.motion-div{
  background-color: #222;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: grid;
  place-items: center;

  /* border-radius: 50%; */
}
`;