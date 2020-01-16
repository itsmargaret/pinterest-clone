import React from 'react';
import { Link } from 'react-router-dom';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { myEditFunction } from '../dropdown/dropdown';
import Masonry from 'react-masonry-component';
import PinIndexItem from '../pins/pin_index_item';

class BoardShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId)
    }

    render() {
        if (!this.props.board) return null;

        return(
            <div>
                <li className="dropdown">
                    <FontAwesomeIcon icon={faPlus} className="dropbtn" onClick={() => myEditFunction()} />
                    <ul id="myEditDropdown" className="dropdown-content">
                        <li><Link to="/pin-builder">Create pin</Link></li>
                    </ul>
                </li>
                <FontAwesomeIcon icon={faEdit} className="dropbtn" />
                <div id="pin-user">
                    <img id="pin-profile-icon" src={this.props.currentUser.imageUrl} /> {this.props.currentUser.email.split("@")[0]}
                </div> <br />
                <div id="username">{this.props.board.title}</div>
                {this.props.board.pinIds.length} Pins <br/>
                <Masonry>
                    {this.props.board.pinIds.map(id => <PinIndexItem pin={this.props.pins[id]}/>)}
                </Masonry>
            </div>
        )
    }

    // render() {
    //     if (this.props.currentUser) {
    //         return (
    //             <div>
    //                     <div className="user-info">
    //                         <div id="username">{this.props.currentUser.email.split("@")[0]}</div>
    //                         {this.props.currentUser.imageUrl ? <img src={this.props.currentUser.imageUrl} id="profile-pic" /> : <div id="profile-pic">{this.props.currentUser.email[0]}</div>}
    //                     </div>
    //                     <div >
    //                         <Link to={`/${this.props.currentUser.id}/boards`} id="profile-links">Boards</Link>
    //                         <Link to={`/${this.props.currentUser.id}/pins`} id="profile-links">Pins</Link>
    //                     </div>
    //                 </div>
    //                 <Switch>
    //                     <Route
    //                         path="/:userId/pins"
    //                         render={props =>
    //                             this.props.currentUser ? <PinIndexContainer user={this.props.currentUser} /> : <Redirect to="/" />
    //                         }
    //                     />
    //                     <Route
    //                         path="/:userId"
    //                         render={props =>
    //                             this.props.currentUser ? <BoardIndexContainer id={props.match.params.userId} /> : <Redirect to="/" />
    //                         }
    //                     />
    //                 </Switch>
    //             </div>
    //         );
    //     } else {
    //         return null;
    //     }
    // }
}

export default BoardShow;
