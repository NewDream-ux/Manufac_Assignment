import React from "react";
import './Button.css'

const Button = (props) => {
    const { type, value, clickHandle, buttonRef } = props;
    return (
        <button className="buttonStyle" type={type} onClick={() => clickHandle(value)} ref={buttonRef && buttonRef}>{value}</button>
    )
}

export default Button;