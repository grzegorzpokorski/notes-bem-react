import React, { useState, useEfect, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import List from './components/List';
import NewNoteForm from './components/NewNoteForm';
import ManageNotesForm from './components/ManageNotesForm';

import './styles/modules/_footer.scss';

function App() {

    const [notes, setNotes] = useState([]);
    const [newNoteVisible, setNewNoteVisible] = useState(0);
    const [manageNotesVisible, setManageNotesVisible] = useState(0);
    const [newNote, setNewNote] = useState({
        id: null,
        title: '',
        description: '',
        done: 0,
    });
    const [checkName, setCheckName] = useState(0);
    const [checkDescription, setCheckDescription] = useState(0);

    useEffect(() => {
        let notes = localStorage.getItem('notes');
        if(notes){
            setNotes(JSON.parse(notes))
        }
    },[])

    useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	});

    const chandleNavbarOptions = (e) => {
        let target = e.target.name

        if(target === 'new') setNewNoteVisible(1)
        if(target === 'manage') setManageNotesVisible(1)
    }

    const chandleInputChange = (e) => {
        e.preventDefault();

        setCheckName(0)
        setCheckDescription(0)

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
            if(newNote['title'].length > 0 && newNote['description'].length > 0){
                newNote['id'] = new Date().getTime()
                setNotes([...notes, newNote])
                setNewNoteVisible(0)
            }else{
                setCheckName(1)
                setCheckDescription(1)
            }
        }
        
        if(target.name === 'reset'){
            setNewNote({
                id: null,
                title: '',
                description: '',
                done: 0,
            });
            target.parentElement.parentElement.querySelector('input').value = ''
            target.parentElement.parentElement.querySelector('textarea').value = ''
        }
        
        if(target.name === 'close'){
            setNewNoteVisible(0)
        }

        if(target.name === 'delete_all'){
            setNotes([])
        }

        if(target.classList.contains('popup')){
            setNewNoteVisible(0);
            setManageNotesVisible(0);
        }
    }

    const chandleList = (e) => {
        if(e.target.tagName.toLowerCase() != 'button') return;

        let action = e.target.name.split('_')[0],
            note_id = e.target.name.split('_')[1];

        if(action === 'done'){

            let updated_notes = notes.map((item) => {
                if(item.id == note_id){
                    (item.done == 1) ? item.done = 0 : item.done = 1;
                }
                return item
            })

            setNotes(updated_notes)

        }else if(action === 'delete'){

            let remaning_notes = notes.filter(item => {return item.id != note_id})
            setNotes(remaning_notes);

        }
    }

    return (
        <React.Fragment>
            <Navbar chandleNavbarOptions={chandleNavbarOptions}/>
            <main>
                <List notes={notes} chandleList={chandleList} />
            </main>
            <Footer content="Created by Grzegorz Pokorski." />
            <NewNoteForm
                visible={newNoteVisible}
                chandlePopupAction={chandlePopupAction}
                chandleInputChange={chandleInputChange}
                checkName={checkName}
                checkDescription={checkDescription}
            />
            <ManageNotesForm
                visible={manageNotesVisible}
                chandlePopupAction={chandlePopupAction}
            />
        </React.Fragment>
    );
}

export default App;
