import { useContext, useRef, useState } from "react";
import { ChannelsStyledComponent } from "./ChannelsStyledComponents";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";

export default function Channels({channels,onSelectChannel}) {
  const detailsRef = useRef(null);
  const detailsInfoRef = useRef(null);
  const {language} = useContext(GlobalStateContext);
  const [channelText, setChannelText] = useState(texts.channels.chooseChannel[language]);
  const [currentChannel, setcurrentChannel] = useState(undefined);


  function onDetailsClick(e){
    const info = detailsInfoRef.current;
    if (info.classList.contains('open')) {
      info.classList.remove('open');
      detailsRef.current.removeAttribute('open');
    } else {
      info.classList.add('open');
    }
  }

  function channelClicked(channel){
    onSelectChannel(channel);
    setcurrentChannel(channel);
  }

  useEffect(() => {
    setChannelText(
      currentChannel ? currentChannel.name[language] : texts.channels.chooseChannel[language]
    );
  }, [language, currentChannel]);
  return (
    <ChannelsStyledComponent>
      <details className="channels-details" onClick={onDetailsClick} ref={detailsRef}>
        <summary className="channels-details--title"> <small>{channelText}</small> </summary>
        <section className="channels-details--info" ref={detailsInfoRef} >
          <ol>
            {channels.map((channel, index) =>( 
            <li key={index} className="channels-select--options" onClick={e=>{channelClicked(channel)}} value={channel.value}>{channel.name[language]}</li>
            ))}
          </ol>
        </section>
      </details>
    </ChannelsStyledComponent>
  );
};
