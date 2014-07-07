'use strict';

app.service('mapDataService', function($http){

    var url = 'data/regions_england_wgs84.topo.json';

    var resource = $http.get(url);

    this.getMapData = function() {
      return resource;
    };

});