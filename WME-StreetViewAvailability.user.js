// ==UserScript==
// @name        WME Street View Availability
// @namespace   http://www.tomputtemans.com/
// @description Shows the layer with available street view locations
// @include     https://www.waze.com/*/editor/*
// @include     https://www.waze.com/editor/*
// @include     https://editor-beta.waze.com/*
// @exclude     https://www.waze.com/user/*editor/*
// @version     0.1
// @grant       none
// ==/UserScript==
(function() {
  function init() {
    if (typeof Waze === 'undefined' || typeof Waze.map === 'undefined') {
      setTimeout(init, 660);
      log('Waze object unavailable, map still loading');
      return;
    }
    var streetViewControl = document.querySelector('.street-view-control');
    if (streetViewControl == null) {
      setTimeout(init, 400);
      log('Street view elements unavailable, retrying in 400ms');
    }
    var streetViewLayer = new OL.Layer.XYZ('Street View Availability', "https://mts2.google.com/mapslt?lyrs=svv&x=${x}&y=${y}&z=${z}&w=256&h=256&hl=en&style=40,18", {
      isBaseLayer: false,
      tileSize: new OL.Size(256, 256),
      transitionEffect: 'resize',
      zoomOffset: 12,
      displayInLayerSwitcher: false,
      visibility: false
    });
    Waze.map.addLayer(streetViewLayer);
    var controlObserver = new MutationObserver(function(mutationRecords) {
      mutationRecords.forEach(function(mutationRecord) {
        streetViewLayer.setVisibility(mutationRecord.target.style.display == 'none');
      });
    });
    controlObserver.observe(streetViewControl, { attributes: true, attributeFilter: ['style'] });
  }
  init();
  
  function log(message) {
    console.log(message);
  }
})();
