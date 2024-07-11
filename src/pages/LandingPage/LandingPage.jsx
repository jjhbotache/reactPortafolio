import { useEffect, useRef } from "react"
import { LandingPageStyledComponent } from "./LandingPageStyledComponents"
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';



export default function LandingPage() {
  // create a cursor glow effect

  const cursorEffectRef = useRef(null);
  const mainContentRef = useRef(null);
  const navigate = useNavigate();

  const mainRef = useRef(null)

  useEffect(() => {
    const divCursorEffect = cursorEffectRef.current;
    divCursorEffect.style.opacity = 0;


    function cursorEffectFunction (e){
      setTimeout(()=>{
        const divCursorEffect = cursorEffectRef.current;
        // divCursorEffect.style.opacity = 0.07
        divCursorEffect.style.left = e.pageX + "px"
        divCursorEffect.style.top = e.pageY + "px"
      },50)
    }



    window.addEventListener("mousemove", cursorEffectFunction);
    return () => {
      window.removeEventListener("mousemove", cursorEffectFunction);
    }
  }, []);

  function redirect(){
    const mainContent = mainContentRef.current;
    mainContent.classList.add("main-content__title__fade-out")
    try { document.documentElement.requestFullscreen()}
    catch (e) { console.log("Can't request fullscreen mode") }

    setTimeout(()=>{
      navigate("/main");
    }, 800)
  }
  
  return(
    <LandingPageStyledComponent onClick={redirect} ref={mainRef}>
      <div className="cursor-effect" ref={cursorEffectRef}></div>
      <div className="main-content" ref={mainContentRef}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString(`Hola`)
            .pauseFor(500)
            .typeString(`, soy Juan,`)
            .pauseFor(250)
            .typeString(`un programador`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`Hey`)
            .pauseFor(500)
            .typeString(`, I'm Juan,`)
            .pauseFor(250)
            .typeString(`a developer`)
            .pauseFor(2000)
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

    </LandingPageStyledComponent>
  )
};

