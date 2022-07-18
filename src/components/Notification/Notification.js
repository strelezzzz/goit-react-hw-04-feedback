import React from 'react';
import PropTypes from 'prop-types';
import css from './message.module.css';

const Notification = ({ message }) => <p className={css.message}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
