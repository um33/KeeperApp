import React, {useState} from "react";

function CreateArea(props) {
  const [ note, setNote] = useState({
    title:'',
    content:''
  })
  function handleNote(event){
    const {name, value} = event.target
    setNote(prevValue=>{
      if(name === 'title'){
        return({
          title:value,
          content:prevValue.content
        })
      }else if(name === 'content'){
        return({
          title:prevValue.title,
          content:value
        })
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    props.addNote(note)
    setNote({
      title:'',
      content:''
    })
  }

  return (
    <div>
      <form>
        <input name="title"  value={note.title} onChange={handleNote} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleNote} placeholder="Take a note..." rows="3" />
        <button type='submit' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
