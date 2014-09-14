'use strict';

(function() {

  function ALevelDataFactory() {
    var addAll = function(rawCsvData) {
      this.data = _.groupBy(rawCsvData, function(o){return o.type;});
    }

    return {
      addAll: addAll,
      data: {}
    };
  }

  function UkGeomFactory() {
    var addAll = function(data) {
      this.data = data;
    }

    return {
      addAll: addAll,
      data: {}
    };
  }


  angular
    .module('aLevelsApp')
    .factory('ALevelDataFactory', ALevelDataFactory)
    .factory('UkGeomFactory', UkGeomFactory);

})();