var EventHandler = function (divMover) {
  
  var eh = this;

  this.init = function () {
    $('body').keyup(function (event) {
      eh.keyDetector(event.keyCode);
    });
  };

  this.keyDetector = function (keyCode) {
    switch(keyCode) {
      case 37:
      case 65:divMover.moveLeft();
              break;
      case 38:
      case 87:divMover.moveUp();
              break;
      case 39:
      case 68:divMover.moveRight();
              break;
      case 40:
      case 83:divMover.moveDown();
              break;
    }
  };
}

$(document).ready(function () {
  var divMover = DivMover();
  var eventHandler = new EventHandler(divMover);
  eventHandler.init(); 
});