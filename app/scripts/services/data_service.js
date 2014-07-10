'use strict';

app.service('mapDataService', function($http){

    var url = 'data/regions_england_wgs84.topo.json';

    var resource = $http.get(url);

    this.getData = function() {
      return resource;
    };

});

app.service('aLevelDataService', function($http){

    var url = 'data/a_levels_regional_urban.csv';

    var resource = $http.get(url);

    this.getData = function() {
      return resource;
    };

});

app.service('parseCsvData', function(){

  this.parse = function(data, accessor) {
    if (accessor !== undefined) {
      return d3.csv.parse(data, accessor);
    } else {
      return d3.csv.parse(data);
    }
  }
  
});