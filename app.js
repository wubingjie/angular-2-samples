(function() {
  var AppComponent = ng
    .Component({
      selector: 'my-app',
      template: '<h1>Hello World!</h1>'
    })
    .Class({
      constructor: function () { }
    });
  document.addEventListener('DOMContentLoaded', function() {
    ng.bootstrap(AppComponent);
  });
})();
