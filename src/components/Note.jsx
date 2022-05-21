import React from "react";

function Note(props) {
    function handleclick() {

        props.ondelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleclick}><span>Delete</span></button>
        </div>
    );



}
export default Note;