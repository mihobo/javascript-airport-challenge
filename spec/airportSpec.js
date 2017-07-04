describe("Airport", function() {

  beforeEach(function() {
    plane = new Plane();
  });

  it ("should land a plane", function() {
    var airport = new Airport();
    airport.land(plane);
    expect(airport.planes.length).toEqual(1);
    console.log(plane);
  });
});
