import React from 'react';
import { Link } from 'react-router-dom';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {myEditFunction} from '../dropdown/dropdown';
import BoardIndexContainer from '../boards/board_index_container';
import BoardIndexItem from '../boards/board_index_item';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        // this.props.fetchBoards(this.props.match.params.userId)
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="profile-page">
                    <li className="dropdown">
                        <FontAwesomeIcon icon={faPlus} className="dropbtn" onClick={() => myEditFunction()} /> 
                        <ul id="myEditDropdown" className="dropdown-content">
                            <li><button onClick={() => this.props.openModal('createBoard')}>Create board</button></li>
                            <li><Link to="/pin-builder"><button>Create pin</button></Link></li>
                        </ul>
                    </li>
                    <FontAwesomeIcon icon={faEdit} className="dropbtn"/>
                    <div id="username">{this.props.currentUser.email.split("@")[0]}</div>
                    {this.props.currentUser.imageUrl ? <img src={this.props.currentUser.imageUrl} id="profile-pic" /> : <div id="profile-pic">{this.props.currentUser.email[0]}</div>}
                    <div className="profile-links">
                        <Link to={`/${this.props.currentUser.id}/boards`}>Boards</Link>
                        <Link to={`/${this.props.currentUser.id}/pins`}>Pins</Link>
                    </div>
                    <BoardIndexContainer id={this.props.match.params.userId}/>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UserProfile;
