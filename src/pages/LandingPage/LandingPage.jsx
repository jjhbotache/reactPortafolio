import { useEffect, useRef } from "react"
import { LandingPageStyledComponent } from "./LandingPageStyledComponents"

export default function LandingPage() {
  // create a cursor glow effect

  const cursorEffectRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;



    const cursorEffectFunction = (e) => {
      setTimeout(()=>{
        const divCursorEffect = cursorEffectRef.current;
        divCursorEffect.style.left = e.pageX + "px";
        divCursorEffect.style.top = e.pageY + "px";
      },200)
    }

    const mouseOverTitleFunction = (e) => {
      title.classList.add("title__fade-out")
      setTimeout(()=>{
        console.log("redirecting");
        window.location.assign("https://www.google.com/")
      }, 800)
    }

    window.addEventListener("mousemove", cursorEffectFunction);

    title.addEventListener("mouseover", mouseOverTitleFunction);
    return () => {
      window.removeEventListener("mousemove", cursorEffectFunction);

      window.removeEventListener("mouseover", mouseOverTitleFunction);
    }
    

  }, []);
  return(
    <LandingPageStyledComponent>
      <div className="cursor-effect" ref={cursorEffectRef}></div>
      <button className="title" ref={titleRef}>Hey, I'm Juan</button>

    </LandingPageStyledComponent>
  )
};

