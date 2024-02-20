document.addEventListener('DOMContentLoaded', function() {
const about = document.getElementById('about');
const imageContainer1 = document.getElementById('imageContainer1');
const imageContainer2 = document.getElementById('imageContainer2');
const imageContainer3 = document.getElementById('imageContainer3');
const imageContainer4 = document.getElementById('imageContainer4');
const imageContainer5 = document.getElementById('imageContainer5');
const imageContainer6 = document.getElementById('imageContainer6');
const imageContainer7 = document.getElementById('imageContainer7');
const imageContainer8 = document.getElementById('imageContainer8');

about.addEventListener('click', function() {
    const section = document.getElementById('footer');
    section.scrollIntoView({ behavior: 'smooth' });
  });
  imageContainer1.addEventListener('click', function() {
    const section = document.getElementById('lip_sec');
    section.scrollIntoView({ behavior: 'smooth' });
  });

  imageContainer2.addEventListener('click', function() {
    const section = document.getElementById('foundation_sec');
    section.scrollIntoView({ behavior: 'smooth' });
  });

  imageContainer3.addEventListener('click', function() {
      const section = document.getElementById('eyeshadow_sec');
      section.scrollIntoView({ behavior: 'smooth' });
    });

    imageContainer4.addEventListener('click', function() {
      const section = document.getElementById('eyeliner_sec');
      section.scrollIntoView({ behavior: 'smooth' });
    });

    imageContainer5.addEventListener('click', function() {
        const section = document.getElementById('blush_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });

      imageContainer6.addEventListener('click', function() {
        const section = document.getElementById('compact_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });

      imageContainer7.addEventListener('click', function() {
        const section = document.getElementById('faceprimer_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });

      imageContainer8.addEventListener('click', function() {
        const section = document.getElementById('nailpolish_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });

});