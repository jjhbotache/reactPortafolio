import { useContext, useRef } from "react";
import { ChanelsStyledComponent } from "./ChanelsStyledComponents";
import { useState } from "react";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";

export default function Chanels({chanels,onSelectChanel}) {
  const detailsRef = useRef(null);
  const detailsInfoRef = useRef(null);
  const {languaje} = useContext(GlobalStateContext);


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
  }

  return (
    <ChanelsStyledComponent>
      <details className="chanels-details" onClick={onDetailsClick} ref={detailsRef}>
        <summary className="chanels-details--title">
          <small>{texts.chanels.chooseChannel[languaje]}</small>
        </summary>
        <section className="chanels-details--info" ref={detailsInfoRef} >
          <ol>
            {chanels.map((chanel, index) =>( 
            <li key={index} className="chanels-select--options" onClick={e=>{chanelClicked(chanel)}} value={chanel.value}>{chanel.name}</li>
            ))}
          </ol>
        </section>
      </details>
    </ChanelsStyledComponent>
  );
};
