class MarkerManager {
  constructor(map){
    this.map = map;
    this.marker = null;
    this._removeMarker = this._removeMarker.bind(this);
    this._createMarkerFromBusiness = this._createMarkerFromBusiness.bind(this);
  }

  updateMarkers(business){
    this._removeMarker();
    this._createMarkerFromBusiness(business);
  }

  _createMarkerFromBusiness(business){
    let marker = new google.maps.Marker({
      position: {lat: business.lat, lng: business.lng},
      map: this.map,
      title: business.name
    });

    this.marker = marker;
  }


  _removeMarker() {
    if (this.marker){
      this.marker.setMap(null);
    }
  }
}

export default MarkerManager;
