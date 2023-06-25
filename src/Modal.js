import logoThanks from "./assets/illustration-thank-you.svg";
import ThankYouContainer from "./ThankYouContainer";

const ModalResult = ( {selectedCount}) => {
    return (
        <div className="selection--panel">{`You selected ${selectedCount} out of 5`}</div>
    )
};

const Modal = ( {selectedCount} ) => {
    return (
        <div className="modal">
            <img src={logoThanks} alt="logo" />
            <ModalResult selectedCount = {selectedCount}/>
            <ThankYouContainer />
        </div>
    )
};

export default Modal;