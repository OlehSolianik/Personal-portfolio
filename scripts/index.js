const websiteBanner = document.querySelector('.website-banner');
const bannerTrigger = document.querySelector('.banner-trigger'); 

let lastScrollPosition = window.scrollY;
let currentScrollDirection = null;
let scrollTimer = null;
const scrollDuration = 100; 

window.onscroll = function() {
  const currentScrollPosition = window.scrollY; 
  const changedScrollDirection = currentScrollPosition > lastScrollPosition ? "down" : "up";
  const triggerOffsetTop = bannerTrigger.offsetTop;
  console.log(triggerOffsetTop);

  if (changedScrollDirection !== currentScrollDirection) {
    currentScrollDirection = changedScrollDirection;
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      if (currentScrollDirection === "down") {
          websiteBanner.style.transform = "translateY(0)";
      } 
      else if (currentScrollDirection === "up") {
        websiteBanner.style.transform = "translateY(0)";
      }
  }, scrollDuration);
  }
  else if (currentScrollDirection === "down" && currentScrollPosition >= triggerOffsetTop) {
     websiteBanner.style.transform = "translateY(-100%)";
  }
  lastScrollPosition = currentScrollPosition;
};