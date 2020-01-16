import React from 'react';
import { Link } from 'react-router-dom';
import { faEllipsisH, faArrowLeft, faThumbtack} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {myPinFunction} from '../dropdown/dropdown';

class PinShow extends React.Component {
    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId);
        this.props.fetchBoards(this.props.currentUser);
    }

    render() {
        if (this.props.pin && this.props.pin.author) {
            return (
                <div className="show-page">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} id="fixed" className="fa-icon" />
                    </Link>

                    <div className="pin-show">
                        <a href={this.props.pin.url}><img src={this.props.pin.imageUrl} /></a>
                        <div className="pin-show-text">
                            <div className="pin-show-buttons">
                                <li className="dropdown">
                                    <FontAwesomeIcon className="fa-icon" icon={faEllipsisH} onClick={() => myPinFunction()} />
                                    <ul id="myPinDropdown" className="dropdown-content">
                                        <li><a href={this.props.pin.imageUrl} download>Download image</a></li>
                                    </ul>
                                </li>
                                
                                <button id="save" onClick={() => this.props.openModal('createPinning', this.props.pin)}><FontAwesomeIcon icon={faThumbtack} /><span>Save</span></button>
                            </div>
                            <a href={this.props.pin.url} id="pin-show-url">{this.props.pin.url}</a><br/>
                            <a href={this.props.pin.url} id="pin-show-title">{this.props.pin.title}</a><br/>
                            <div id="pin-show-description">{this.props.pin.description}</div><br/>
                            <span id="pin-saved">
                                <Link to={`/${this.props.pin.authorId}`}>{this.props.pin.author.email.split("@")[0]}</Link> saved to <Link to={`/${this.props.pin.authorId}`} id="pin-saved" >Board</Link>
                            </span>
                            {/* have author name link to author show page */}
                            {/* have board link to board show page */}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}


export default PinShow;
