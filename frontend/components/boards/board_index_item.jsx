import React from 'react';
import { Link } from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardIndexItem = props => {
    return(
        <Link to={`/${props.board.userId}/${props.board.id}`}>
            <div className="profile-board">
                <div className="board-item" key={props.board.id}>
                    <div id="pin1">{props.board.pinIds[0] ? <img src={props.pins[props.board.pinIds[0]].imageUrl}/> : ""}</div>
                    <div id="pin2">{props.board.pinIds[1] ? <img src={props.pins[props.board.pinIds[1]].imageUrl} /> : ""}</div>
                    <div id="pin3">{props.board.pinIds[2] ? <img src={props.pins[props.board.pinIds[2]].imageUrl} /> : ""}</div>
                    <div id="pin6">{props.board.pinIds[3] ? <img src={props.pins[props.board.pinIds[3]].imageUrl} /> : ""}</div>
                    <div id="pin4">{props.board.pinIds[4] ? <img src={props.pins[props.board.pinIds[4]].imageUrl} /> : ""}</div>
                    <div id="pin5">{props.board.pinIds[5] ? <img src={props.pins[props.board.pinIds[5]].imageUrl} /> : ""}</div>
                </div> 
                <div id="board-title">{props.board.title}<FontAwesomeIcon icon={faEdit} className="dropbtn" id="edit" /></div>
                
            </div>
        </Link>
        
        
    )
};

export default BoardIndexItem;