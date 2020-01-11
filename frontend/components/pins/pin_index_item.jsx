import React from 'react';
import {Link} from 'react-router-dom';
import {myHoverFunction} from '../dropdown/dropdown';

const PinIndexItem = props => (
    <div className="pin">
        {/* <Link to={`/pins/${props.pin.id}`}> */}
        <img src={props.pin.imageUrl}/>
        {/* </Link> */}
        <a href="#" className="button">Save</a>
            {/* open modal */}
    </div>
        
)

export default PinIndexItem;
//clicking save opens modal 