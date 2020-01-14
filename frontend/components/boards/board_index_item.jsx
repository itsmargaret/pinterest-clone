import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const BoardIndexItem = props => {
    return(
        <div>
            <div className="board-item" key={props.board.id}>
                <div id="pin1"><img src={props.pins[props.board.pinIds[0]].imageUrl}/></div>
                <div id="pin2"></div>
                <div id="pin3"></div>
                <div id="pin6"></div>
                <div id="pin4"></div>
                <div id="pin5"></div>
            </div> 
            <div id="board-title">{props.board.title}</div>
        </div>
        
    )
};

export default BoardIndexItem;