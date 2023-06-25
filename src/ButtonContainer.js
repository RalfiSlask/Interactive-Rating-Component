
import React, { useState } from "react";

const ButtonContainer = ( { onButtonClick }) => {
  const [buttonActive, setActiveButton] = useState("");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    onButtonClick(buttonId);
  };

  // array of the buttons

  const buttons = [
    {id: 1, text: "1"}, 
    {id: 2, text: "2"}, 
    {id: 3, text: "3"}, 
    {id: 4, text: "4"}, 
    {id: 5, text: "5"}, 
  ];

  return (
    <div className = "button--panel">
      {buttons.map(button => (
        <button key = {button.id} onClick = {() => {handleButtonClick(button.id)}} className = {`circle ${buttonActive === button.id ? "active" : ""}`}>{button.text}</button>
      ))}
    </div>
  )
};

export default ButtonContainer;



