
import React,{useState,useContext} from "react"
import NotesContext from "../context/NotesContext"


const Form = () => {

    const { dispatch } = useContext(NotesContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNote = (e) => {
        e.preventDefault()
  
  
        dispatch({
          type: 'ADD_NOTE',
          title,
          body
        })
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ])
        setTitle('')
        setBody('')
    }

    return <div>

    <p>Add note</p>
            <form onSubmit={addNote}>
                <input placeholder ="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder ="Add note ...."  value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>Add note</button>
            </form>
    </div>
}

export default Form;