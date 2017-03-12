import $ from 'jquery';
import PlacePicker from './PlacePicker';
import PlaceLister from './PlaceLister';
import PlaceMap from './PlaceMap';


const state = [];

const onPlaceChanged = ({ address, position})=> {
  state.push({address, position});
  placePicker.reset();
  placeMap.addMarker({ address, position });
  renderPlaceLister();
};

const onPlaceRemoved = (index)=> {
  state.splice(index, 1);
  placeMap.removeMarker({ index });
  renderPlaceLister();
};

const renderPlaceLister = ()=> {
  PlaceLister({ containerId: '#placeLister', places: state, onPlaceRemoved });
};

var placePicker = new PlacePicker({ containerId: '#placePicker', onPlaceChanged });
var placeMap = new PlaceMap({ containerId: '#placeMap' });

renderPlaceLister();
