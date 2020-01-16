import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

class PinIndex extends React.Component {
    componentDidMount() {
        // debugger
        if (this.props.user) {
            this.props.fetchUserPins(this.props.user.id)
        } else {
            this.props.fetchPins();
        }
        
        this.props.fetchBoards(this.props.currentUser);
    }

    render() {
        if (this.props.pins && this.props.boards) {
            return(
                <Masonry className="masonry">
                    {
                        this.props.pins.map((pin,i) => (
                            <PinIndexItem key={i} 
                                pin={pin} 
                                openModal={this.props.openModal} 
                                fetchPin={this.props.fetchPin} 
                                fetchBoards={this.props.fetchBoards}
                                currentUser={this.props.currentUser} 
                            />
                        ))
                    }
                </Masonry>
            )
        } else {
            return null;
        }
    }
}

export default PinIndex;