window.onload = function() {
    L.mapquest.key = 'd3HPGuXGlGFypSSjA9cCcaGkhwK6q95m';

    // 'map' refers to a <div> element with the ID map
    // creates map so user doesn't have to open up google but not very helpful unless pin can be dropped. TODO
    var map = L.mapquest.map('map', {
      center: [20.85519, -156.31445],
      layers: L.mapquest.tileLayer('map'),
      zoom: 9
    });
  }