import { useEffect, useRef } from "react";
import tvNoiseGif from "../../assets/gifs/tv_noise.gif"
import { InfoDisplayerStyledComponent } from "./InfoDisplayerStyledComponents";
import { useState } from "react";
import { mdScreenWidth } from "../../constants/styleConstants";
import AboutInfo from "../AboutInfo/AboutInfo";
import ContactInfo from "../ContactInfo/ContactInfo";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";

export default function InfoDisplayer({titleInfoToDisplay}) {
  const tvRef = useRef(null);
  const [infoToDisplay, setInfoToDisplay] = useState(null);
  const [maximazed,setMaximazed   ] = useState(false);
  const handleTvMaximazedLastTime = useRef();

  const alreadyNotifiedAboutMinimize = useRef(false);

  function setTvHeightAndWidth() {
    const tv = tvRef.current;

    tv.style.height = "100%";
    tv.style.width = "100%";

    const tvSizes = [tv.clientWidth, tv.clientHeight];
    // if the height is bigger than the width
    // resize the height to the width
    if (tvSizes[0] < tvSizes[1]) {
      tv.style.height = tvSizes[0] + "px";
      tv.style.width = tvSizes[0] + "px";
    }
  }

  function handleTvMaximazed(onlyOpen = false) {
    // get the time when calling this function
    // to avoid multiple calls in a short period of time
    const time = new Date().getTime();
    if (handleTvMaximazedLastTime.current && time - handleTvMaximazedLastTime.current < 500) return
    handleTvMaximazedLastTime.current = time;

    
    const mdScreenWidthInPx = parseInt(mdScreenWidth.slice(0, -2));
    if (window.innerWidth > mdScreenWidthInPx || !titleInfoToDisplay ) {
      console.log("big screen or no titleInfoToDisplay");
    }else{
      setMaximazed(
        onlyOpen
          ? true
          : !maximazed
      )
    }
  }

  useEffect(() => {
    setTvHeightAndWidth();
    
    
    window.addEventListener('resize', setTvHeightAndWidth);
    return () =>{
        window.removeEventListener('resize', setTvHeightAndWidth);
    }
  }, []);

  useEffect(() => {
    console.log('titleInfoToDisplay', titleInfoToDisplay);
    const tvNoiseGif = tvRef.current.querySelector('img');
    
    // deal with  the blinking effect
    if (titleInfoToDisplay !== null) {
      tvNoiseGif.classList.remove('tv-noise-gif__blink-out');
      setTimeout(() => {
        tvNoiseGif.classList.add('tv-noise-gif__blink-out');
      }, 100);
    }


    // setting the info to display
    switch (titleInfoToDisplay) {
      case "about":
        setInfoToDisplay( <AboutInfo onScrolled={e=>handleTvMaximazed(true)} /> );
        break;

      case "projects":
        setInfoToDisplay( <ProjectsInfo/>);
        break;

      case "contact":
        setInfoToDisplay(
          <ContactInfo></ContactInfo>
        );
        break;

      default:
        setInfoToDisplay(null);
        break;
                
    }

    

  }, [titleInfoToDisplay]);

  useEffect(() => {

    

    const tv = tvRef.current;
    if(maximazed){
      tv.classList.add('tv__maximazed')
      console.log('toast created!');
      if (!alreadyNotifiedAboutMinimize.current) {
        alreadyNotifiedAboutMinimize.current = true;
        toast.info('Double click to minimize!', {
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
        <div className="tv" ref={tvRef} onDoubleClick={e=>handleTvMaximazed()} >
          <img src={tvNoiseGif} alt="tv_noise_gif" className="tv-noise-gif" />
          {titleInfoToDisplay !== null
          ? infoToDisplay
          : <span className="no-chanel-alert">Choose any chanel!</span>
          }
        </div>
      </div>
    </InfoDisplayerStyledComponent>
  )
};
