'use strict';

app.service('mapDataService', function($http){

    var url = 'data/regions_england_wgs84.topo.json';

    this.getMapData = function() {
      return $http.get(url);
    };

});