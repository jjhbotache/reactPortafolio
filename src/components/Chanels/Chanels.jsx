import { useRef } from "react";
import { ChanelsStyledComponent } from "../ChanelsStyledComponents";

export default function Chanels({chanels,onSelectChanel}) {
  const detailsRef = useRef(null);
  const detailsInfoRef = useRef(null);


  function onDetailsClick(e){
    const info = detailsInfoRef.current;
    if (info.classList.contains('open')) {
      info.classList.remove('open');
    } else {
      info.classList.add('open');
    }
  }

  return (
    <ChanelsStyledComponent>
      <details className="chanels-details" onClick={onDetailsClick} ref={detailsRef}>
        <summary className="chanels-details--title"> hola</summary>
        <section className="chanels-details--info" ref={detailsInfoRef} >
          <ol>
            {chanels.map((chanel, index) =>( 
            <li key={index} className="chanels-select--options" onClick={e=>{onSelectChanel(chanel.value)}} value={chanel.value}>{chanel.name}</li>
            ))}
          </ol>
        </section>
      </details>
    </ChanelsStyledComponent>
  );
};
