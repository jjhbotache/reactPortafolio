import { useContext, useRef, useState } from "react";
import { ChanelsStyledComponent } from "./ChanelsStyledComponents";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";

export default function Chanels({chanels,onSelectChanel}) {
  const detailsRef = useRef(null);
  const detailsInfoRef = useRef(null);
  const {languaje} = useContext(GlobalStateContext);
  const [chanelText, setChanelText] = useState(texts.chanels.chooseChannel[languaje]);
  const [currentChanel, setcurrentChanel] = useState(undefined);


  function onDetailsClick(e){
    const info = detailsInfoRef.current;
    if (info.classList.contains('open')) {
      info.classList.remove('open');
      detailsRef.current.removeAttribute('open');
    } else {
      info.classList.add('open');
    }
  }

  function chanelClicked(chanel){
    onSelectChanel(chanel);
    setcurrentChanel(chanel);
  }

  useEffect(() => {
    console.log("currentChanel",currentChanel);
    setChanelText(
      currentChanel ? currentChanel.name[languaje] : texts.chanels.chooseChannel[languaje]
    );
  }, [languaje, currentChanel]);
  return (
    <ChanelsStyledComponent>
      <details className="chanels-details" onClick={onDetailsClick} ref={detailsRef}>
        <summary className="chanels-details--title"> <small>{chanelText}</small> </summary>
        <section className="chanels-details--info" ref={detailsInfoRef} >
          <ol>
            {chanels.map((chanel, index) =>( 
            <li key={index} className="chanels-select--options" onClick={e=>{chanelClicked(chanel)}} value={chanel.value}>{chanel.name[languaje]}</li>
            ))}
          </ol>
        </section>
      </details>
    </ChanelsStyledComponent>
  );
};
