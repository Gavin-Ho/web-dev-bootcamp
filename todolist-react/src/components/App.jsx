import React, { useState } from "react";

function App() {

    const [item, setItem] = useState("");

    const [list, setList] = useState([]);

    function handleInput(event) {
        const { value } = event.target;
        setItem(value);
    }

    function handleClick(event) {
        setList((prevItems) => { return [...prevItems, item] });
        setItem("");
        event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <div className="form">
                    <input onChange={handleInput} type="text" value={item} />
                    <button type="submit">
                        <span>Add</span>
                    </button>
                </div>
                <div>
                    <ul>
                        {list.map((items) => {
                            return <li>{items}</li>
                        })}
                    </ul>
                </div>
            </form>
        </div>

    );
}

export default App;
