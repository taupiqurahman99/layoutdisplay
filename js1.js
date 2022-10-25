
let slideIndex = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


let slideIndex1 = 1;
			showSlides1();
		
function showSlides1() {
				let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("dot1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 3000); // Change image every 2 seconds
}


let slideIndex2 = 1;
			showSlides2();
		
function showSlides2() {
				let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
}


let slideIndex3 = 1;
			showSlides3();
		
function showSlides3() {
				let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 3000); // Change image every 2 seconds
}

let slideIndex4 = 1;
			showSlides4();
		
function showSlides4() {
				let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots4 = document.getElementsByClassName("dot4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += " active";
  setTimeout(showSlides4, 3000); // Change image every 2 seconds
}


let slideIndex6 = 1;
showSlides6();

function showSlides6() {
					let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  let dots6 = document.getElementsByClassName("dot6");
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides6.length) {slideIndex6 = 1}    
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";  
  dots6[slideIndex6-1].className += " active";
  setTimeout(showSlides6, 3000); // Change image every 2 seconds
}