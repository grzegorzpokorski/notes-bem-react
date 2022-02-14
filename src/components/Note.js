import React from 'react';

const Note = ({ title, description, done }) => {
    return (
        <li className='list__item'>
            <h3>{title}</h3>
            <p>{description}</p>
            <nav className="list__item__nav">
                <button>
                    oznacz jako {done ? 'zrobione' : 'niezrobione'}
                </button>
                <button>
                    usuń
                </button>
            </nav>
        </li>
    );
}

export default Note;