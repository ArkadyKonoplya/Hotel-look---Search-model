function initSlider() {
	var $slider = $('.js-init-slider');
	if($slider.length) {
		$slider.owlCarousel({
			loop: false,
                  margin: 0,
                  nav: true,
                  navText: ['<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>', '<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>'],
                  dots: false,
                  items: 1,
                  responsiveClass: true,
                  navRewind: false,
                  onInitialized: function() {
                  	sliderInited = true;
                  },
                  responsive: {
                  	'1024': {
                              items: 3,
                              margin: 30
                  	},
                        '748': {
                              items: 3,
                              margin: 18
                        }
                  }
		});
	}
}

function bgLazyLoad() {
      var bLazy = new Blazy({
            selector: '.b-lazy',
            offset: 100
      });
}

$(document).on('ready', function(){
	initSlider();
      bgLazyLoad();
});