describe("Airport", function() {
  var airport;
  var planeMock;

  beforeEach(function() {
    airport = new Airport(5);
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

  it ("should raise an error when a plane tries to land at full capacity", function() {
    for(var i = 0; i < 5; i++) {
      airport.land(planeMock);
    };
    expect(function() { airport.checkCapacity(); }).toThrow(new Error("Nahhh"));
  });

});
