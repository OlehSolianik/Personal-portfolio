const websiteBanner = document.getElementById('site-banner');
const bannerTrigger = document.querySelector('.banner-trigger'); 
const hamburgerMenuButton = document.getElementById('menu-button');
const mobileNavbar = document.getElementById('mobile-nav');
const closeNavbarButton = document.getElementById('mobile-nav-close-btn');
const pageOverlay = document.querySelector('.overlay');

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
      if (currentScrollDirection === "up") {
        websiteBanner.style.transform = "translateY(0)";
      }
  }, scrollDuration);
  }
  else if (currentScrollDirection === "down" && currentScrollPosition >= triggerOffsetTop) {
     websiteBanner.style.transform = "translateY(-120%)";
  }
  lastScrollPosition = currentScrollPosition;
};

hamburgerMenuButton.onpointerdown = function() {
  mobileNavbar.style.display = "flex";
  pageOverlay.style.display = "block";
  pageOverlay.style.pointerEvents = "auto";
}
closeNavbarButton.onpointerdown = function() {
  mobileNavbar.style.display = "none";
  pageOverlay.style.display = "none";
  pageOverlay.style.pointerEvents = "none";
}

pageOverlay.onpointerdown = function() {
  mobileNavbar.style.display = "none";
  pageOverlay.style.display = "none";
  pageOverlay.style.pointerEvents = "none";
}