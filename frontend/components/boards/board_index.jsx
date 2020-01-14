import React from 'react';
import BoardIndexItem from './board_index_item';
import Masonry from 'react-masonry-component';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchBoards(this.props.id);
    }

    render() {
        if (this.props.boards) {
            
            return (
                <Masonry className="board-masonry">
                    {
                        this.props.boards.map((board, i) => (
                            <BoardIndexItem board={board} pins={this.props.pins} key={i} />
                        ))
                    }
                </Masonry>
            )
        } else {
            return null;
        }
        
    }
}

export default BoardIndex;