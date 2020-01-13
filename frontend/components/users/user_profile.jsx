import React from 'react';
import { Link } from 'react-router-dom';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {myEditFunction} from '../dropdown/dropdown';
import BoardIndexContainer from '../boards/board_index_container';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="profile-page">
                    <li className="dropdown">
                        <FontAwesomeIcon icon={faPlus} className="dropbtn" onClick={() => myEditFunction()} /> 
                        <ul id="myEditDropdown" className="dropdown-content">
                            <li><button>Create board</button></li>
                            <li><button>Create pin</button></li>
                        </ul>
                    </li>
                    <FontAwesomeIcon icon={faEdit} className="dropbtn"/>
                    <div id="username">{this.props.currentUser.email.split("@")[0]}</div>
                    <img src={this.props.currentUser.imageUrl} id="profile-pic" />
                    <div className="profile-links">
                        <Link to={`/${this.props.currentUser.id}/boards`}>Boards</Link>
                        <Link to={`/${this.props.currentUser.id}/pins`}>Pins</Link>
                    </div>
                    <BoardIndexContainer />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UserProfile;
