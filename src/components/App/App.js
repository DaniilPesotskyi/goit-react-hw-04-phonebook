import css from './App.module.css';
import { React, useState } from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSetFilter = query => {
    setFilter(query);
  };

  const onHandleAddContact = contact => {
    if (contacts.some(i => i.name === contact.name)) {
      alert(`${contact.name} is already exist!`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const onHandleDelContact = contactId => {
    setContacts(contacts.filter(el => el.id !== contactId));
  };

  return (
    <div className={css.container}>
      <ContactsForm onSubmit={onHandleAddContact} />
      <ContactsList
        contacts={contacts}
        onDelete={onHandleDelContact}
        filter={filter}
      >
        <ContactsFilter onFilter={onSetFilter} />
      </ContactsList>
    </div>
  );
};

export default App;
