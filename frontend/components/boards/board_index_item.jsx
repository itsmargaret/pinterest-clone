import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = props => (
    <div className="board" key={props.board.id}>
        <Masonry>
            {
                props.board.pins.map((pin, i) => (
                    <img src={pin.imageUrl} key={i}/>
                ))
            }
        </Masonry>
        <div></div>
    </div>
)

export default BoardIndexItem;