describe('Alien', function() {

  describe('create', function() {
    it('should call Phaser.Sprite', function() {
      spyOn(Phaser.Sprite, 'call');

      var alien = new Alien({}, {x:0, y:0}, 'alien');

      expect(Phaser.Sprite.call).toHaveBeenCalledWith(alien, {}, 0, 0, 'alien', 0);
    });
  });

  describe('action', function() {
    var alien;

    beforeEach(function() {
      spyOn(Phaser.Sprite, 'call');
      alien = new Alien({}, 0, 0, 'alien');
      alien.body = {
        velocity: { x: 0 }
      };
    });

    it('should move left', function() {
      alien.moveLeft();
      expect(alien.body.velocity.x).toEqual(-200);
    });

    it('should move right', function() {
      alien.moveRight();
      expect(alien.body.velocity.x).toEqual(200);
    });

    it("should don't move", function() {
      alien.doNotMove();
      expect(alien.body.velocity.x).toEqual(0);
    });
  });
});
