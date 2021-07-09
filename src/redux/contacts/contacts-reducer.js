import { combineReducers } from 'redux';
import actionTypes from './contacts-types'

const parsedContacts = JSON.parse(localStorage.getItem('contactArray')) 

const itemsReducer = (state = parsedContacts|| [], { type, payload }) => {
    switch (type) {
        case actionTypes.SAVE_CONTACT:
            if (state.some(({ name }) => name.toLowerCase() === payload.name.toLowerCase())) {
                alert(`${payload.name} is already in contacts`)
                return state
            }

            if (state.some(({ number }) => number === payload.number)) {
                alert(`${payload.number} is already in contacts under a different name`)
                return state
            }
            const s = [payload, ...state]
            console.log(s);
            return s;

        case actionTypes.DELETE_CONTACT:
            return state.filter(({ id }) => id !== payload);

        default:
            return state;
    }
}

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.FILTER_CONTACT:
            return payload;
        default:
            return state;
    }
};


export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});