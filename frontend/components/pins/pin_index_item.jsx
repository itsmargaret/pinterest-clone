import React from 'react';
import {Link} from 'react-router-dom';

const PinIndexItem = props => (
    <div className="pin" key={props.pin.id}>
        <Link to={`/pins/${props.pin.id}`}>
            <img src={props.pin.imageUrl}/>
        </Link>
        <a href="#" className="button">Save</a>
            {/* open modal */}
        <a href={props.pin.url}>{props.pin.url}</a>
    </div>    
)

export default PinIndexItem;
//clicking save opens modal 