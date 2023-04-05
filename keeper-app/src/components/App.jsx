import React, { useState, useId } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    const [newNote, setNewNote] = useState({
        title: '',
        content: '',
    });

    function addNote(event) {
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });
        setNewNote({
            title: '',
            content: '',
        });
        event.preventDefault();
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => (index !== id));
        })
    }

    function writeNote(event) {
        const { name, value } = event.target;
        setNewNote((prevValue) => {
            if (name === 'content') {
                return { ...prevValue, content: value };
            } else if (name === 'title') {
                return { ...prevValue, title: value };
            }
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} writeNote={writeNote} newNote={newNote} />
            {notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;
