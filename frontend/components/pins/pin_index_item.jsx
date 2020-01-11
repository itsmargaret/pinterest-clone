import React from 'react';
import {Link} from 'react-router-dom';

const PinIndexItem = props => (
    <figure>
        {/* <Link to={`/pins/${props.pin.id}`}> */}
            <img src={props.pin.imageUrl} />
        {/* </Link> */}
        <button>Save</button> 
            {/* open modal */}
    </figure>
        
)

export default PinIndexItem;
//clicking save opens modal 