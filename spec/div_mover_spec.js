describe("A Div Mover", function() {

  var target, container, divMover;
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/';
    loadFixtures('fixtures.html');
    jasmine.getStyleFixtures().fixturesPath = 'base/spec/';
    loadStyleFixtures('fixtures.css');
    container = $('.container');
    target = $('.target');
    divMover = DivMover();
  });

  describe("#moveLeft", function () {

    it("moves target div left by 1vw", function () {
      divMover.moveLeft();

      expect(target.position().left).toBe(220);
    });

    it("does not move target div if target div is at the edge", function () {
      target.css({
        'left': '25px'
      });

      divMover.moveLeft();

      expect(target.position().left).toBe(0);
    });
  });

  describe("#moveRight", function () {

    it("moves target div right by 1vw", function () {
      divMover.moveRight();

      expect(target.position().left).toBe(230);
    });

    it("does not move target div if target div is at the edge", function () {
      target.css({
        'left': '475px'
      });

      divMover.moveRight();

      expect(target.position().left).toBe(450);
    });
  });

  describe("#moveUp", function () {

    it("moves target div up by 1vh", function () {
      divMover.moveUp();

      expect(target.position().top).toBe(220);
    });

    it("does not move target div if target div is at the edge", function () {
      target.css({
        'top': '25px'
      });

      divMover.moveUp();

      expect(target.position().top).toBe(0);
    });
  });

  describe("#moveDown", function () {

    it("moves target div down by 1vh", function () {
      divMover.moveDown();

      expect(target.position().top).toBe(230);
    });

    it("does not move target div if target div is at the edge", function () {
      target.css({
        'top': '475px'
      });

      divMover.moveDown();

      expect(target.position().top).toBe(450);
    });
  });
});