import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Container, SecondTitle, Title } from "./Filter/Filter.styled";


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  getContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  onFilterChange = ({target}) => {
    this.setState({[target.name]: target.value.toLowerCase()})
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };
 
  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm getContact = { this.getContact } contacts = { this.state.contacts } />

        <SecondTitle>Contacts</SecondTitle>
        <Filter onFilterChange = { this.onFilterChange } />
        <ContactList 
          contacts = { this.state.contacts } 
          filterValue = { this.state.filter } 
          deleteContact = { this.deleteContact }
        />
      </Container>
    )
  }
};


export default App;