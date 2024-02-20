document.addEventListener('DOMContentLoaded', function() {
    const about = document.getElementById('about');
    const imageContainer1 = document.getElementById('imageContainer1');
    const imageContainer2 = document.getElementById('imageContainer2');
    const imageContainer3 = document.getElementById('imageContainer3');
    const imageContainer4 = document.getElementById('imageContainer4');
     
    about.addEventListener('click', function() {
        const section = document.getElementById('footer');
        section.scrollIntoView({ behavior: 'smooth' });
      });
      imageContainer1.addEventListener('click', function() {
        const section = document.getElementById('sunscreen_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });
    
      imageContainer2.addEventListener('click', function() {
        const section = document.getElementById('facemoisturizer_sec');
        section.scrollIntoView({ behavior: 'smooth' });
      });
    
      imageContainer3.addEventListener('click', function() {
          const section = document.getElementById('nightcream_sec');
          section.scrollIntoView({ behavior: 'smooth' });
        });
    
        imageContainer4.addEventListener('click', function() {
          const section = document.getElementById('toner_sec');
          section.scrollIntoView({ behavior: 'smooth' });
        });
    
    });