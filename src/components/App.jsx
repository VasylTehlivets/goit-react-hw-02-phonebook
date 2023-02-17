import { Component } from "react"
import { nanoid } from 'nanoid';
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css"

export class App extends Component {

  state = {
      contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  }


  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

    onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

 render() {
    const { filter } = this.state;
    return (
      <section>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2 className={css.head}>Contacts</h2>
        <ContactFilter filter={filter} onFilterChange={this.onFilterChange} />
        <ContactList
          contacts={this.findContacts()}
          onContactDelete={this.onContactDelete}
        />
      </section>
    );
  }

};
