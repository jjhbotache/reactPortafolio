import { useContext, useEffect, useRef } from "react";
import tvNoiseGif from "../../assets/gifs/tv_noise.gif"
import { InfoDisplayerStyledComponent } from "./InfoDisplayerStyledComponents";
import { useState } from "react";
import { mdScreenWidth } from "../../constants/styleConstants";
import AboutInfo from "../AboutInfo/AboutInfo";
import ContactInfo from "../ContactInfo/ContactInfo";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import containerResizer from "../../helpers/containerResizer";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { motion, transform } from "framer-motion";

const variants = {
  minimized: {
    position: "relative",
    transform: "unset",
    zIndex: "unset",
    width: "100%",
    height: "100%",
  }

}

export default function InfoDisplayer({titleInfoToDisplay,onClick}) {
  const tvRef = useRef(null);
  const [maximazed,setMaximazed   ] = useState(false);
  const handleTvMaximazedLastTime = useRef(0);

  const alreadyNotifiedAboutMinimize = useRef(false);
  const {language} = useContext(GlobalStateContext);

  

  function handleTvMaximazed(only = undefined){ // "open" or "close"
    if(titleInfoToDisplay === null) return;
    setMaximazed(prev=>only === "open" ? true : only === "close" ? false : !prev);
  }

  useEffect(() => {
    
    function onEscKeyPressed(e) {
      if (e.key === "Escape" && maximazed) handleTvMaximazed("close")
    }
    function onBack(e) {
      if (maximazed){
        e.preventDefault();
        handleTvMaximazed("close")
      }
    }

    // containerResizer(tvRef.current);

    window.addEventListener('keydown', onEscKeyPressed);
    window.addEventListener('popstate', onBack);
    // window.addEventListener('resize', e=>containerResizer(tvRef.current));
    // resizeObserver.observe(tvRef.current);
    return () => {
      window.removeEventListener('keydown', onEscKeyPressed);
      window.removeEventListener('popstate', onBack);
      // window.removeEventListener('resize', e=>containerResizer(tvRef.current));
      // resizeObserver.disconnect()
    };
  }, []);

  useEffect(() => {
    // console.log('titleInfoToDisplay', titleInfoToDisplay);
    const tvNoiseGif = tvRef.current.querySelector('img');
    
    // deal with  the blinking effect
    if (titleInfoToDisplay !== null) {
      tvNoiseGif.classList.remove('tv-noise-gif__blink-out');
      setTimeout(() => {
        tvNoiseGif.classList.add('tv-noise-gif__blink-out');
      }, 100);
    }
  }, [titleInfoToDisplay]);


  

  return(
    <InfoDisplayerStyledComponent onClick={onClick}>
      <div className={`tv-container`}>
        <img className="tv-container__antenna" src="/antenna.svg" alt="antenna" />
        <motion.div className={`tv ${maximazed && "tv__maximazed"}`} ref={tvRef} > 

          {titleInfoToDisplay !== null &&  <div className="maximizeBtn" onClick={e=>handleTvMaximazed()}>
            <i className={!maximazed ? "fi fi-br-expand" : "fi fi-br-compress"}> </i>
          </div> }
          
          <img src={tvNoiseGif} alt="tv_noise_gif" className="tv-noise-gif" />
          {titleInfoToDisplay !== null
          ? 
            titleInfoToDisplay === "about" ? <AboutInfo onScrolled={e=>console.log("scrolled")} /> :


            titleInfoToDisplay === "projects" ? <ProjectsInfo onScrolled={e=>console.log("scrolled")} maximazed={maximazed} /> :


            titleInfoToDisplay === "contact" ? <ContactInfo/> : undefined

          : <span className="no-channel-alert">{texts.infoDisplayer.noInfo[language]}</span>
          }
        </motion.div>
      </div>
    </InfoDisplayerStyledComponent>
  )
};


