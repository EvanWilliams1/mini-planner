import $ from 'jquery';

class PlaceMap{
  constructor({ containerId }){
    const container = $(containerId);
    const mapDiv = $(`<div style='height:500px'></div>`);
    container.append(mapDiv);
     this.options = {
        center: new google.maps.LatLng(40.705189,-74.009209),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16
      };
      this.map = new google.maps.Map(mapDiv[0], this.options);
      this.markers = [];
      this.bounds = new google.maps.LatLngBounds();
      this.bounds.extend(this.options.center);
  }
  addMarker({ address, position }){
    this.bounds.extend(position);
    this.map.fitBounds(this.bounds);
    var marker = new google.maps.Marker({
          position: position,
    });
    this.markers.push(marker);
    marker.setMap(this.map);
  }
  removeMarker({index}){
    this.markers.forEach( (marker, _index)=> {
      if(_index === index){
        marker.setMap(null)
      }
    });
    this.markers.splice(index, 1);
    this.bounds = new google.maps.LatLngBounds();
    this.bounds.extend(this.options.center);
    this.markers.forEach( marker => this.bounds.extend(marker.position));
    this.map.fitBounds(this.bounds);
  }
}

export default PlaceMap;
