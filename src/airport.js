var Airport = function(capacity) {
  this.planes= [];
  this.capacity= capacity;
  this.land= function(plane) {
    this.planes.push(plane);
  };
};


// var airport = new Airport();
