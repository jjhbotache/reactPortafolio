import { motion } from "framer-motion";
import { PageOptionsContainer } from "./PageOptionsStyledComponents";
import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { darkColor } from "../../constants/styleConstants";


export default function PageOptions({toogleTheme}) {
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

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme).colors.background == darkColor ? "dark" : "light";


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

  useEffect(() => {
  }, [isFullscreen]);
  

  return (
    <PageOptionsContainer >
      <li>
        <button className="option-btn" onClick={
          ()=>{setLanguaje({code:language.code,modalOpen:!language.modalOpen})}
        }>
          <i className="fi fi-br-globe"></i>
        </button>
        <button className="option-btn" onClick={e=>dispatch(toggleTheme())}>
          {
            theme === "dark"
            ?<i className="fi fi-sr-brightness"></i>
            :<i className="fi fi-br-moon"></i>
          }
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
