document.addEventListener('DOMContentLoaded', function() {
// Get the elements by their IDs
const about = document.getElementById('about');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image4 = document.getElementById("image4");



// Add click event listeners to each image
image1.addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.location.href = url;
});

image2.addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.location.href = url;
});

image4.addEventListener("click", function() {
    const url = this.getAttribute("data-url");
    window.location.href = url;
});
about.addEventListener('click', function() {
    const section = document.getElementById('footer');
    section.scrollIntoView({ behavior: 'smooth' });
  });
});