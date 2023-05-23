import React from 'react';
import css from './ContactsFilter.module.css';

const ContactsFilter = ({onFilter}) => {
  const onChangeQuery = e => {
    onFilter(e.currentTarget.value);
  };

  return (
    <div className={css.inputField}>
      <input
        autoComplete="off"
        className={css.input}
        type="text"
        placeholder="."
        name="query"
        id="query"
        onChange={e => onChangeQuery(e)}
      />
      <label className={css.label} htmlFor="query">
        Search
      </label>
    </div>
  );
};

export default ContactsFilter;
