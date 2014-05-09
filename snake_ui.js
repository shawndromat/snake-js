(function(root){
  var S = root.S = (root.S || {});
  var Board = S.Board;
  var View = S.View = function ($el) {
    this.$el = $el;
  }

  View.prototype.start = function () {
    this.board = new Board(40,25);
    $el.on('keydown', function() {

    })
  }


}(this));