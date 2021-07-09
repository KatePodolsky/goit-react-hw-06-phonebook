import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from '../contacts/contacts-actions';
import checkingAnExistingContact from '../contacts/contacts-reducer-helpers';

const parsedContacts = JSON.parse(localStorage.getItem('contactArray')) 

const itemsReducer = createReducer(parsedContacts || [], {
    [contactsActions.saveContact]: (state, action) => checkingAnExistingContact(state, action),
    [contactsActions.deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload),
}
)

const filterReducer = createReducer('', {
    [contactsActions.updateFilter]:(_, {payload})=> payload
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});


//STEP 1

// import { combineReducers } from 'redux';
// import actionTypes from './contacts-types'

// const parsedContacts = JSON.parse(localStorage.getItem('contactArray')) 

// const itemsReducer = (state = parsedContacts|| [], { type, payload }) => {
//     switch (type) {
//         case actionTypes.SAVE_CONTACT:
//             if (state.some(({ name }) => name.toLowerCase() === payload.name.toLowerCase())) {
//                 alert(`${payload.name} is already in contacts`)
//                 return state
//             }

//             if (state.some(({ number }) => number === payload.number)) {
//                 alert(`${payload.number} is already in contacts under a different name`)
//                 return state
//             }
//             return [payload, ...state]
//            
//         case actionTypes.DELETE_CONTACT:
//             return state.filter(({ id }) => id !== payload);

//         default:
//             return state;
//     }
// }

// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case actionTypes.FILTER_CONTACT:
//             return payload;
//         default:
//             return state;
//     }
// };


// export default combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
// });