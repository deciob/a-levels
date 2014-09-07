'use strict';

(function() {

  function MapDataService($http, GEO_DATA) {
    var url = GEO_DATA.path,
      resource = $http.get(url);

    this.getData = function() {
      return resource;
    };
  }

  function ALevelDataService($http, THEME_DATA) {
    var url = THEME_DATA.path,
      resource = $http.get(url);

    this.getData = function() {
      return resource;
    };
  }

  function ParseCsvDataService() {
    this.parse = function(data, accessor) {
      if (accessor !== undefined) {
        return d3.csv.parse(data, accessor);
      } else {
        return d3.csv.parse(data);
      }
    }
  }

  function SlugifyNameService() {
    this.slugify = function(name) {
      return name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
    }
  }

  angular
    .module('aLevelsApp')
    .service('MapDataService', MapDataService)
    .service('ALevelDataService', ALevelDataService)
    .service('ParseCsvDataService', ParseCsvDataService)
    .service('SlugifyNameService', SlugifyNameService);

})();
