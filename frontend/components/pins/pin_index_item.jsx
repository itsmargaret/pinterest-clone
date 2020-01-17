import React from 'react';
import {Link} from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PinIndexItem = props => { 
    return(
    <div className="pin" key={props.pin.id}>
        {(props.pin.authorId === props.currentUser) ? <FontAwesomeIcon icon={faEdit} className="edit-pin" onClick={() => props.openModal('editPin', props.pin)} /> : ""} 
        <button className="save-button" onClick={() => props.openModal('createPinning', props.pin)}>Save</button>
        <Link to={`/pins/${props.pin.id}`}>
            <img id="pin-img" src={props.pin.imageUrl}/>
        </Link>
    </div>    
    )}

export default PinIndexItem;