import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [expand, setExpand] = useState(false);

    const [rows, setRows] = useState('1');

    function handleClick() {
        setExpand(true);
        setRows('3');
    }

    function isExpanded() {

    }

    return (
        <div>

            <form className="create-note" onSubmit={props.addNote}>

                {expand ? <input onChange={props.writeNote} name="title" placeholder="Title" value={props.newNote.title} /> : null}
                <textarea onClick={handleClick} onChange={props.writeNote} name="content" placeholder="Take a note..." rows={expand ? '3' : '1'} value={props.newNote.content} />
                <Zoom in={expand}>
                    <Fab variant="extended" type="submit"><AddIcon /></Fab>
                </Zoom>
            </form>

        </div>
    );
}

export default CreateArea;
