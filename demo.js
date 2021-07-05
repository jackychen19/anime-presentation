// CSS Selector
anime({
  targets: '.css-selector-demo',
  translateX: 250
});

// DOM Node / Nodelist
var elements = document.querySelectorAll('.dom-node-demo');

anime({
  targets: elements,
  translateX: 270
});

// Javascript Object
var logEl = document.querySelector('.battery-log');

var battery = {
  charged: '0%',
  cycles: 120
}

anime({
  targets: battery,
  charged: '100%',
  cycles: 130,
  round: 1,
  easing: 'linear',
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});

// Array
var el = document.querySelector('.mixed-array-demo');

anime({
  targets: [el, '.line-2'],
  translateX: 100
});