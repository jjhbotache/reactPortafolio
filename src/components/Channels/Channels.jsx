import { useContext, useRef, useState } from "react";
import { ChannelsStyledComponent } from "./ChannelsStyledComponents";
import { GlobalStateContext } from "../../contexts/LanguajeContextProvider";
import texts from "../../constants/texts";
import { toggleMenu } from "../../redux/slices/menuOpenSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Channels({channels,onSelectChannel}) {
  const {language} = useContext(GlobalStateContext);
  const [currentChannel, setcurrentChannel] = useState(undefined);
  const menuOpen = useSelector(state => state.menuOpen);
  const titleInfoToDisplay = useSelector(state => state.titleInfoToDisplay);

  const dispatcher = useDispatch();

  

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
        <summary className="channels-details--title"> <small>{
          currentChannel
            ?texts.channels.channels[titleInfoToDisplay][language]
            :texts.channels.chooseChannel[language]
        }</small> </summary>
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
