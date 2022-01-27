import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import "./MyNotes.scss"
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class MyNotes extends Component {
    state = {
        notesList: [],
        noteId: null,
    }

    componentDidMount(){
        axios
        .get(`${API_URL}/mynotes/`)
        .then((notesList) => {
            console.log(notesList);
            this.setState({
                notesList: notesList.data
            });
        })
    }

    render() {
        return (
            <>
            <div>
                MyNotes
            </div>
            <div className='mynotes'>
                {this.state.notesList.map((note) => {
                    let normalDate = new Date(note.timestamp);
                    let noteDate = normalDate.toLocaleString("en-US");

                    return(
                        <li key={note.id} className='mynotes__list'>
                            <div>
                                {noteDate}
                            </div>
                            <div className='mynotes__content'>
                                {note.transcript}
                            </div>
                        </li>
                    ) 
                })}
            </div>
            </>
        )
    }
}

export default MyNotes
