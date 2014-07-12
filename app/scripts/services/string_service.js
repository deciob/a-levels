'use strict'

app.service('slugifyNameService', function() {

  this.slugify = function(name) {
    return name.replace(/ - /g, ' ').replace(/ /g, '_').toLowerCase();
  }
    
});