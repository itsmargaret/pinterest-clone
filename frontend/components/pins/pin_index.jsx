import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPins();
    }

    render() {
        return(
            <div id="columns">
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

{/* <div id="columns">
    <figure>
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg">
            <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
	</figure>

        <figure>
            <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg">
                <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
	    </figure>

            <figure>
                <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg">
                    <figcaption>Belle, based on 1770’s French court fashion</figcaption>
	</figure>

                <figure>
                    <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg">
                        <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
	</figure>

                    <figure>
                        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg">
                            <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
	</figure>

                        <figure>
                            <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg">
                                <figcaption>Pocahontas based on 17th century Powhatan costume</figcaption>
	</figure>

                            <figure>
                                <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg">
                                    <figcaption>Snow White, based on 16th century German fashion</figcaption>
	</figure>

                                <figure>
                                    <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg">
                                        <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
	</figure>

                                    <figure>
                                        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg">
                                            <figcaption>Tiana wearing the <i>robe de style</i> of the 1920’s</figcaption>
	</figure>
                                        <small>Art &copy; <a href="//clairehummel.com">Claire Hummel</a></small>
	</div> */}