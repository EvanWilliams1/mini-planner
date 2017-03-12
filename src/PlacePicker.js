import $ from 'jquery';

class PlacePicker{
  constructor({ containerId, onPlaceChanged}){
    const container = $(containerId);
    container.empty();

    const input = $(`<input class='form-control'/>`);
    this.input = input;

    const formGroup = $(`<div class='form-group'></div>`);
    formGroup.append(input);

    container.append(formGroup);
    const autocomplete = new google.maps.places.Autocomplete(input[0]);
    autocomplete.addListener('place_changed', ()=> {
      const place = autocomplete.getPlace();
      const address = place.formatted_address;
      const position = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
      onPlaceChanged({ address, position });
    });
  }
  reset(){
    this.input.val('');
  }
}

export default PlacePicker;
