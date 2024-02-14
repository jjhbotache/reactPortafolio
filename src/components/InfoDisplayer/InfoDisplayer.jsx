import { useEffect, useRef } from "react";
import tvNoiseGif from "../../assets/gifs/tv_noise.gif"
import { InfoDisplayerStyledComponent } from "./InfoDisplayerStyledComponents";
import { useState } from "react";

export default function InfoDisplayer({titleInfoToDisplay}) {
  const tvRef = useRef(null);
  const [infoToDisplay, setInfoToDisplay] = useState();

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

  useEffect(() => {
    setTvHeightAndWidth();
    window.addEventListener('resize', setTvHeightAndWidth);
    return () => {
      window.removeEventListener('resize', setTvHeightAndWidth);
    }
  }, []);

  useEffect(() => {
    console.log('titleInfoToDisplay', titleInfoToDisplay);
    const tv = tvRef.current;
    const tvNoiseGif = tv.querySelector('img');
    
    if (titleInfoToDisplay !== null) {
      tvNoiseGif.classList.remove('tv-noise-gif__blink-out');
      setTimeout(() => {
        tvNoiseGif.classList.add('tv-noise-gif__blink-out');
      }, 100);
    }



    switch (titleInfoToDisplay) {
      case "about":
        setInfoToDisplay(
          <div className="tv-info">
            <h1>About</h1>
            <p>
              I'm a Frontend Developer with a passion for creating beautiful and functional websites.
            </p>
          </div>
        );
        break;

      case "projects":
        setInfoToDisplay(
          <div className="tv-info">
            <h1>Projects</h1>
            <p>
              I have worked on several projects, some of them are available on my GitHub profile.
            </p>
          </div>
        );
        break;

      case "contact":
        setInfoToDisplay(
          <div className="tv-info">
            <h1>Contact</h1>
            <p>
              You can contact me through my email: <a href="mailto: jjhuertasbotache@gmail.com"/>
            </p>
          </div>
        );
        break;
                
    }
  }, [titleInfoToDisplay]);
  return(
    <InfoDisplayerStyledComponent>
      <div className="tv-container">
        <div className="tv" ref={tvRef}>
          <img src={tvNoiseGif} alt="tv_noise_gif" className="tv-noise-gif" />
          {titleInfoToDisplay !== null && infoToDisplay}
        </div>
      </div>
    </InfoDisplayerStyledComponent>
  )
};
