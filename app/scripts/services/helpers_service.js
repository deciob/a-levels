'use strict'

app.service('slugifyNameService', function() {

  this.slugify = function(name) {
    return name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
  }
    
});

app.service('approxHeightMapRatio', function() {

  this.ratio = function(w, h, wElems, hElems) {
    if(w/wElems > h/hElems) {
      return
    }
     name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
  }
    
});