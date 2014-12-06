describe('Alien', function() {
  var alien;

  beforeEach(function() {
    alien = new Alien();
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
