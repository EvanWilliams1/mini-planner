import $ from 'jquery';

const PlaceLister = ({ containerId, places, onPlaceRemoved })=> {
  var container = $(containerId);
  container.empty();
  const lis = places.map( (place, idx)=> {
    return `<li class='list-group-item'>${place.address}</li>`;
  });
  const ul = $(`<ul class='list-group'>${lis.join('')}</ul>`);
  $('li', ul).on('click', function(){
    const index = $(this).index();
    onPlaceRemoved(index);
  });
  container.append(ul);
};

export default PlaceLister;
