$(document).ready(function () {
  $(".watch__slider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    // centerPadding: "100px",
    slidesToShow: 1,
    variableWidth: true,
  });
});
let $status = $(".pagingInfo");
let $slickElement = $(".watch__slider");

$slickElement.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    let i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + "/" + slick.$dots[0].children.length);
  }
);
new Swiper(".how__container", {
  pagination: {
    el: ".how__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class = "' +
        totalClass +
        '"></span>'
      );
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  grabCursor: true,
  mousewheel: {
    sensitivity: 3,
  },
  autoHeight: true,
  effect: "flip",

  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});

new Swiper(".cars-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".cars-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class = "' +
        totalClass +
        '"></span>'
      );
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
  },
  autoHeight: true,
  slidesPerView: 4,
  // spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    555: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
new Swiper(".testimonials__container", {
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class = "' +
        totalClass +
        '"></span>'
      );
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: -28.024, lng: 140.887 },
    mapId: "f7aead4b1524e9dd",
  });

  const tourStops = [
    [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
    [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
    [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
    [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
    [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: {
        color: "#79E149",
      },
      optimized: false,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const checked = document.querySelector(".checked");
const wrraper = document.querySelector(".wrraper");
checked.addEventListener("click", color);
function color() {
  wrraper.classList.toggle("active");
}
