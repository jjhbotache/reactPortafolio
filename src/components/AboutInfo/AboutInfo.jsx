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
import CVimg from "../../assets/images/JUAN JOSE HUERTAS BOTACHE CV.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import containerResizer from "../../helpers/containerResizer";



export default function AboutInfo({onScrolled}) {
  const {language} = useContext(GlobalStateContext);
  const [typed, setTyped] = useState(false);
  const typeWriterContainerRef = useRef(null);
  const dialogRef = useRef(null);
  const modalCvImgRef = useRef(null);

  // useEffect(() => {
  //   // creaete a event listener to resize the modal image
  //   window.addEventListener('resize', ()=>containerResizer(modalCvImgRef.current));
  //   return () => {
  //     window.removeEventListener('resize', ()=>containerResizer(modalCvImgRef.current));
  //   }
  // }, []);

  useEffect(() => {
    // delete everythin inside the container
    typeWriterContainerRef.current.innerHTML = "";

     // first, create a typewriter element and put it on the container
     const typewriter = new Typewriter(typeWriterContainerRef.current, {
       delay: 1,
     });
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

  function watchCV() {
    window.open(CVFile, '_blank');
  }

  function watchInHereCV(e) {
    dialogRef.current.showModal();
    // containerResizer(modalCvImgRef.current);
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
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 }}}
            >
              <hr className="separator" />
              <h3 className="continue-exploring-text">{texts.aboutInfo.continueExploring[language]}</h3>
              <hr className="separator" />
            </motion.div>

          <motion.div
          onClick={watchInHereCV}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x:0, transition: { duration: .7 }}}
          className="cvImg-container"
          >
            <h2>Curriculum Vitae</h2>
            <img src={CVimg} alt="CV" />
          </motion.div>
          <dialog className="CV-modal" ref={dialogRef} onClick={e => dialogRef.current.close()}>
            <img ref={modalCvImgRef} src={CVimg} alt="CV" />
            <small>{texts.aboutInfo.closeModal[language]}</small>
          </dialog>

          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x:0, transition: { duration: .7 }}}
          className="btn-container"
          >
             <CoolBtn text={texts.aboutInfo.downloadCV[language]} onClick={downloadCV}/>
             <CoolBtn type="secondary" text={texts.aboutInfo.watchCV[language]} onClick={watchCV}/>
          </motion.div>
          </>
          )
        }
      </div>
    </AboutInfoContainer>
  )
};
