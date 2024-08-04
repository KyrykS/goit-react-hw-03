import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={() => onDelete(contact.id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
