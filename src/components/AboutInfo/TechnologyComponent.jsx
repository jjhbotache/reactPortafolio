import styled, { keyframes } from "styled-components";
import { darkColor, lightColor, primaryColor, secondaryColor } from "../../constants/styleConstants";
import { motion } from "framer-motion";

export default function TechnologyComponent({tech}) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: tech.knowlegePercentage/100,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1, bounce: 0 },
        opacity: { duration: 0.1 }
      }
    }
  };


  return (
    <Container className="technologies-section__technology" $floatingDelay={Math.random()*3} >
      <div onClick={e=>window.open(tech.technologyLink, '_blank')}>
        <img src={tech.svgUrl} alt={tech.name} />

        <div className="technologies-section__percentage">
          <motion.span
            className="technologies-section__percentage-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {tech.knowlegePercentage}%
          </motion.span>
            
          <motion.svg
            className={"technologies-section__circle"}
            initial="hidden"
            whileInView="visible"
          >
            <motion.circle
              cx="50%"
              cy="50%"
              r="40%"
              variants={draw}
            />
          </motion.svg>
        </div>

        <p>{tech.name}</p>
      </div>
    </Container>
  );
  
};



const floating = keyframes`
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-.2rem);
  }
`;


const Container = styled.li`

  /* &__technology{ */
  width: 5em;
  
  box-sizing: border-box;
  height: auto;
  max-width: 100px;
  

  background-color: ${darkColor}aa;
  
  
    
  box-shadow: 0 0 1rem rgba(25, 25, 25, 1);
  backdrop-filter: blur(10px);
  border-radius: .5rem;
  padding: .2rem;
  transition: .5s all ease-out;
  animation: ${floating} 2s infinite;
  animation-delay: ${props=>props.$floatingDelay}s;
  cursor: pointer;


  &>div{
    height: auto;
    min-height: 6.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }


  &:hover{
    transform: scale(1.1);
    box-shadow: 0 0 1rem rgba(255, 255, 255, .5);
  }

  .technologies-section__percentage{
    position: relative;
    font-size: 20px;
    width: 1.7em;
    height: 1.7em;
    .technologies-section__percentage-text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: .5em;
      font-weight: bold;
      padding: .1rem;
      text-align: center;
      letter-spacing: .01rem;
      color: ${lightColor};
    }
    .technologies-section__circle{
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      width: 100%;
      height: 100%;
      circle{
        fill: transparent;
        stroke: ${({ theme }) => theme.colors.secondaryColor};
        stroke-width: .2rem;
      }
    }
  }
  

  img{
    width: 3.5em;
    height: 2.5em;
    max-width: 3.5em;
    max-height: 2.5em;
    border-radius: .2rem;
    padding: .1rem;
  }
  p{
    font-size: .7rem;
    font-weight: bold;
    margin: 0;
    color: ${lightColor};
    line-height: 1em;
    background-color: transparent;

    a{
      text-decoration: none;
      color: ${secondaryColor};
    }
  }

  
`;
