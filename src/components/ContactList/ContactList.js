import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem"

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
        {contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
}

const getfilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase()

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getfilteredContacts(items, filter)
});

const mapDispatchToProps = dispatch => (
    {
        onDeleteContact: (contactId) => dispatch(contactsActions.deleteContact(contactId)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);