import React, { useState } from "react";


const SubmitButton = ( {onClick} ) => {
    return (
        <button className = "button--submit" onClick = {onClick}>SUBMIT</button>
    )
};

export default SubmitButton;