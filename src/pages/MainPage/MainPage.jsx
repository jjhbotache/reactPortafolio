import { useEffect, useRef } from "react"
import { MainPageStyledComponent } from "./MainPageStyledComponents";
import purpleTriangle from "../../assets/svgs/purple_triangle.svg"

export default function MainPage() {
  const bottomLeftFrameRef = useRef(null);
  const topRightFrameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
    bottomLeftFrameRef.current.classList.add('frame__on-corner');
    topRightFrameRef.current.classList.add('frame__on-corner');
      setTimeout(() => {
        titleRef.current.style.opacity = 1;
      }, 4000);
    }, 100);

  }, []);

  return (
    <MainPageStyledComponent>
      <div className="frame frame--bottom-left" ref={bottomLeftFrameRef}>
        <div className="rectangle rectangle__left"> <img src={purpleTriangle} alt="purple triangle" className="rectangle--triangle"/> </div>
        <div className="rectangle rectangle__bottom"> <img src={purpleTriangle} alt="purple triangle" className="rectangle--triangle"/> </div>
      </div>
      <div className="frame frame--top-right" ref={topRightFrameRef}>
        <div className="rectangle rectangle__top"> <img src={purpleTriangle} alt="purple triangle" className="rectangle--triangle"/> </div>
        <div className="rectangle rectangle__right"> <img src={purpleTriangle} alt="purple triangle" className="rectangle--triangle"/> </div>
      </div>

      <h1 ref={titleRef} style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
      }}>
        Apenas empiezo :D
      </h1>
    </MainPageStyledComponent>
  )
};
