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
        this.props.fetchBoard(this.props.match.params.boardId);
        this.props.fetchBoards(this.props.match.params.userId);
    }

    render() {
        if (!this.props.board) return null;

        return(
            <div className="board-show">
                <li className="dropdown">
                    <FontAwesomeIcon icon={faPlus} className="dropbtn" onClick={() => myEditFunction()} />
                    <ul id="myEditDropdown" className="dropdown-content">
                        <li><Link to="/pin-builder">Create pin</Link></li>
                    </ul>
                </li>
                <FontAwesomeIcon icon={faEdit} className="dropbtn" onClick={() => this.props.openModal('editBoard', null)}/>
                <div id="pin-user">
                    <img id="pin-profile-icon" src={this.props.currentUser.imageUrl} /> {this.props.currentUser.email.split("@")[0]}
                </div> <br />
                <div id="username">{this.props.board.title}</div>
                {this.props.board.pinIds.length} Pins <br/>
                <Masonry>
                    {this.props.board.pinIds.map(id => <PinIndexItem openModal={this.props.openModal} pin={this.props.pins[id]}/>)}
                </Masonry>
            </div>
        )
    }
}

export default BoardShow;
