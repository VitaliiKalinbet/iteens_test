import React from 'react';
import contacts from '../../assets/bd/contacts.json';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactList from '../../components/ContactList/ContactList';

const ContactPage = () => {
  return (
    <div>
      <h2>ContactPage</h2>
      <ContactInfo />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;
