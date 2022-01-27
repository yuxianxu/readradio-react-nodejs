import {
    CLEAR_TRANSCRIPT,
    UPDATE_TRANSCRIPT,
    START_LISTENING,
    STOP_LISTENING
} from '../types';

export default (state, action) => {
    switch(action.type){
        case UPDATE_TRANSCRIPT:
            return {
                ...state,
                transcript: [ ...state.transcript, action.payload ]
            }
        case CLEAR_TRANSCRIPT:
            return {
                ...state,
                transcript: []
            }
        case START_LISTENING:
            return {
                ...state,
                listening: true
            }
        case STOP_LISTENING:
            return {
                ...state,
                listening: false
            }
        default:
            return state
            
    }
}