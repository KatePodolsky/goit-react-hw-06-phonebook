import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import FilterContacts from "./components/FilterContacts/FilterContacts";

import styles from "./App.module.css"

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.contacts !== prevProps.contacts) {
      localStorage.setItem('contactArray', JSON.stringify(this.props.contacts))
    }
  }

  render() {
    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <FilterContacts />
        <ContactList />
      </Container >
    )
  }
}

const mapStateToProps = state => ({
    contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);





