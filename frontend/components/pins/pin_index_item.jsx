import React from 'react';
import {Link} from 'react-router-dom';

const PinIndexItem = props => (
    <div className="pin" key={props.pin.id}>
        <a href="#" className="save-button">Save</a>
        <Link to={`/pins/${props.pin.id}`}>
            <img id="pin-img" src={props.pin.imageUrl}/>
        </Link>
    </div>    
)

export default PinIndexItem;