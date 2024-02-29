import { CoolBtnContainer } from "./CoolBtnStyledComponents";

export default function CoolBtn({type="primary",text,onClick}) {
  return(
    <CoolBtnContainer typeBtn={type} onClick={onClick}>
      <span className="text">{text}</span>
    </CoolBtnContainer>
  )
};
