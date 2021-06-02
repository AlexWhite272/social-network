import React from 'react';
import { NavLink } from 'react-router-dom'
import './DialogsItem.css';


const DialogsItem = (props) => {
    return (

        <div className="dialogsItem__info" >
                <NavLink to={'/dialogs/' + props.id} activeClassName="dialogs__info_act"><p>{props.name}</p></NavLink>
        </div>
    )
}

export default DialogsItem;