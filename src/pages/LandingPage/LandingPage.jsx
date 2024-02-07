import { useEffect, useRef } from "react"
import { LandingPageStyledComponent } from "./LandingPageStyledComponents"
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // create a cursor glow effect

  const cursorEffectRef = useRef(null);
  const mainContentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mainContent = mainContentRef.current;




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
    setTimeout(()=>{
      document.documentElement.requestFullscreen()
      navigate("/main");
    }, 1500)
  }
  return(
    <LandingPageStyledComponent>
      <div className="cursor-effect" ref={cursorEffectRef}></div>
      <div className="main-content" onClick={redirect} ref={mainContentRef}>
        <button className="main-content--title">Hey, I'm Juan</button>
        <small className="main-content--instruction">click us</small>
      </div>

    </LandingPageStyledComponent>
  )
};

