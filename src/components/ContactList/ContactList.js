import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import photoDivakov from '../../assets/img/teamPhoto/photoDivakov.jpg';
import photoKobec from '../../assets/img/teamPhoto/photoKobec.jpg';
import photoPotapov from '../../assets/img/teamPhoto/photoPotapov.jpg';
import photoMarukhin from '../../assets/img/teamPhoto/photoMarukhin.jpg';
import photoLapeev from '../../assets/img/teamPhoto/photoLapeev.jpg';
import photoVereketa from '../../assets/img/teamPhoto/photoVereketa.jpg';
import photoKalinbet from '../../assets/img/teamPhoto/photoKalinbet.jpg';

const PHOTOS = {
  photoDivakov,
  photoKobec,
  photoPotapov,
  photoMarukhin,
  photoLapeev,
  photoVereketa,
  photoKalinbet,
};

const ContactList = ({ contacts }) => (
  <ul className={styles.list}>
    {contacts.map(contact => (
      <li key={contact.email} className={styles.item}>
        <img
          className={styles.img}
          src={PHOTOS[contact.photo]}
          alt="developer"
        />
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
