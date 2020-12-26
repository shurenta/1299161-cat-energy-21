if(document.querySelector('.example__photo')) {
  var imageAfter = document.querySelector('.example__image-it-was');
  var imageBefore = document.querySelector('.example__image-after');

  var toogleBefore = document.querySelector('.toggle-controls__it-was-after--before');
  var toogleAfter = document.querySelector('.toggle-controls__it-was-after--after');
  var example = document.querySelector('.example');

  var controlsBar = document.querySelector('.toggle-controls__bar');
  toogleAfter.addEventListener('click', function() {
    if (imageBefore.classList.contains('example__image--invisible')) {
      imageBefore.classList.remove('example__image--invisible');
      controlsBar.classList.remove('toggle-controls__bar--before');
      controlsBar.classList.add('toggle-controls__bar--after');
      imageAfter.classList.add('example__image--invisible');
      example.classList.remove('example--after');
      example.classList.add('example--before');

    }
  });

  toogleBefore.addEventListener('click', function() {
    if (imageAfter.classList.contains('example__image--invisible')) {
      imageAfter.classList.remove('example__image--invisible');
      imageBefore.classList.add('example__image--invisible');
      controlsBar.classList.remove('toggle-controls__bar--after');
      controlsBar.classList.add('toggle-controls__bar--before');
      example.classList.remove('example--before');
      example.classList.add('example--after');
    }
  });
}
