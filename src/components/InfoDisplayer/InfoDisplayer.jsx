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

export default function InfoDisplayer({titleInfoToDisplay,onChangeInfoToDisplay}) {
  const tvRef = useRef(null);
  const [maximazed,setMaximazed   ] = useState(false);
  const handleTvMaximazedLastTime = useRef(0);

  const alreadyNotifiedAboutMinimize = useRef(false);
  const {language} = useContext(GlobalStateContext);

  function changeInfoToDisplay(title) {
    console.log('changeInfoToDisplay', title);
    onChangeInfoToDisplay(title);
  }

  function handleTvMaximazed(
    only = undefined// "open" or "close"
    ) {
    // get the time when calling this function
    // to avoid multiple calls in a short period of time
    const time = new Date().getTime();
    if (time - handleTvMaximazedLastTime.current < 1000) {
      console.log("too fast");
      return;
    }else{
      handleTvMaximazedLastTime.current = time;
    }

    
    const mdScreenWidthInPx = parseInt(mdScreenWidth.slice(0, -2));
    if (window.innerWidth > mdScreenWidthInPx || !titleInfoToDisplay ) {
      console.log("big screen or no titleInfoToDisplay");
    }else{
      setMaximazed(
        only === undefined
          ? !maximazed
          : only == "open"
              ? true
              : false
      )
    }
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {containerResizer(entry.target)});
    });
    
    function onEscKeyPressed(e) {
      if (e.key === "Escape" && maximazed) handleTvMaximazed("close")
    }
    function onBack(e) {
      handleTvMaximazed("close")
    }

    containerResizer(tvRef.current);

    window.addEventListener('keydown', onEscKeyPressed);
    window.addEventListener('popstate', onBack);
    resizeObserver.observe(tvRef.current);
    return () => {
      window.removeEventListener('keydown', onEscKeyPressed);
      window.removeEventListener('popstate', onBack);
      resizeObserver.disconnect()
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

  useEffect(() => {
    const tv = tvRef.current;
    if(maximazed){
      tv.classList.add('tv__maximazed')
      console.log('toast created!');
      if (!alreadyNotifiedAboutMinimize.current) {
        alreadyNotifiedAboutMinimize.current = true;
        toast.info(texts.infoDisplayer.minimizeToast[language], {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }else{
      tv.classList.remove('tv__maximazed');
    }
  }, [maximazed]);

  return(
    <InfoDisplayerStyledComponent>
      <div className="tv-container">
        <div className="tv" ref={tvRef} onDoubleClick={e=>handleTvMaximazed()}>
          <button className="return-btn" onClick={e=>handleTvMaximazed("close")}><i className="fi fi-sr-undo"></i></button>
          
          <img src={tvNoiseGif} alt="tv_noise_gif" className="tv-noise-gif" />
          {titleInfoToDisplay !== null
          ? 
            titleInfoToDisplay === "about" ? <AboutInfo onScrolled={e=>handleTvMaximazed("open")} /> :


            titleInfoToDisplay === "projects" ? <ProjectsInfo onScrolled={e=>handleTvMaximazed("open")} maximazed={maximazed} /> :


            titleInfoToDisplay === "contact" ? <ContactInfo/> : undefined

          : <span className="no-channel-alert">{texts.infoDisplayer.noInfo[language]}</span>
          }
        </div>
      </div>
    </InfoDisplayerStyledComponent>
  )
};


