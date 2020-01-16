import React from 'react';
import {Link} from 'react-router-dom';

const PinIndexItem = props => (
    <div className="pin" key={props.pin.id}>
        <button className="save-button" onClick={() => props.openModal('createPinning', props.pin)}>Save</button>
        <Link to={`/pins/${props.pin.id}`}>
            <img id="pin-img" src={props.pin.imageUrl}/>
        </Link>
    </div>    
)

export default PinIndexItem;