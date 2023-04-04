import React from "react";

function CreateArea(props) {
    return (
        <div>
            <form onSubmit={props.addNote}>
                <input onChange={props.writeNote} name="title" placeholder="Title" value={props.newNote.title} />
                <textarea onChange={props.writeNote} name="content" placeholder="Take a note..." rows="3" value={props.newNote.content} />
                <button action="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
