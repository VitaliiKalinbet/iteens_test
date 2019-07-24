import React from 'react';
import contacts from '../../assets/bd/contacts.json';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactList from '../../components/ContactList/ContactList';
import Header from '../../components/Header/Header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactInfo />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;
