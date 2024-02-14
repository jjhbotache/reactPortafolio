import { useEffect, useRef, useState } from "react"
import { MainInfo, MainPageStyledComponent } from "./MainPageStyledComponents";
import purpleTriangle from "../../assets/svgs/purple_triangle.svg"
import tvNoiseGif from "../../assets/gifs/tv_noise.gif"
import Chanels from "../../components/Chanels/Chanels";
import InfoDisplayer from "../../components/InfoDisplayer/InfoDisplayer";

export default function MainPage() {
  const bottomLeftFrameRef = useRef(null);
  const topRightFrameRef = useRef(null);
  const MainRef = useRef(null);
  const mainComponentRef = useRef(null);
  const [titleInfoToDisplay, setTitleInfoToDisplay] = useState(null);
  

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

    


    setTimeout(() => {
    bottomLeftFrameRef.current.classList.add('frame__on-corner');
    topRightFrameRef.current.classList.add('frame__on-corner');
      setTimeout(() => {
        MainRef.current.classList.add('fade-in');
      }, 2500);
    }, 100);


    function onFullScreenChange(){
      // reset the with and height of the main component
      mainComponentRef.current.style.width = "100vw";
      mainComponentRef.current.style.height = "100vh";
    }

    // detect if the user enter or exits the fullscren mode
    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
    }

  }, []);

  function onChanelSelect(chanel){
    setTitleInfoToDisplay(chanel.value);
  }

  return (
    <MainPageStyledComponent ref={mainComponentRef}>
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

          <InfoDisplayer titleInfoToDisplay={titleInfoToDisplay}/>
        </div>
      </MainInfo>
    </MainPageStyledComponent>
  )
};
