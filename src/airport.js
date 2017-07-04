var Airport = function(capacity) {
  this.planes= [];
  this.capacity= capacity;
};

Airport.prototype.land = function (plane) {
  if (!plane.onGround) {
    this.planes.push(plane);
  };
};

Airport.prototype.takeOff = function (plane) {
  if (plane.onGround) {
    this.planes.pop(plane);
  };
};
