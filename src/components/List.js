import React from "react";
import Note from './Note';
import './../styles/modules/_list.scss';

const List = ({ notes, chandleList }) => {
    return (
        <ul className="list" onClick={chandleList}>
            {notes ? notes.map(note => <Note key={note.id} {...note}/>) : ''}
        </ul>
    );
}

export default List;