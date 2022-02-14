import React from "react";
import './../styles/modules/_popup.scss';

const NewNoteForm = ({ visible, chandlePopupAction, chandleInputChange, checkName, checkDescription }) => {

    return (
        <div className={visible ? 'popup popup--visible' : 'popup'} onClick={chandlePopupAction}>
            <div className="popup__inner">
                <form action="" className="popup__form">
                     <label htmlFor="title">
                        Tytuł notatki:
                    </label>
                    <input type="text" id="title" name="title" className={checkName ? 'popup__error' : ''} onChange={chandleInputChange}/>
                    <label htmlFor="description">
                        Opis notatki:
                    </label>
                    <textarea name="description" id="description" cols="10" rows="4" className={checkDescription ? 'popup__error' : ''} onChange={chandleInputChange}></textarea>
                    <div className="popup__btn-group">
                        <input type="submit" value="Dodaj notatkę" name='add'/>
                        <input type="reset" value="Kasuj pola" name='reset'/>
                        <button name="close" className="popup__close">zamknij okno</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewNoteForm;