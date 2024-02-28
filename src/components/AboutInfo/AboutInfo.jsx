import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect/dist/core";
import { useContext, useRef } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
       .pauseFor(2000)
       .typeString(texts.aboutInfo.text2[language])
       .pasteString('<br/><br/>')
       .pauseFor(2000)
       .typeString(texts.aboutInfo.text3[language])
       .pasteString('<br/><br/>')
       .callFunction(()=>{setTyped(true)})
       .start();

  }
  , [language]);



  return(
    <AboutInfoContainer onScroll={onScrolled}>
      <div className="content">
        <h1>{texts.aboutInfo.title[language] }</h1>
        {/* <button onClick={doSomething}>hi</button> */}
        <div ref={typeWriterContainerRef} className="typer-container" />
        
        {
          typed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 }}}
          >
            <hr className="separator" />
            <h2 className="continue-exploring-text">{texts.aboutInfo.continueExploring[language]}</h2>
          </motion.div>
          )
        }
      </div>
    </AboutInfoContainer>
  )
};
