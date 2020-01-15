import React from 'react';
import {Link} from 'react-router-dom';

const PinIndexItem = props => (
    <div className="pin" key={props.pin.id}>
        <button className="save-button" onClick={() => {props.fetchPin(props.pin.id); props.fetchBoards(props.currentUser.id); props.openModal('createPinning');}}>Save</button>
        <Link to={`/pins/${props.pin.id}`}>
            <img id="pin-img" src={props.pin.imageUrl}/>
        </Link>
    </div>    
)

// class PinIndexItem extends React.Component {
//     constructor(props) {
//         super(props)

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
        
//     }

//     render () {
//         return (
//             <div className="pin" key={props.pin.id}>
//                 <button className="save-button" onClick={() => this.props.openModal('createPinning')}>Save</button>
//                                             {/* on click, update state w/ pinId */}
//                 <Link to={`/pins/${props.pin.id}`}>
//                     <img id="pin-img" src={props.pin.imageUrl}/>
//                 </Link>
//             </div> 
//         )
         
//     }
    
// }

export default PinIndexItem;