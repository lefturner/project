//Picure Slideshow code for photos.html file

//Sets the index at zero
var slideIndex = 0;
//Shows the slides
showSlides();


//For loop to start with the first picture and display each
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Changes image every 5 seconds
}
