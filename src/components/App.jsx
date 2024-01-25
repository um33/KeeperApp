import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([])
  function handleAddNote(note){
    setNotes((prevValue)=>{
      return [...prevValue, note]
    })
  }
  
  function handleDelete(id) {
    return setNotes((prevValue) => prevValue.filter((noteItem, index) => index !== id));
  }


  return (
    <div>
      <Header />
      <CreateArea addNote={handleAddNote} />
      {notes.map((noteItem, index)=>{
    return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}  deleteNote={handleDelete}/>
  })}
      <Footer />
    </div>
  );
}

export default App;
