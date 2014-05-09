(function(root){
  var S = root.S = (root.S || {});

  var Snake = S.Snake = function () {
    this.dir = 'S';
    this.segments = [new Coord(0,0)];

  }

  Snake.prototype.turn = function (dir){
    this.dir = dir;
  }

  Snake.prototype.move = function (dir){
    this.segments.pop();
    this.segments.unshift(this.segments[0].add(dir));
  }

  Snake.DIR = ["N","E","S","W"]

  var Coord = S.Coord = function (x,y) {
    this.x = x;
    this.y = y;
  }

  Coord.prototype.add = function (dir){
    switch(dir){
    case 'N':
      return new Coord(this.x + 0, this.y - 1);
      break;
    case 'E':
      return new Coord(this.x + 1, this.y - 0);
      break;
    case 'S':
      return new Coord(this.x + 0, this.y + 1);
      break;
    case 'W':
      return new Coord(this.x - 1, this.y - 0);
      break;
    default:
      console.log(":(");
    }
  }

}(this));