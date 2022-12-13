import React,{Component} from 'react';
import {MapContainer,TileLayer, Marker, Popup} from 'react-leaflet'
import './Map.css';


const position = [51.505, -0.09]
class BasicMap extends Component {
    constructor(props) {
        super(props);
        this.state ={
            lat : 51.506804,
            lng : 0.128213,
            zoom : 16
        }
    }
render() {
        const position = [this.state.lat,this.state.lng];
      return <React.Fragment>
          <h4>How to find us</h4>
          <MapContainer center={position} zoom={this.state.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                <Popup>
        Come and visit us! <br /> we have biscuits!
      </Popup>
                </Marker>
</MapContainer>
      
      </React.Fragment>;
      
    }
}
export default BasicMap
