
 function Plane() {
  this.isAirborne = true;
  this.land = function() {
    this.isAirborne = false;
  };
  this.fly = function() {
    this.isAirborne = true; 
  };
};
