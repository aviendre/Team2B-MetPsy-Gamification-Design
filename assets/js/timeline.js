const timelineElements = document.querySelectorAll('.timeline__event');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function checkTimelineElements() {
  timelineElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('timeline__event--in-view');
    }
  });
}

// Initially check if any elements are already in view on page load
checkTimelineElements();

// Check timeline elements on scroll
window.addEventListener('scroll', checkTimelineElements);