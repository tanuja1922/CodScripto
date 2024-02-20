  document.addEventListener('DOMContentLoaded', function() {
    const imageContainer1 = document.getElementById('imageContainer1');
    const imageContainer2 = document.getElementById('imageContainer2');
    const imageContainer3 = document.getElementById('imageContainer3');
    const imageContainer4 = document.getElementById('imageContainer4');
    const about = document.getElementById('about');

    imageContainer1.addEventListener('click', function() {
      const section = document.getElementById('hairoil_sec');
      section.scrollIntoView({ behavior: 'smooth' });
    });
  
    imageContainer2.addEventListener('click', function() {
      const section = document.getElementById('conditioner_sec');
      section.scrollIntoView({ behavior: 'smooth' });
    });

    imageContainer3.addEventListener('click', function() {
        const section = document.getElementById('hairshampoo_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });

      imageContainer4.addEventListener('click', function() {
        const section = document.getElementById('haircolor_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });
      about.addEventListener('click', function() {
        const section = document.getElementById('footer');
        section.scrollIntoView({ behavior: 'smooth' });
      });
  });
  
  