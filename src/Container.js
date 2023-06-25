import SubmitButton from "./Submit";
import ButtonContainer from "./ButtonContainer";
import Modal from "./Modal";
import logo from "./assets/icon-star.svg";
import HowDidweDoContainer from "./HowDidWeDoContainer";
import React, { useState } from "react";

const Container = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContainerClosed, setContainerClosed] = useState(false);
    const [clickedButtonId, setClickedButtonId] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
        setContainerClosed(true);
    };

    const gatherButtonId = (buttonId) => {
        setClickedButtonId(buttonId)
    };

    return (
        <>
            {!isContainerClosed &&
            <div className="container">
                <div className = "circle--star">
                    <img src={logo} className = "logo--star" alt="logo"/>
                </div>
                <HowDidweDoContainer />
                <ButtonContainer onButtonClick = {gatherButtonId}/>
                <SubmitButton onClick = {openModal} />
             
            </div>
            }
            {isModalOpen && <Modal selectedCount = {clickedButtonId}/>}
        </>
    )
};

export default Container;