import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        return(
            <Masonry className="masonry">
                {
                    this.props.pins.map((pin,i) => (
                        <PinIndexItem pin={pin} key={i} fetchPin={this.props.fetchPin} />
                    ))
                }
            </Masonry>
        )
    }
}

export default PinIndex;