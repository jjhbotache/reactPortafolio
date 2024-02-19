import { Link } from "react-router-dom";
import { AboutInfoContainer } from "./AboutInfoStyledComponents";
import Typewriter from "typewriter-effect";
import svgPc from "../../assets/svgs/programming-monitor-svgrepo-com.svg";

export default function AboutInfo({onScrolled}) {
  const text1 = "Soy un desarrollador apasionado por la tecnología y el desarrollo de software. Me encanta aprender el como la tecnología facilita la vida.";
  const text2 = "Desde hace 4 años me he dedicado a aprender y mejorar mis habilidades en el desarrollo de software, y he trabajado en varios proyectos personales los cuales puede revisar en mi perfil de GitHub.";
  const text3 = "El desarrollo de software, no es solo escribir código, si no tambien entender el problema y buscar la mejor solución para el mismo, aplicando buenas practicas y patrones de diseño.";

  function textTyped() {
    console.log('String typed out!');
  }

  return(
    <AboutInfoContainer onScroll={onScrolled}>
      <div className="content">
        <h1>About me</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(text1)
              .pasteString('<br/><br/>')
              .pauseFor(2000)
              .typeString(text2)
              .pasteString('<br/><br/>')
              .pauseFor(2000)
              .typeString(text3)
              .pasteString('<br/><br/>')
              .callFunction(textTyped)
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
