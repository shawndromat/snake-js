(function(root){
  var S = root.S = (root.S || {});
  var Snake = S.Snake;
  var Coord = S.Coord;

  var Board = S.Board = function (dimX, dimY) {
    this.dimX = dimX;
    this.dimY = dimY;
    this.snake = new Snake();
  }

  Board.prototype.render = function () {
    var masterString = "";
    for (var y = 0; y < this.dimY; y++) {
      for(var x = 0; x < this.dimX; x++) {
        console.log("hi");
        masterString += this.findMark(x,y);
      }
      masterString += "<br>";
    }
    console.log(masterString);
    $("#board").html(masterString);
  }

  Board.prototype.findMark = function (x, y) {
    for(var s = 0; s < this.snake.segments.length; s++) {
      if ((this.snake.segments[s].x === x) && (this.snake.segments[s].y === y)) {
        return ' # ';
      }
    }
    return ' * ';
  }


}(this));