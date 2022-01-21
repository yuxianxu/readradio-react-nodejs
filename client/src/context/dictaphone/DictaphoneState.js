import React, { useReducer } from "react";
import DictaphoneContext from "./dictaphoneContext";
import dictaphoneReducer from './dictaphoneReducer';
import {
    CLEAR_TRANSCRIPT,
    UPDATE_TRANSCRIPT,
    START_LISTENING,
    STOP_LISTENING
} from '../types';


const DictaphoneState = props => {
    const initialState = {
        transcript: [],
        listening: false
    }

    const [ state, dispatch ] = useReducer(dictaphoneReducer, initialState);
    
    const updateTranscript = text => {
        if(text !== ""){
            dispatch({
                type: UPDATE_TRANSCRIPT,
                payload: text
            })
        }
    }

    const clearTranscript = () => {
        dispatch({
            type: CLEAR_TRANSCRIPT
        })
    }

    const startListen = () => dispatch({ type: START_LISTENING });
    const stopListen = () => dispatch({ type: STOP_LISTENING });

    return(
        <DictaphoneContext.Provider value={{
            transcript: state.transcript,
            listening: state.listening,
            updateTranscript,
            clearTranscript,
            startListen,
            stopListen
        }}>
            { props.children }
        </DictaphoneContext.Provider>
    )

}

export default DictaphoneState;