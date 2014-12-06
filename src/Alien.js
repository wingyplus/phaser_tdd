function Alien(game, position, name) {
  Phaser.Sprite.call(this, game, position.x, position.y, name, 0);
}

Alien.prototype = Object.create(Phaser.Sprite.prototype);

Alien.prototype.moveLeft = function() {
  this.body.velocity.x = -200;
};

Alien.prototype.moveRight = function() {
  this.body.velocity.x = 200;
};

Alien.prototype.doNotMove = function() {
  this.body.velocity.x = 0;
};
