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
        divCursorEffect.style.opacity = 0.07
        divCursorEffect.style.left = e.pageX + "px"
        divCursorEffect.style.top = e.pageY + "px"
      },100)
    }

    // setTimeout(()=>{
    //   alert("height: ",window.innerHeight)
    //   alert(window.innerHeight)
    //   alert("main height: ",mainRef.current.innerHeight)
    //   alert(mainRef.current.clientHeight)
    // }, 2000)


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
            .typeString(`un desarrollador`)
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
              wrapperClassName: "main-content--title",
              cursorClassName: "main-content--title__cursor",
              loop: true,
              delay: 30,
              deleteSpeed: 30,
            }
          }
        />
        <small className="main-content--instruction">Click us - Cliquéanos</small>
      </div>

    </LandingPageStyledComponent>
  )
};

