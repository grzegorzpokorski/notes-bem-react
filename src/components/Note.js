import React from 'react';

const Note = ({ id, title, description, done }) => {

    let delete_id = 'delete_' + id,
        done_id = 'done_' + id;

    return (
        <li className={done ? 'list__item list__item--done' : 'list__item'}>
            <h3>{title}</h3>
            <p>{description}</p>
            <nav className="list__item__nav">
                <button name={done_id}>
                    oznacz jako {done ? 'zrobione' : 'niezrobione'}
                </button>
                <button name={delete_id}>
                    usuń
                </button>
            </nav>
        </li>
    );
}

export default Note;