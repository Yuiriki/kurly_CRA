import React from 'react';

const ModalComponent = ({modal,modalCloseFn}) => {

    const onClickClose = () =>{
        modalCloseFn();
    }

    return (

        modal.showModal &&(
        <div id="modal">
            <div className="container">
                <ul>
                    <li><h2>알림메세지</h2><button onClick={onClickClose} className="close-btn modal-close"><img src="./images/icon-close-button.webp" alt=""/></button></li>
                    <li>
                        <p className="modal-message">{modal.title}</p>
                    </li>                    
                </ul>
                <div className="button-box">
                    <button onClick={onClickClose} className="ok-btn modal-close">확인</button>
                </div>
            </div>
        </div>
        )
    );
};

export default ModalComponent;