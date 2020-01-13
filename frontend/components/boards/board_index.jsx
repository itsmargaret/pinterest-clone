import React from 'react';
import BoardIndexItem from './board_index_item';
import Masonry from 'react-masonry-component';

class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        return (
            <Masonry className="masonry">
                {
                    this.props.boards.map((board, i) => (
                        <BoardIndexItem board={board} key={i} />
                    ))
                }
            </Masonry>
        )
    }
}

export default BoardIndex;