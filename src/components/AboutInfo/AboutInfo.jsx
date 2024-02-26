import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect";
import { useContext, useRef } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";

export default function AboutInfo({onScrolled}) {
  const {languaje} = useContext(GlobalStateContext);



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
              .start();
          }
          }
          options={{
            delay: 1,
          }}
        />
      </div>
    </AboutInfoContainer>
  )
};
