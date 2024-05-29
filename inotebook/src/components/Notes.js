import noteContext from "../context/notes/noteContext"
import React, { useContext, useEffect, useLayoutEffect, useRef,useState } from 'react'
import Noteitem from "./Noteitem";
import AddNote from "./AddNote"
import { useNavigate } from 'react-router-dom';


const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes()
    }
    else
    {
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [])
  
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({id: "" , etitle: "", edescription: "", eetag: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title || "",
      edescription: currentNote.description || "",
      eetag: currentNote.tag || ""
    });
    
  }
  
  const handleClick = (e) => {
    editNote(note.id , note.etitle , note.edescription , note.etag)
    refClose.current.click();
    props.showAlert("Note updated successfully" , "success")
  
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={note.etitle} minLength={5} name="etitle" aria-describedby="emailHelp" onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription} minLength={5} name="edescription" onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag"  name="etag" value={note.etag} onChange={onChange} required />
                </div>


              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-2">
        {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <Noteitem updateNote={updateNote} note={note} showAlert={props.showAlert} key={note._id} />
        })}
      </div>
    </>
  )
}

export default Notes
