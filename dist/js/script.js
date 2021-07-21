$(document).ready(function () {
  $(".watch__slider").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    // centerPadding: "100px",
    slidesToShow: 5,
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
