function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function fadeInOutEffect() {
    var elements = document.querySelectorAll(".fade-in-out");
    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fadeInOutEffect(); // Initial check
  });

  window.addEventListener("scroll", function () {
    fadeInOutEffect();
  });