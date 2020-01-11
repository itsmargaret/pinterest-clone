import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        return(
            <div className="masonry">
                    {
                        this.props.pins.map(pin => (
                            <PinIndexItem pin={pin} key={pin.id} fetchPin={this.props.fetchPin} />
                        ))
                    }
            </div>
        )
    }
}

export default PinIndex;