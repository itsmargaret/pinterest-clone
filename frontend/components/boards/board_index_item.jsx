import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const BoardIndexItem = props => (
    <div className="masonry" key={props.board.id}>
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