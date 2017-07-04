describe("Airport", function() {
  var airport;
  var plane;
  
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    spyOn(airport, 'planes');
    airport.planes = [plane];
  });
  
  it ("should land a plane", function() {
    spyOn(plane, 'onGround');
    plane.onGround = false;
    airport.land(plane);
    expect(airport.planes.length).toEqual(2);
  });
  
  it ("should allow a plane to take off", function() {
    airport.takeOff(plane);
    expect(airport.planes.length).toEqual(0);
  });
  
  
});
