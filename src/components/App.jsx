import React, { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 450px;
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  background-color: #f6f2f2;
  box-shadow: 3px 4px 7px 3px lightgray;
`;
const StyledText = styled.p`
  opacity: 0.6;
  font-size: 16px;
`;

const StyledTitle = styled.h1`
  font-style: oblique;
  font-size: 30px;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;

const StyledHeading = styled.h2`
  font-style: oblique;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  createContact = contactData => {
    const { name, number } = contactData;
    const newContact = { name, number, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm onSubmit={this.createContact} />
        <StyledHeading>Contacts</StyledHeading>
        {this.state.contacts.length ? (
          <div>
            <Filter handleFilter={this.handleFilter} />
            <ContactList
              getFilteredContacts={this.getFilteredContacts}
              onDeleteContact={this.handleDeleteContact}
            ></ContactList>
          </div>
        ) : (
          <StyledText>
            You don't have any contacts in your phonebook yet.
          </StyledText>
        )}
      </Container>
    );
  }
}

export default App;
