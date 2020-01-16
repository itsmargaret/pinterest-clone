import React from 'react';
import { Link } from 'react-router-dom';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {myEditFunction} from '../dropdown/dropdown';
import BoardIndexContainer from '../boards/board_index_container';
import PinIndexContainer from '../pins/pin_index_container';
import { Switch, Route, Redirect } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchBoards(this.props.match.params.userId);
    }

    render() {
        if (this.props.user) {
            return (
                <div>
                    <div className="profile-page">
                        <div className="profile-icons">
                            <li className="dropdown">
                                <FontAwesomeIcon icon={faPlus} className="dropbtn" onClick={() => myEditFunction()} /> 
                                <ul id="myEditDropdown" className="dropdown-content">
                                    <li><a onClick={() => this.props.openModal('createBoard', null)}>Create board</a></li>
                                    <li><Link to="/pin-builder">Create pin</Link></li>
                                </ul>
                            </li>
                            <FontAwesomeIcon icon={faEdit} className="dropbtn"/>
                        </div>
                        <div className="user-info">
                            <div id="username">{this.props.user.email.split("@")[0]}</div>
                            {this.props.user.imageUrl ? <img src={this.props.user.imageUrl} id="profile-pic" /> : <div id="profile-pic">{this.props.user.email[0]}</div>}
                        </div>
                        <div >
                            <Link to={`/${this.props.user.id}/boards`} id="profile-links">Boards</Link>
                            <Link to={`/${this.props.user.id}/pins`} id="profile-links">Pins</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route
                            path="/:userId/pins"
                            render={props =>
                                this.props.user ? <PinIndexContainer user={this.props.user} /> : <Redirect to="/" />
                            }
                        />
                        <Route
                            path="/:userId"
                            render={props =>
                                this.props.user ? <BoardIndexContainer id={ props.match.params.userId } /> : <Redirect to="/" />
                            }
                        />
                    </Switch>
                </div> 
            );
        } else {
            return null;
        }
    }
}

export default UserProfile;
