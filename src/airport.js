function Airport(capacity) {
  this.planes= [];
  this.capacity= capacity;
};

Airport.prototype.land = function (plane) {
  if (plane.isAirborne) {
    this.planes.push(plane);
  };
};

Airport.prototype.takeOff = function (plane) {
  if (!plane.isAirborne) {
    this.planes.pop(plane);
  };
};
