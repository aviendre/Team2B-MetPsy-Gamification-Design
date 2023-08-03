// Function to handle the intersection of the target element
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const reflectionDiv = document.querySelector(".reflection");
  
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust this threshold for the fade-in effect
    });
  
    // Observe the reflectionDiv for both fade-in and fade-out effects
    observer.observe(reflectionDiv);
  });

  // Function to handle the intersection of the target element
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const reflect2Div = document.querySelector(".reflect2");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Adjust this threshold for the fade-in effect
  });

  // Observe the reflectionDiv for both fade-in and fade-out effects
  observer.observe(reflect2Div);
});

  
  