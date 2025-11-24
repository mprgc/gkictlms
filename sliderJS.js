
let slideIndex = 0;
showSlides();

function showSlides(){
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  for(i=0;i<slides.length;i++){
    slides[i].classList.remove("active-slide");
  }
  for(i=0;i<dots.length;i++){
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if(slideIndex > slides.length){slideIndex = 1;}

  slides[slideIndex-1].classList.add("active-slide");
  dots[slideIndex-1].classList.add("active");

  setTimeout(showSlides, 5500); // 5.5 sec autoplay
}

