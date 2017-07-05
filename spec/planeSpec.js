
describe("plane", function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe("#isAirborne", function(){
    it("will return true when plane is in air", function(){
      expect(plane.isAirborne).toBeTruthy();
    });
  });

  describe("#land", function(){
    it("changes airborne status to false", function(){
      plane.land();
      expect(plane.isAirborne).toBeFalsy();
    });
  });

  describe("#fly", function(){
    it("changes airborne status to true", function(){
      plane.fly();
      expect(plane.isAirborne).toBeTruthy();
    });
  });

});
