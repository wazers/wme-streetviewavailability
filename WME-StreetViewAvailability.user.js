// ==UserScript==
// @name        WME Street View Availability
// @namespace   http://www.tomputtemans.com/
// @description Shows a layer displaying the available street view roads and locations
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor.*$/
// @icon        data:image/png;base64,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
// @version     0.9.0
// @grant       none
// ==/UserScript==

/* global W, I18n, OL, google */

(function() {
  var tilelayerServers = [
    'https://mts0.google.com/mapslt',
    'https://mts1.google.com/mapslt',
    'https://mts2.google.com/mapslt',
    'https://mts3.google.com/mapslt'
  ];

  function init(e) {
    if (e && e.user === null) {
      return;
    }
    if (typeof I18n === 'undefined') {
      setTimeout(init, 300);
      return;
    }
    if (document.getElementById('layer-switcher') === null && document.getElementById('layer-switcher-group_display') === null) {
      setTimeout(init, 200);
      return;
    }
    if (typeof google === 'undefined' || typeof google.maps === 'undefined' || typeof google.maps.StreetViewPanorama === 'undefined') {
      setTimeout(init, 200);
    }
    var streetViewControl = document.querySelector('.pin');
    if (streetViewControl === null) {
      setTimeout(init, 400);
      log('Street view elements unavailable, retrying in 400ms');
    }
    if (typeof W === 'undefined' ||
        typeof W.loginManager === 'undefined') {
      setTimeout(init, 100);
      return;
    }
    if (!W.loginManager.user) {
      W.loginManager.events.register("login", null, init);
      if (!W.loginManager.user) {
        return;
      }
    }

    var enteringStreetView = false, // Set to true when the marker is being dragged to the map
        ignoreStreetViewExit = false, // Set to true to indicate that the street view availability was set to visible manually and should not be reverted
        previousDisplayState = 'none'; // Contains previous pin display state, used to detected changes

    // Change the opacity with the following bookmarklet:
    // javascript:localStorage.WME_StreetViewAvailability=JSON.stringify({opacity:prompt('Give a percentage between 0 and 100',100)/100});W.map.getLayersByName('Street View Availability')[0].setOpacity(JSON.parse(localStorage.WME_StreetViewAvailability).opacity);

    // Add the map layer, hidden by default
    I18n.translations[I18n.currentLocale()].layers.name.street_view_availability = 'Street View Availability';
    var streetViewLayer = new OL.Layer.XYZ('Street View', tilelayerServers[Math.floor(Math.random() * tilelayerServers.length)] + '?lyrs=svv&x=${x}&y=${y}&z=${z}&w=256&h=256&style=40', {
      isBaseLayer: false,
      uniqueName: 'street_view_availability',
      tileSize: new OL.Size(256, 256),
      transitionEffect: 'resize',
      displayInLayerSwitcher: true,
      opacity: localStorage.WME_StreetViewAvailability ? JSON.parse(localStorage.WME_StreetViewAvailability).opacity : 1,
      visibility: false
    });
    W.map.addLayer(streetViewLayer);

    // Add layer entry in the new layer drawer
    var displayGroupToggle = document.getElementById('layer-switcher-group_display');
    if (displayGroupToggle != null) {
      var displayGroup = displayGroupToggle.parentNode;
      while (displayGroup != null && displayGroup.className != 'group') {
        displayGroup = displayGroup.parentNode;
      }
      var togglesList = displayGroup.querySelector('.collapsible-GROUP_DISPLAY');
      var toggler = document.createElement('li');
      var checkbox = document.createElement('wz-checkbox');
      checkbox.id = 'layer-switcher-item_street_view';
      checkbox.type = 'checkbox';
      checkbox.className = 'hydrated';
      checkbox.textContent = 'Street View';
      checkbox.addEventListener('click', e => streetViewLayer.setVisibility(e.target.checked));
      toggler.appendChild(checkbox);
      togglesList.appendChild(toggler);
      displayGroupToggle.addEventListener('click', function() {
        checkbox.disabled = !displayGroupToggle.checked;
        streetViewLayer.setVisibility(displayGroupToggle.checked && checkbox.checked);
      });
    }

    // Create keyboard shortcut to toggle the imagery layer (Shift+T)
    I18n.translations[I18n.currentLocale()].keyboard_shortcuts.groups.layers.members.toggleStreetViewAvailability = 'Toggle street view availability';
    W.accelerators.addAction('toggleStreetViewAvailability', { group: 'layers' });
    W.accelerators.events.register('toggleStreetViewAvailability', this, function() {
      streetViewLayer.setVisibility(!streetViewLayer.getVisibility());
      checkbox.checked = streetViewLayer.getVisibility();
    });
    W.accelerators._registerShortcuts({ 'S+t': 'toggleStreetViewAvailability' });

    // Add an observer to activate the script whenever the street view marker gets dragged around
    var controlObserver = new MutationObserver(function(mutationRecords) {
      if (mutationRecords[0].target.style.display != previousDisplayState) {
        if (previousDisplayState == 'none' && displayGroupToggle.checked) {
          previousDisplayState = mutationRecords[0].target.style.display;
          enteringStreetView = true;
          streetViewLayer.setVisibility(true);
          enteringStreetView = false;
        } else if (previousDisplayState == '' && !ignoreStreetViewExit) {
          previousDisplayState = mutationRecords[0].target.style.display;
          streetViewLayer.setVisibility(false);
        }
      }
    });
    controlObserver.observe(streetViewControl, { attributes: true, attributeFilter: ['style'] });

    // Deal with changes to the layer visibility
    streetViewLayer.events.register('visibilitychanged', null, function() {
      if (!enteringStreetView && streetViewLayer.getVisibility()) {
        ignoreStreetViewExit = true;
      }
      if (!streetViewLayer.getVisibility()) {
        ignoreStreetViewExit = false;
      }
    });

    // Remove old LocalStorage entry
    if (localStorage.getItem('WMEStreetViewWidth')) {
      localStorage.removeItem('WMEStreetViewWidth')
    }
  }
  init();

  function log(message) {
    console.log(message);
  }
})();
