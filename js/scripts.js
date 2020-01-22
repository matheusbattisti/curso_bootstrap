$( document ).ready(function() {

  // Progress bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 60);
      circle.setText(value);

    }

  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 254);
      circle.setText(value);

    }

  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 32);
      circle.setText(value);

    }

  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 5423);
      circle.setText(value);

    }

  });

  // iniciando loaders quando a usuário chegar no elemento
  let dataAreaOffset = $('#data-area').offset();

  $(window).scroll(function (e) {

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500)) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
    }
  });

  // Parallax
  $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
  $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});

});