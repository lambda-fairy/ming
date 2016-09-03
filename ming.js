function Ming(display, button) {
  this.number = 0;
  this.display = display;
  this.button = button;
  this.button.addEventListener('click', function (e) {
    this.increment();
    this.update();
  }.bind(this));
  this.update();
}

Ming.prototype.increment = function () {
  ++this.number;
};

Ming.prototype.update = function () {
  this.display.textContent = this.number;
};

document.addEventListener('DOMContentLoaded', function (e) {
  window.ming = new Ming(
    document.getElementById('display'),
    document.getElementById('button'));
});
