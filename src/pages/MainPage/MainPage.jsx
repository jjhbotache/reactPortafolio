import { useEffect, useRef } from "react"
import { MainInfo, MainPageStyledComponent } from "./MainPageStyledComponents";
import purpleTriangle from "../../assets/svgs/purple_triangle.svg"

export default function MainPage() {
  const bottomLeftFrameRef = useRef(null);
  const topRightFrameRef = useRef(null);
  const MainRef = useRef(null);
  const tvRef = useRef(null);

  const chanels = [
    {
      name:"About",
      link: "#"
    },
    {
      name:"Projects",
      link: "#"
    },
    {
      name:"Contact",
      link: "#"
    },
  ]

  useEffect(() => {
    const tv = tvRef.current;

    // get the tv width and height
    // see wich is the smallest and set the biggest to this value
    const tvWidth = tv.clientWidth;
    const tvHeight = tv.clientHeight;
    tvWidth < tvHeight
      ? tv.style.height = tvWidth + "px"
      : tv.style.width = tvHeight + "px" 

    setTimeout(() => {
    bottomLeftFrameRef.current.classList.add('frame__on-corner');
    topRightFrameRef.current.classList.add('frame__on-corner');
      setTimeout(() => {
        MainRef.current.classList.add('fade-in');
      }, 2500);
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


      <MainInfo ref={MainRef}>
        <div className="container">
          <div className="title-texts">
            <h1 className="name name__first">Juan Jose</h1>
            <h2 className="name name__last">Huertas Botache</h2>
            <h3 className="rol">Frontend Developer - Python developer</h3>
          </div>

          <div className="chanels">
            <ul className="chanels--list">
              {chanels.map((chanel, index) => (
                <li key={index}>
                  <a href={chanel.link}>{chanel.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tv-container">
            <div className="tv" ref={tvRef}/>
          </div>
        </div>
      </MainInfo>
    </MainPageStyledComponent>
  )
};
