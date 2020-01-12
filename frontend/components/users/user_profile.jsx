// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { faEllipsisH, faArrowLeft, faThumbtack } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { myPinFunction } from '../dropdown/dropdown';

// class UserProfile extends React.Component {
//     componentDidMount() {
//         this.props.fetchPin(this.props.match.params.pinId);
//     }

//     render() {
//         if (this.props.pin) {
//             return (
//                 <div className="show-page">
//                     <Link to="/">
//                         <FontAwesomeIcon icon={faArrowLeft} id="fixed" className="fa-icon" />
//                     </Link>

//                     <div className="pin-show">
//                         <a href={this.props.pin.url}><img src={this.props.pin.imageUrl} /></a>
//                         <div className="pin-show-text">
//                             <div className="pin-show-buttons">
//                                 <li className="dropdown">
//                                     <FontAwesomeIcon className="fa-icon" icon={faEllipsisH} onClick={() => myPinFunction()} />
//                                     <ul id="myPinDropdown" className="dropdown-content">
//                                         <li><a href={this.props.pin.imageUrl} download>Download image</a></li>
//                                     </ul>
//                                 </li>

//                                 <button id="save"><FontAwesomeIcon icon={faThumbtack} /><span>Save</span></button>
//                             </div>
//                             <a href={this.props.pin.url} id="pin-url">{this.props.pin.url}</a><br />
//                             <a href={this.props.pin.url} id="pin-title">{this.props.pin.title}</a><br />
//                             <div id="pin-description">{this.props.pin.description}</div><br />
//                             <span id="pin-saved">
//                                 <a href="#" >{this.props.pin.author.email.split("@")[0]}</a> saved to <a href="#" id="pin-saved"> Board</a>
//                             </span>
//                             {/* have author name link to author show page */}
//                             {/* have board link to board show page */}
//                         </div>
//                     </div>
//                 </div>
//             );
//         } else {
//             return null;
//         }
//     }
// }


// export default PinShow;
