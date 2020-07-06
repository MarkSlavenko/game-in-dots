import React from 'react';
import './style.css';

const Message = ({ text }) => (
  <div className="col-12 message">
    <b>{text}</b>
  </div>
);

export default Message;
