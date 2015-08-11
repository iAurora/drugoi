function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(59.920051, 30.362183),
    zoom: 17,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.920051, 30.362183),
    animation: google.maps.Animation.DROP,
    url: 'https://www.google.com/maps/place/Drugoy+Khostel/@59.9200512,30.3621571,17z/data=!3m1!4b1!4m2!3m1!1s0x469631b6bd57d781:0x6074bca7dc0ea720',
    map: map
  });

  google.maps.event.addListener(marker, 'click', function() {
    window.open(this.url, '_blank');
  });
}

google.maps.event.addDomListener(window, 'load', initialize);