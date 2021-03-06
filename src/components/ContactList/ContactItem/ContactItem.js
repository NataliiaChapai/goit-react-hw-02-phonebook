import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number, onDeleteBtnClick }) {
  return (
    <li className={s.item} key={id}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={onDeleteBtnClick}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default ContactItem;
