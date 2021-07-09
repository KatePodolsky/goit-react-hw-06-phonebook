//STEP 2

import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const saveContact = createAction('contact/Save', ({ name, number }) => ({
        payload: {
            id: shortid.generate(),
            name: name,
            number: number,
        },
}));

const deleteContact = createAction('contact/Delete');

const updateFilter = createAction('contact/Filter');

// eslint-disable-next-line
export default { saveContact, deleteContact, updateFilter };

//STEP 1

// import shortid from 'shortid';
// import actionTypes from './contacts-types'

// const saveContact = ({ name, number }) => ({
//     type: actionTypes.SAVE_CONTACT,
//     payload: {
//         id: shortid.generate(),
//         name: name,
//         number: number,
//     },
// });

// const deleteContact = contactId => ({
//     type: actionTypes.DELETE_CONTACT,
//     payload: contactId,
// });

// const updateFilter = value => ({
//     type: actionTypes.FILTER_CONTACT,
//     payload: value,
// });

// export default { saveContact, deleteContact, updateFilter };