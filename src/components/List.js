import React from "react";
import Note from './Note';

const List = ({ notes }) => {
    return (
        <ul>
            {notes ? notes.map(note => <Note />) : ''}
        </ul>
    );
}

export default List;