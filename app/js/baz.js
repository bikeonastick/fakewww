
var BAZ = new Baz('basic');

function Baz(nm) {
  this.name = nm;
  this.initialize = init;
  function init(nm) {
    this.name = nm;
  }
}
