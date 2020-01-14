import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        if (this.props.pins) {
            return(
                <Masonry className="masonry">
                    {
                        this.props.pins.map((pin,i) => (
                            <PinIndexItem pin={pin} key={i} openModal={this.props.openModal} fetchPin={this.props.fetchPin} />
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