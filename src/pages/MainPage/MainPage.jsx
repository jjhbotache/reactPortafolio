import { useContext, useEffect, useRef, useState } from "react"
import { MainInfo, MainPageStyledComponent } from "./MainPageStyledComponents";
import purpleTriangle from "../../assets/svgs/purple_triangle.svg"
import Channels from "../../components/Channels/Channels";
import InfoDisplayer from "../../components/InfoDisplayer/InfoDisplayer";
import PageOptions from "../../components/PageOptions/PageOptions";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";

export default function MainPage() {
  const bottomLeftFrameRef = useRef(null);
  const topRightFrameRef = useRef(null);
  const MainRef = useRef(null);
  const mainComponentRef = useRef(null);
  const [titleInfoToDisplay, setTitleInfoToDisplay] = useState(null);

  const { language } = useContext( GlobalStateContext )
  
  

  const channels = [
    {
      name:{
        en: texts.channels.channels.about.en,
        es: texts.channels.channels.about.es
      },
      value: "about"
    },
    {
      name: {
        en: texts.channels.channels.projects.en,
        es: texts.channels.channels.projects.es
      },
      value: "projects"
    },
    {
      name: {
        en: texts.channels.channels.contact.en,
        es: texts.channels.channels.contact.es
      },
      value: "contact"
    },
  ]

  useEffect(() => {
    setTimeout(() => {
    bottomLeftFrameRef.current.classList.add('frame__on-corner');
    topRightFrameRef.current.classList.add('frame__on-corner');
      setTimeout(() => {
        MainRef.current.classList.add('fade-in');
      }, 1000);
    }, 100);
    function onFullScreenChange(){
      if(document.fullscreenElement){
        // reset the with and height of the main component
        mainComponentRef.current.style.width = "100vw";
        mainComponentRef.current.style.height = "100vh";
      }
      else{
        // reset the with and height of the main component
        mainComponentRef.current.style.width = window.innerWidth;
        mainComponentRef.current.style.height = window.innerHeight;
      }
    }
    onFullScreenChange();
    // detect if the user enter or exits the fullscren mode
    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
    }

  }, []);

  function onChannelSelect(channel){
    setTitleInfoToDisplay(channel.value);
  }

  function onChangeInfoToDisplay(titleInfoToDisplay){
    // look for the channels that has the same value as titleInfoToDisplay
    const channel = channels.find(channel => channel.value === titleInfoToDisplay);
    setTitleInfoToDisplay(channel.value);
  }

  function onTvClicked(){
    console.log('tv clicked');
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

          <PageOptions/>
          <div className="title-texts">
            <h1 className="name name__first">Juan Jose</h1>
            <h2 className="name name__last">Huertas Botache</h2>
            <h3 className="rol">{texts.mainPageTexts.rol[language]}</h3>
          </div>

          
          <hr className="title-texts-and-channels-separator" />

          <Channels channels={channels} onSelectChannel={onChannelSelect} />

          <InfoDisplayer titleInfoToDisplay={titleInfoToDisplay} onChangeInfoToDisplay={onChangeInfoToDisplay} onClick={onTvClicked}/>
        </div>
      </MainInfo>
      
    </MainPageStyledComponent>
  )
};
