import { Link } from "react-router-dom";
import { AboutInfoContainer } from "./AboutInfoStyledComponents";

export default function AboutInfo({onScrolled}) {
  return(
    <AboutInfoContainer onScroll={onScrolled}>
      <h1>About me</h1>
      <p>
        Soy un desarrollador apasionado por la tecnología y el desarrollo de software. Me encanta aprender el como la tecnología facilita la vida.

        Desde hace 4 años me he dedicado a aprender y mejorar mis habilidades en el desarrollo de software, y he trabajado en varios proyectos personales y profesionales los cuales puede revisar <Link>aqui</Link>.

        El desarrollo de software, no es solo escribir código, si no tambien entender el problema y buscar la mejor solución para el mismo, aplicando buenas practicas y patrones de diseño. 
      </p>
    </AboutInfoContainer>
  )
};
