import { useEffect, useRef } from "react"
import { MainInfo, MainPageStyledComponent } from "./MainPageStyledComponents";
import purpleTriangle from "../../assets/svgs/purple_triangle.svg"
import tvNoiseGif from "../../assets/gifs/tv_noise.gif"
import Chanels from "../../components/Chanels/Chanels";

export default function MainPage() {
  const bottomLeftFrameRef = useRef(null);
  const topRightFrameRef = useRef(null);
  const MainRef = useRef(null);
  const tvRef = useRef(null);

  const chanels = [
    {
      name:"About",
      value: "about"
    },
    {
      name:"Projects",
      value: "projects"
    },
    {
      name:"Contact",
      value: "contact"
    },
  ]

  useEffect(() => {

    function setTvHeightAndWidth() {
      const tv = tvRef.current;

      tv.style.height = "100%";
      tv.style.width = "100%";

      const tvSizes = [tv.clientWidth, tv.clientHeight];
      const minSize = Math.min(...tvSizes);
      tv.style.height = minSize + "px"
      tv.style.width = minSize + "px" 
    }


    setTimeout(() => {
    bottomLeftFrameRef.current.classList.add('frame__on-corner');
    topRightFrameRef.current.classList.add('frame__on-corner');
      setTimeout(() => {
        MainRef.current.classList.add('fade-in');
        setTvHeightAndWidth();
      }, 2500);
    }, 100);


    window.addEventListener('resize', setTvHeightAndWidth);
    return () => {
      window.removeEventListener('resize', setTvHeightAndWidth);
    }

  }, []);

  function onChanelSelect(chanel){
    alert(chanel);
  }

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

          {/* <div className="chanels">
            <ul className="chanels--list">
              {chanels.map((chanel, index) => (
                <li key={index}>
                  <a href={chanel.link}>{chanel.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
          
          <hr className="title-texts-and-chanels-separator" />

          <Chanels chanels={chanels} onSelectChanel={onChanelSelect} />

          <div className="tv-container">
            <div className="tv" ref={tvRef}>
              <img src={tvNoiseGif} alt="tv_noise_gif" className="tv-noise-gif" />
            </div>
          </div>
        </div>
      </MainInfo>
    </MainPageStyledComponent>
  )
};
