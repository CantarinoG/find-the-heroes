import "../styles/Modal.css";

function Modal(props) {

    return props.show ? 
        <div className="modal">
        <div className="modal-window">
            <div className="modal-content">
                {props.modalContent}
            </div>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>
    </div> : null

}

export default Modal;