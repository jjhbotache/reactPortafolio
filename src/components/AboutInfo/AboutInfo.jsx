import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect/dist/core";
import { useContext, useRef } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../ProjectsInfo/CoolBtn/CoolBtn";
import CVFile from "../../assets/files/JUAN JOSE HUERTAS BOTACHE CV.pdf";



export default function AboutInfo({onScrolled}) {
  const {language} = useContext(GlobalStateContext);
  const [typed, setTyped] = useState(false);
  const typeWriterContainerRef = useRef(null);

  // function doSomething(e) {
  //   console.log(typeWriterContainerRef.current);
  //   typeWriterContainerRef.current.onInit = (typewriter) => {
  //     typewriter
  //       .deleteAll()
  //       .pauseFor(1000)
  //       .typeString("Hello")
  //       .pauseFor(2000)
  //       .typeString("World")
  //       .start();
  //   }
  // }

  useEffect(() => {
    // delete everythin inside the container
    typeWriterContainerRef.current.innerHTML = "";

     // first, create a typewriter element and put it on the container
     const typewriter = new Typewriter(typeWriterContainerRef.current, {
       delay: 1,
     });
     console.log('typewriter', typewriter);
     // then, add the text to the typewriter
     typewriter
       .pauseFor(1000)
       .typeString(texts.aboutInfo.text1[language])
       .pasteString('<br/><br/>')
       .pauseFor(1000)
       .typeString(texts.aboutInfo.text2[language])
       .pasteString('<br/><br/>')
       .pauseFor(1000)
       .typeString(texts.aboutInfo.text3[language])
       .pasteString('<br/><br/>')
       .callFunction(()=>{setTyped(true)})
       .start();

  }
  , [language]);


  function downloadCV() {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'Juan Jose Huertas Botache CV.pdf';
    link.click();
  }

  return(
    <AboutInfoContainer onScroll={onScrolled} onClick={e=>setTyped(true)}>
      <div className="content">
        <h1>{texts.aboutInfo.title[language] }</h1>
        {/* <button onClick={doSomething}>hi</button> */}
        <div ref={typeWriterContainerRef} className="typer-container" />
        
        {
          typed && (
            <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 }}}
            >
              <hr className="separator" />
              <h2 className="continue-exploring-text">{texts.aboutInfo.continueExploring[language]}</h2>
            </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y:0, transition: { duration: 1 }}}
          className="btn-container"
          >
             <CoolBtn text={texts.aboutInfo.downloadCV[language]} onClick={downloadCV}/>
             {/* <CoolBtn $type="secondary" text={texts.aboutInfo.watchCV[language]}/> */}
          </motion.div>
          </>
          )
        }
      </div>
    </AboutInfoContainer>
  )
};
