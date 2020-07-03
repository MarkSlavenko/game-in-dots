import React from 'react';
import "./style.css";

const Message = (props) => {

    return (
        <div className="col-12 message">
            <b>{props.text}</b>
        </div>

    )
};

export default Message;