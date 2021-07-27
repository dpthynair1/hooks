
import React, { useEffect, useReducer, useState } from 'react';
import notesReducer from './reducer';
// import Note from './Note';
import NotesList from './NotesList';
import Form from './Form'
import NotesContext from '../context/NotesContext';

const NoteApp = () => {

 
    // const [notes, setNotes] = useState([])
    // const [notes, setNotes] = useState([])
  
    const [notes, dispatch] = useReducer(notesReducer, [])
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
  
  
      // const removeNote = (title) => {
      //   //  setNotes(notes.filter((note) => note.title !== title))
      //   dispatch({
      //     type: 'REMOVE_NOTE',
      //     title
      //   })
        
      // }
    
    
    useEffect (() => {
    
     const notesData = JSON.parse(localStorage.getItem('notes'))
      if(notesData){
       // setNotes(notesData)
        dispatch({type: 'POPULATE_NOTES', notes : notesData})
      }
  
    },[])
  
  
  
   useEffect(() => {
    
     localStorage.setItem('notes', JSON.stringify(notes))
   }, [notes])
  
    return (
        <NotesContext.Provider   value ={{notes, dispatch}}>
            <h1>Notes</h1>
            <NotesList />
            <Form  />
        </NotesContext.Provider> 
    )
  }
  
  
  
export { NoteApp as default};  