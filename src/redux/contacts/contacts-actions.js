import shortid from 'shortid';
import actionTypes from './contacts-types'

const saveContact = ({ name, number }) => ({
    type: actionTypes.SAVE_CONTACT,
    payload: {
        id: shortid.generate(),
        name: name,
        number: number,
    },
})

const deleteContact = contactId => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId,
})

const updateFilter = value => ({
    type: actionTypes.FILTER_CONTACT,
    payload: value,
})

export default { saveContact, deleteContact, updateFilter }