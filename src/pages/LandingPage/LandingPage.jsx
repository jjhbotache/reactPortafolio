import { useEffect, useRef } from "react"
import { LandingPageStyledComponent } from "./LandingPageStyledComponents"
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';



export default function LandingPage() {
  // create a cursor glow effect

  const cursorEffectRef = useRef(null);
  const mainContentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cursorEffectFunction = (e) => {
      setTimeout(()=>{
        const divCursorEffect = cursorEffectRef.current;
        divCursorEffect.style.left = e.pageX + "px";
        divCursorEffect.style.top = e.pageY + "px";
      },200)
    }
    cursorEffectFunction();


    window.addEventListener("mousemove", cursorEffectFunction);
    return () => {
      window.removeEventListener("mousemove", cursorEffectFunction);
    }
    

  }, []);

  function redirect(){
    const mainContent = mainContentRef.current;
    console.log("redirecting");
    mainContent.classList.add("main-content--title__fade-out")
    document.documentElement.requestFullscreen()
    setTimeout(()=>{
      navigate("/main");
    }, 1500)
  }
  return(
    <LandingPageStyledComponent>
      <div className="cursor-effect" ref={cursorEffectRef}></div>
      <div className="main-content" onClick={redirect} ref={mainContentRef}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(`Hey, I'm Juan, a developer.`)
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
          options={
            {
              wrapperClassName: "main-content--title",
              cursorClassName: "main-content--title__cursor",
              // cursor: " ",
            }
          }
        />
        <small className="main-content--instruction">click us</small>
      </div>

    </LandingPageStyledComponent>
  )
};

