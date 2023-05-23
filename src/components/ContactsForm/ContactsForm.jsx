import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactsForm.module.css';

const ContactsForm = ({onSubmit}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        setId(nanoid())
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        setId(nanoid())
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    
    onSubmit({id: id, name: name, number: number});

    setName('');
    setNumber('');
    setId('')
  };

  return (
    <>
      <h2 className={css.title}>Add new contact</h2>
      <form
        className={css.form}
        autoComplete="off"
        onSubmit={e => onFormSubmit(e)}
      >
        <div className={css.inputField}>
          <input
            className={css.input}
            placeholder="."
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => onInputChange(e)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="name" className={css.label}>
            Name
          </label>
        </div>
        <div className={css.inputField}>
          <input
            className={css.input}
            placeholder="."
            type="tel"
            name="number"
            id="number"
            value={number}
            onChange={e => onInputChange(e)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label htmlFor="number" className={css.label}>
            Number
          </label>
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
