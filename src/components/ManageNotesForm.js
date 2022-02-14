import React from "react";
import './../styles/modules/_popup.scss';

const ManageNotesForm = ({ visible, chandlePopupAction }) => {

    return (
        <div className={visible ? 'popup popup--visible' : 'popup'} onClick={chandlePopupAction}>
            <div className="popup__inner">
                <h3 className="popup__title">
                    Zarządzaj notatkami
                </h3>
                <form action="" className="popup__form">
                    <button name='delete_all'>usuń wszystkie notatki</button>
                </form>
            </div>
        </div>
    );
}

export default ManageNotesForm;