import React from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../util/marker_manager';


class BusinessMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 11
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.businessId){
      this.MarkerManager.updateMarkers(this.props.businesses[this.props.businessId]);
    }
  }

  componentWillReceiveProps(nextProps){
    let mapDOMNode;
    let mapOptions;

    if (nextProps.businessId){
      let business = nextProps.businesses[nextProps.businessId];

      this.MarkerManager.updateMarkers(business);
      this.map.setCenter({lat: business.lat, lng: business.lng});
      this.map.setZoom(13);
    } else {
      this.MarkerManager._removeMarker();
      this.map.setCenter({lat: 37.7758, lng: -122.435});
      this.map.setZoom(11);
    }
  }



  render(){
    return (
      <div id="map-container" ref="map"></div>
    );
  }
}

export default withRouter(BusinessMap);
