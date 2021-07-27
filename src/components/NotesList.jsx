import React, { useContext } from 'react'
import NotesContext from '../context/NotesContext'
import Note from './Note'

const NotesList = () => {
const {notes} = useContext(NotesContext)

    return notes.map((note,idx) => (
        <Note  key={note.title} note= {note}  />
      
    ))
}

    export default NotesList;