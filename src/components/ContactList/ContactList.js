import React from 'react';
import PropTypes from 'prop-types';
import imgPhoto from '../../assets/img/photos/photo.png';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.email} className={styles.item}>
        <img className={styles.img} src={imgPhoto} alt="developer" />
        <p className={styles.name}>{contact.name}</p>
        <p className={styles.position}>{contact.position}</p>
        <p className={styles.email}>
          email: <span className={styles.textEmail}>{contact.email}</span>
        </p>
        <p className={styles.description}>{contact.description}</p>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ContactList;
