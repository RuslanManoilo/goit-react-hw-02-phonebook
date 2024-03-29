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

  getContact = (contactObj) => {
    const isExist = this.state.contacts.some(contact => contact.name.toLowerCase() === contactObj.name.toLowerCase());

    if (isExist) {
        alert(`${contactObj.name} is already in contacts.`);
        return;
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contactObj]
      }));
    };
  };

  onFilterChange = ({target}) => {
    this.setState({[target.name]: target.value.toLowerCase()})
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
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
        <ContactForm getContact = { this.getContact } />

        <SecondTitle>Contacts</SecondTitle>
        <Filter onFilterChange = { this.onFilterChange } />
        <ContactList 
          contacts = { this.filterContacts() } 
          deleteContact = { this.deleteContact }
        />
      </Container>
    )
  }
};


export default App;