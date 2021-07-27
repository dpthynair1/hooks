import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import useMousePosition from "../hooks/useMOuseMove";



const Note = ({note }) => {

  const {dispatch} = useContext(NotesContext)
    // useEffect(() => {
    //   console.log('starting effect')
    // }, [])
    
    const position = useMousePosition()
      return (
                <div >
       
                      <h3>{note.title}</h3>
                      <p>{note.body}</p>
                      <p>{position.x} {position.y}</p>
                      <button onClick={() => dispatch({type: 'REMOVE_NOTE', title : note.title})}>Remove</button>
                  </div>
      )
    }

    export default Note;