import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import "./MyNotes.scss"
import Axios from 'axios';

class MyNotes extends Component {
    state = {
        notesList: [],
        noteId: null,
    }

    render() {
        return (
            <>
            <div>
                MyNotes
            </div>
            </>
        )
    }
}

export default MyNotes
