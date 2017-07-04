describe("Airport", function() {
  
  it ("should land a plane", function() {
    var airport = new Airport();
    airport.land();
    expect(airport.planes.length).toEqual(1);
  });
});
