import React from 'react';
import PropTypes from 'prop-types';
import './message.css';

const Notification = ({ message }) => <h2 className="message">{message}</h2>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
