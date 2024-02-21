import { useRef, useState } from "react";
import { ProjectsContainer, ProjectsInfoContainer, WelcomeText } from "./ProjectsInfoStyledComponents";
import Typewriter from 'typewriter-effect';

export default function ProjectsInfo() {
  const [titleTyped, setTitleTyped] = useState(false);
  const [showSlides, setShowSlides] = useState(false);
  const welcomeTextRef = useRef(null);

  function welcomeTextFadeOut(){
    welcomeTextRef.current.classList.add("welcomeText__fade-out");
    setTimeout(()=>{setShowSlides(true)}, 1000);
  }

  return(
    <ProjectsInfoContainer>

      {
        !showSlides 
        ?(
          <WelcomeText ref={welcomeTextRef}>
            <Typewriter
              onInit={typewriter=>{
                typewriter
                .pauseFor(1000)
                .typeString("Projects")
                .pauseFor(1000)
                .callFunction(()=>{setTitleTyped(true);})
                .start();
              }}
              options={{
                wrapperClassName: "title",
                cursor: ""
              }}
            />
            {
              titleTyped &&
              <div className="subtitle">
                <hr className="subtitle--separator" />
                <Typewriter
                  onInit={typewriter=>{
                    typewriter
                    .typeString("Here are some of the projects I've worked on")
                    .pauseFor(1000)
                    .callFunction(welcomeTextFadeOut)

                    .start();
                  }}
                  options={{
                    wrapperClassName: "subtitle--text",
                    delay: 40,
                    cursor: ""
                  }}
                />

              </div>
            }
          </WelcomeText>
        )
        :(
          <ProjectsContainer>
            proyect1
          </ProjectsContainer>
        )
      }  
      

    </ProjectsInfoContainer>
  )
};
