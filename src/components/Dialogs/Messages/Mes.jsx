import React from 'react';
import './Mes.css';

const Mes = (props) => {
    return(
        <div className="messages">
            <p className="messages__item">{props.messages}</p>
        </div>
    )
}

export default Mes;