describe("An Event Handler", function () {
  
  var divMover, eventHandler;
  var body, target, container;
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/spec/';
    loadFixtures('fixtures.html');
    divMover = new DivMover();
    eventHandler = new EventHandler(divMover);
    body = $('body');
    container = $('.container');
    target = $('.target');
  });

  describe("#init", function () {
    
    it("adds 'keyup' event handler to container div", function () {
      spyOn(eventHandler, 'keyDetector');
      var e = $.Event('keyup', { keyCode: 37 });

      eventHandler.init();
      body.trigger(e);

      expect(eventHandler.keyDetector).toHaveBeenCalled();
    });
  });

  describe("#keyDetector", function () {
    
    it("detects which key was pressed,and moves in appropriate direction", function() {
      spyOn(divMover, 'moveLeft');

      eventHandler.keyDetector(37);

      expect(divMover.moveLeft).toHaveBeenCalled();
    });

    it("does not do anything if key is not a valid direction key", function() {
      spyOn(divMover, 'moveLeft');
      spyOn(divMover, 'moveRight');
      spyOn(divMover, 'moveUp');
      spyOn(divMover, 'moveDown');

      eventHandler.keyDetector(36);

      expect(divMover.moveLeft).not.toHaveBeenCalled();
      expect(divMover.moveRight).not.toHaveBeenCalled();
      expect(divMover.moveUp).not.toHaveBeenCalled();
      expect(divMover.moveDown).not.toHaveBeenCalled();
    });
  });
});