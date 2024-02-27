import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect";
import { useContext, useRef } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutInfo({onScrolled, onWatchProjects, onContactMe}) {
  const {languaje} = useContext(GlobalStateContext);
  const [typed, setTyped] = useState(false);


  return(
    <AboutInfoContainer onScroll={onScrolled}>
      <div className="content">
        <h1>{texts.aboutInfo.title[languaje] }</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(texts.aboutInfo.text1[languaje])
              .pasteString('<br/><br/>')
              .pauseFor(2000)
              .typeString(texts.aboutInfo.text2[languaje])
              .pasteString('<br/><br/>')
              .pauseFor(2000)
              .typeString(texts.aboutInfo.text3[languaje])
              .pasteString('<br/><br/>')
              .callFunction(()=>{setTyped(true)})
              .start();
          }}
          options={{
            delay: 1,
          }}
        />
        {
          typed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 }}}
          >
            <h2 className="continue-exploring-text">{texts.aboutInfo.continueExploring[languaje]}</h2>
          </motion.div>
          )
        }
      </div>
    </AboutInfoContainer>
  )
};
