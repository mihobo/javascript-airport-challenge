describe("Airport", function() {
  var airport;
  var planeMock;

  beforeEach(function() {
    airport = new Airport(3);
    planeMock = jasmine.createSpyObj('plane', ['isAirborne'])
  });

  it ("should land a plane", function() {
    airport.land(planeMock);
    expect(airport.planes.length).toEqual(1);
  });

  it ("should allow a plane to take off", function() {
    airport.planes.push(planeMock);
    planeMock.isAirborne = false;
    airport.takeOff(planeMock);
    expect(airport.planes.length).toEqual(0);
  });


});
