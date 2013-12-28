var BAR = new Bar('basic');

function Bar(nm) {
  this.name = nm;
  this.initialize = function (nm) {
    this.name = nm;
  }
}
