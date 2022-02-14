import React, { useState, useEfect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import List from './components/List';
import NewNote from './components/NewNote';

import './styles/modules/_footer.scss';

function App() {

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'Lorem ipsim dolor',
            description: 'We added more styles in Font Awesome 5 and are using prefixes to call specific.',
            done: 0,
        }
    ]);
    const [newNoteVisible, setNewNoteVisible] = useState(0);
    const [newNote, setNewNote] = useState({
        id: null,
        title: '',
        description: '',
        done: 0,
    });
    const [checkName, setCheckName] = useState(0);
    const [checkDescription, setCheckDescription] = useState(0);

    const chandleNavbarOptions = (e) => {
        let target = e.target.name
        if(target === 'new'){
            setNewNoteVisible(1)
        }
    }

    const chandleInputChange = (e) => {
        e.preventDefault();

        let newItem = {...newNote},
            name = e.target.name,
            value = e.target.value;

        newItem[name] = value;
        setNewNote(newItem);
    }

    const chandlePopupAction = (e) => {
        e.preventDefault();
        let target = e.target
     
        if(target.name === 'add'){
            if(newNote['title'].length > 0 || newNote['description'].length > 0){
                newNote['id'] = new Date().getTime()
                setNotes([...notes, newNote])
                setNewNoteVisible(0)
            }else{

            }
        }else if(target.name === 'reset'){
            setNewNote({
                id: null,
                title: '',
                description: '',
                done: 0,
            });
            target.parentElement.parentElement.querySelector('input').value = ''
            target.parentElement.parentElement.querySelector('textarea').value = ''
        }else if(target.name === 'close'){
            setNewNoteVisible(0)
        }

        if(target.classList.contains('popup')){
            setNewNoteVisible(0);
        }

    }

    return (
        <React.Fragment>
            <Navbar chandleNavbarOptions={chandleNavbarOptions}/>
            <main>
                <List notes={notes} />
            </main>
            <Footer content="Created by Grzegorz Pokorski." />
            <NewNote
                visible={newNoteVisible}
                chandlePopupAction={chandlePopupAction}
                chandleInputChange={chandleInputChange}
                checkName={checkName}
                checkDescription={checkDescription}
            />
        </React.Fragment>
    );
}

export default App;
