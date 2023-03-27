import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date()

let year = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export { Footer };