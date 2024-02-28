import { motion } from "framer-motion";
import { PageOptionsContainer } from "./PageOptionsStyledComponents";
import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";


export default function PageOptions() {
  const [isFullscreen, setIsFullscreen] = useState(
    document.documentElement.offsetWidth === screen.availWidth
    && 
    document.documentElement.offsetHeight === screen.availHeight
  );
  const {language:globalLanguaje, setLanguaje:setGlobalLanguaje} = useContext(GlobalStateContext);
  const [language, setLanguaje] = useState({
    code: globalLanguaje,
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

  useEffect(() => {
    setGlobalLanguaje(language.code);
  }, [language]);

  return (
    <PageOptionsContainer >
      <li>
        <button className="option-btn" onClick={
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
        <button className="option-btn" onClick={
          ()=>{setLanguaje({code:language.code,modalOpen:!language.modalOpen})}
        }>
          <i className="fi fi-br-globe"></i>
        </button>
        {
          language.modalOpen
          ?<motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:.2, ease:"easeOut"}}}
            className="language-chooser"
           >
            <div className="close">
              <button onClick={()=>{setLanguaje({code:language.code,modalOpen:false})}}>
                <i className="fi fi-sr-circle-xmark"></i>
              </button>
            </div>
            <h1 className="title">{language.code === "en" ?"Choose a language" :"Elige un idioma"}</h1>
            <hr className="separator" />
            <button className={`language-option ${globalLanguaje==="en"? "chosen":""}`} onClick={()=>{setLanguaje({code:"en",modalOpen:false})}}>English</button>
            <button className={`language-option ${globalLanguaje==="es"? "chosen":""}`} onClick={()=>{setLanguaje({code:"es",modalOpen:false})}}>Español</button>
          </motion.div>
          :null          
        }
      </li>
    </PageOptionsContainer>
  );
  }
