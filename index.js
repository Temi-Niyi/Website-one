document.addEventListener("DOMContentLoaded", function() {
  const work1 = document.querySelector(".work1");
  const work2 = document.querySelector(".work2");
  const work3 = document.querySelector(".work3");
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const img3 = document.querySelector(".img3");
  
  function showImage(img) {
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      img.style.display = "block";
  }
  
  work1.addEventListener("mouseenter", function() {
      showImage(img1);
  });
  
  work2.addEventListener("mouseenter", function() {
      showImage(img2);
  });
  
  work3.addEventListener("mouseenter", function() {
      showImage(img3);
  });
  
  // Initially show img1
  showImage(img1);
});
