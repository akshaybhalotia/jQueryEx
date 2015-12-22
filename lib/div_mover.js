var DivMover = function () {

  var container = $('.container'), target = $('.target');

  function moveLeft () {
    if (target.position().left > 0) {
      target.css({
        'left': (target.position().left+target.width()/2-container.width()/100)+"px"
      });
    }
  }

  function moveRight () {
    if (target.position().left < container.width()-target.width()) {
      target.css({
        'left': (target.position().left+target.width()/2+container.width()/100)+"px"
      });
    }
  }

  function moveUp () {
    if (target.position().top > 0) {
      target.css({
        'top': (target.position().top+target.height()/2-container.height()/100)+"px"
      });
    }
  }

  function moveDown () {
    if (target.position().top < container.height()-target.height()) {
      target.css({
        'top': (target.position().top+target.height()/2+container.height()/100)+"px"
      });
    }
  }

  return {
    moveLeft: moveLeft,
    moveRight: moveRight,
    moveUp: moveUp,
    moveDown: moveDown
  };
}