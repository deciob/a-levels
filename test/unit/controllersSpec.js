'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('aLevelsApp'));
  var scope, ctrl, $httpBackend;

  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;


    $httpBackend.when('GET', 'data/a_levels_regional_urban.csv').
        respond("title,type,North East,North West,Yorkshire and the Humber,East Midlands,West Midlands,East,London,South East,South West\n \
                 All Level 3 qualifications - Average Point Score per student,urban,679.4,737.4,711.2,677.4,680.1,705.8,682.2,726.3,698.5");
    $httpBackend.when('GET', 'data/regions_england_wgs84.topo.json').
        respond({"type":"Topology","objects":{}});

    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {$scope: scope});
  }));


  it('should a controller called "MainCtrl"', inject(function($controller) {
    //spec body
    var MainCtrl = $controller('MainCtrl', { $scope: {} });
    expect(MainCtrl).toBeDefined();
  }));

  it('should parse csv data fetched from xhr', function() {
    expect(scope.data.geom).toBeUndefined();
    expect(scope.data.thematic).toBeUndefined();
    $httpBackend.flush();

    expect(scope.data.thematic.urban[0].north_east).toEqual(679.4);
  });

});
