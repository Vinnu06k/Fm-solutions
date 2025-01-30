// Scroll left function
function scrollTop() {
    const productList = document.getElementById('productList');
    productList.scrollBy({ left: -300, behavior: 'smooth' });
}

// Scroll right function
function scrolldown() {
    const productList = document.getElementById('productList');
    productList.scrollBy({ left: 300, behavior: 'smooth' });
}


/*let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/