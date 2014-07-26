'use strict';

(function() {

  function SlugifyNameService() {
    this.slugify = function(name) {
      return name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
    }
  }

  // TODO
  function ApproxHeightMapRatioService() {
    this.ratio = function(w, h, wElems, hElems) {
      if(w/wElems > h/hElems) {
        return;
      }
      name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
    }
  }

  angular
    .module('aLevelsApp')
    .service('SlugifyNameService', SlugifyNameService)
    .service('ApproxHeightMapRatio', ApproxHeightMapRatioService);

})();