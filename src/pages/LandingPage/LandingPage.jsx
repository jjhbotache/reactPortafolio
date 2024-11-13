import { useEffect, useRef } from "react"
import { LandingPageStyledComponent } from "./LandingPageStyledComponents"
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Analytics } from "@vercel/analytics/react"



export default function LandingPage() {
  // create a cursor glow effect

  const mainContentRef = useRef(null);
  const navigate = useNavigate();

  const mainRef = useRef(null)


  function redirect(e){
    const mainContent = mainContentRef.current;
    mainContent.classList.add("main-content__title__fade-out")

    setTimeout(()=>{
      navigate("/main");
    }, 800)
  }
  
  return(
    <LandingPageStyledComponent onClick={redirect} ref={mainRef}>
      <div className="main-content" ref={mainContentRef}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString(`Hola`)
            .pauseFor(500)
            .typeString(`, soy Juan,`)
            .pauseFor(250)
            .typeString(`un desarrollador`)
            .pauseFor(3000)
            .deleteAll()
            .typeString(`Hey`)
            .pauseFor(500)
            .typeString(`, I'm Juan,`)
            .pauseFor(250)
            .typeString(`a developer`)
            .pauseFor(3000)
            .deleteAll()
            .pauseFor(500)
            .start();
          }}
          options={
            {
              wrapperClassName: "main-content__title",
              cursorClassName: "main-content__title__cursor",
              loop: true,
              delay: 30,
              deleteSpeed: 30,
            }
          }
        />
        <small className="main-content__instruction">Click us - Cliquéanos</small>
      </div>
      <Analytics />
    </LandingPageStyledComponent>
  )
};

