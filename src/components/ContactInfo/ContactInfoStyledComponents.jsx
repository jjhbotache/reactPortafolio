import styled from "styled-components";

export const ContactInfoContainer = styled.div`
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

.contactCircleContainer{
  background-color: #222;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  /* border-radius: 50%; */
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.053) 0%,
      #222222a6 50%,
      rgba(0,0,0,0) 100%
      
    );
    transition: all .4s ease;
  }

  .contactCircleContainer--item{
    position: absolute;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
`;

