import { PageOptionsContainer } from "./PageOptionsStyledComponents";
import { useEffect, useState } from "react";

export default function PageOptions() {
  const [isFullscreen, setIsFullscreen] = useState(
    document.documentElement.offsetWidth === screen.availWidth
    && 
    document.documentElement.offsetHeight === screen.availHeight
  );
  const [languaje, setLanguaje] = useState({
    code: "en",
    modalOpen: false,
  });


  useEffect(() => {

    function checkAndUpdateFullScreen() {
      const sizesAreEqual =
        document.documentElement.offsetWidth === screen.availWidth
        && 
        document.documentElement.offsetHeight === screen.availHeight

      const isFullScreenCheck = 
        document.fullscreenElement !== null
        ||
        document.webkitIsFullScreen
        ||
        sizesAreEqual;
      setIsFullscreen(isFullScreenCheck);
    }

    let resizeObserver = new ResizeObserver(entries =>{
      for (let entry of entries) {
        if(entry.target === document.documentElement){
          checkAndUpdateFullScreen();
        }
      }
    });
      
    window.addEventListener("fullscreenchange",e=>{ checkAndUpdateFullScreen() });
    window.addEventListener("keyup",e=>{ checkAndUpdateFullScreen() });
    resizeObserver.observe(document.documentElement);
    return () => {
      window.removeEventListener("fullscreenchange",e=>{ checkAndUpdateFullScreen() });
      window.removeEventListener("keyup",e=>{ checkAndUpdateFullScreen() });
      resizeObserver.unobserve(document.documentElement);
    };

  }, []);

  return (
    <PageOptionsContainer >
      <li>
        <button onClick={
          () => {
            document.fullscreenElement !== null
              ?document.exitFullscreen()
              :document.documentElement.requestFullscreen();
          }
        
        }>
          {
            isFullscreen 
              ?<i className="fi fi-br-compress"></i>
              :<i className="fi fi-br-expand"></i>
          }
        </button>
      </li>
      <li>
        <button>
          <i className="fi fi-br-globe"></i>
        </button>
        {
          languaje.modalOpen
          ?<div className="languaje-chooser" onClick={
            (e)=>{setLanguaje({code:languaje.code,modalOpen:false})}
          }>
            <h1>{languaje.code === "en" ?"Choose a languaje" :"Elige un idioma"}</h1>
            <button onClick={()=>{setLanguaje({code:"en",modalOpen:false})}}>English</button>
            <button onClick={()=>{setLanguaje({code:"es",modalOpen:false})}}>Español</button>
          </div>
          :null          
        }
      </li>
    </PageOptionsContainer>
  );
  }
