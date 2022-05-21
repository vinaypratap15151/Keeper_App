import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setnotes] = useState([]);
    function addnote(note) {
        setnotes((prevnotes) => {

            return [...prevnotes, note]

        })

    }
    function deletenote(id) {
        setnotes((prevnotes) => {
            return prevnotes.filter((noteitem, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea
                onadd={addnote}
            />
            {notes.map((currentnote, index) => {

                return (< Note
                    key={index}
                    id={index}
                    title={currentnote.title}
                    content={currentnote.content}
                    ondelete={deletenote}
                />
                );

            })
            }

            <Footer />
        </div>
    );
}

export default App;
