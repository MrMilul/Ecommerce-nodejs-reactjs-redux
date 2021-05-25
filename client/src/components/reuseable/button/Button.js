import React, {useEffect} from "react";
import "./button.css";
const STYLE = ["btn--primary", "btn--outPrimary"];

const SIZE = ["btn--small", "btn--medium", "btn--large"];

const Button = (props) => {
  const check = ()=>{
    const checkStyle = STYLE.includes(props.style) ? props.style : STYLE[0];
    const checkSize = SIZE.includes(props.size) ? props.size : SIZE[0];
  }
  useEffect(() => {
    check()


  console.log(STYLE.includes(props.style))

  console.log(SIZE.includes(props.size))
 
  }, [])


  return (
    <button
      className={`btn ${STYLE.includes(props.style) ? props.style : STYLE[0]} ${SIZE.includes(props.size) ? props.size : SIZE[0]}`}
      type={props.type}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;
