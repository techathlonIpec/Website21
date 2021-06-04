$(window).scroll(function() {
	var $centerImg = $('#center > img')
    , hT = $centerImg.offset().top
    , hH = $centerImg.outerHeight()
    , wH = $(window).height()
    , dH = $(document).height()
    , wS = $(this).scrollTop();
  
  if (wS > (hT+hH-wH)){
    $centerImg.addClass("parallaxin");
  } else {
    $centerImg.removeClass("parallaxin");
    $centerImg.css({
     'transform': 'translate(0,0)'
    });
  }
  
  $('#hero-text').css({
    'transform': 'translate(0, '+ -wS * 0.5 +'px)'
	});
  
  $('.parallaxin').css({
    'transform': 'translate(0, -'+ (wS + 1000 - dH)/4 +'%)'
	});
});


// Event Area
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
