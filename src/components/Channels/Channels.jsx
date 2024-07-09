import { useContext, useRef, useState } from "react";
import { ChannelsStyledComponent } from "./ChannelsStyledComponents";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { useEffect } from "react";
import { toggleMenu } from "../../redux/slices/menuOpenSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Channels({channels,onSelectChannel}) {
  const {language} = useContext(GlobalStateContext);
  const [channelText, setChannelText] = useState(texts.channels.chooseChannel[language]);
  const [currentChannel, setcurrentChannel] = useState(undefined);
  const menuOpen = useSelector(state => state.menuOpen);

  const dispatcher = useDispatch();

  useEffect(() => {
    setChannelText(
      currentChannel ? currentChannel.name[language] : texts.channels.chooseChannel[language]
    );
  }, [language, currentChannel]);

  function channelClicked(channel){
    onSelectChannel(channel);
    setcurrentChannel(channel);
  }

  function cliked(e) {
    e.preventDefault();
    dispatcher(toggleMenu());
  }



  return (
    <ChannelsStyledComponent>
      <details className={`channels-details ${menuOpen ? "open":""}`} open={menuOpen} onClick={cliked} >
        <summary className="channels-details--title"> <small>{channelText}</small> </summary>
        <section className={`channels-details--info ${menuOpen ? "open":""}`} >
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
