import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const BoardIndexItem = props => { 
    if (props.boards.pins) {
        return( 
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
    } else {
        return null;
    }
    
}

export default BoardIndexItem;