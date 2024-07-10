import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect/dist/core";
import { useContext, useRef } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../ProjectsInfo/CoolBtn/CoolBtn";
import CVFile from "/files/JUAN JOSE HUERTAS BOTACHE.pdf";
import CVimg from "/images/JUAN JOSE HUERTAS BOTACHE.png";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setTitleInfoToDisplay } from "../../redux/slices/titleInfoToDisplaySlice";
import technologies from "../../constants/technologies";
import TechnologyComponent from "./TechnologyComponent";



export default function AboutInfo({onScrolled}) {
  const {language} = useContext(GlobalStateContext);
  const [typed, setTyped] = useState(false);
  const typeWriterContainerRef = useRef(null);
  const dialogRef = useRef(null);
  const modalCvImgRef = useRef(null);
  const dispatch = useDispatch();


  useEffect(() => {
    // delete everythin inside the container
    typeWriterContainerRef.current.innerHTML = "";

     // first, create a typewriter element and put it on the container
     const typewriter = new Typewriter(typeWriterContainerRef.current, {
       delay: 5,
     });
     // then, add the text to the typewriter
     typewriter
       .pauseFor(250)
       .typeString(texts.aboutInfo.text1[language])
       .pasteString('<br/><br/>')
       .pauseFor(100)
       .typeString(texts.aboutInfo.text2[language])
       .callFunction(()=>{
          setTyped(true)
          // to all the Typewriter__cursor elements, add a class to hide them
          try {
            typeWriterContainerRef.current.querySelectorAll('.Typewriter__cursor').forEach(cursor => cursor.classList.add('hide'))
          } catch (error) {
            console.log("didn't find any cursor");
          }
        })
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

  function onContinueExploring(e) {
    dispatch(setTitleInfoToDisplay('projects'));
  }

  return(
    <AboutInfoContainer onScroll={onScrolled} onClick={e=>setTyped(true)}>
      <div className="content">
        <h1>{texts.aboutInfo.title[language] }</h1>
        {/* if typed, show all the text at once */}
        {
          typed 
            ?<p className="about-text"> {texts.aboutInfo.text1[language]}<br/><br/>{texts.aboutInfo.text2[language]}</p> 
            : <div onClick={e=>setTyped(true)} ref={typeWriterContainerRef} className="typer-container" />
        }
        {/* technologies */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 }}}
        >
          <hr className="separator" />
          <section className="technologies-section">
            <h2 className="technologies-section__title">{texts.aboutInfo.technologies[language]}</h2>
            {
              Object.keys(technologies).map(category=>(
                <div key={category} className="technologies-section__category">
                  <h3 className="technologies-section__category-title">{category}</h3>
                  <ul className="technologies-section__technologies-container">
                    {technologies[category].sort((a,b)=>b.importance - a.importance) .map(tech=>(<TechnologyComponent tech={tech} key={tech.name}/>))}
                  </ul>
                </div>
              ))
            }
          </section>
        </motion.div>
        {/* click to projects */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 }}}
        >
          <hr className="separator" />
          <h3 onClick={onContinueExploring} className="continue-exploring-text">{texts.aboutInfo.continueExploring[language]}</h3>
          <hr className="separator" />
        </motion.div>
        {/* cv */}
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
        {/* cv btns */}
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x:0, transition: { duration: .7 }}}
        className="btn-container"
        >
            <CoolBtn text={texts.aboutInfo.downloadCV[language]} onClick={downloadCV}/>
            <CoolBtn type="secondary" text={texts.aboutInfo.watchCV[language]} onClick={watchCV}/>
        </motion.div>
      </div>
    </AboutInfoContainer>
  )
};
