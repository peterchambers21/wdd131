const reviews = [
    {
      text: "They treated my dog like royalty. Best vet experience ever!",
      author: "– Alex R."
    },
    {
      text: "Professional, kind, and truly cared for my horse. Highly recommend.",
      author: "– Maria L."
    },
    {
      text: "Fantastic staff and clean facilities. Five stars!",
      author: "– James K."
    }
  ];
  
  let reviewIndex = 0;
  
  function initReviewSlides() {
    const container = document.getElementById("review-container");
  
    reviews.forEach((review) => {
      const slide = document.createElement("div");
      slide.className = "reviewSlide fade";
      slide.innerHTML = `
        <p class="review-text">"${review.text}"</p>
        <p class="review-author">${review.author}</p>
      `;
      container.insertBefore(slide, container.querySelector(".review-prev")); // insert before the arrows
    });
  
    showReviewSlide(reviewIndex = 0); // Start at the first review
  }
  
  
  function showReviewSlide(n) {
    const slides = document.getElementsByClassName("reviewSlide");
    if (n >= slides.length) reviewIndex = 0;
    else if (n < 0) reviewIndex = slides.length - 1;
    else reviewIndex = n;
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[reviewIndex].style.display = "block";

    setInterval(() => changeReviewSlide(1), 10000); // 10 seconds
  }
  
  function changeReviewSlide(n) {
    showReviewSlide(reviewIndex + n);
  }
  
  
  document.addEventListener("DOMContentLoaded", initReviewSlides);
  