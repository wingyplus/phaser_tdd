function Alien() {
}

Alien.prototype.moveLeft = function() {
  this.body = {
    velocity: {
      x: -200
    }
  };
};

Alien.prototype.moveRight = function() {
  this.body = {
    velocity: {
      x: 200
    }
  };
};

Alien.prototype.doNotMove = function() {
  this.body = {
    velocity: {
      x: 0
    }
  };
};
