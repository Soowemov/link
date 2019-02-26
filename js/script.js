$('.owl-carousel--sl').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots: true,
	navText: ["<div class='arrow-slider arrow-prev-slider'>", "<div class='arrow-slider arrow-next-slider'>"],
    responsive:{
        0:{
            items:1,
			dots: false
        },
        600:{
            items:1,
			dots: false
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel--hits').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots: false,
	navText: ["<div class='arrow-slider-hit arrow-prev-slider-hit'>", "<div class='arrow-slider-hit arrow-next-slider-hit'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel--review').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots: false,
	navText: ["<div class='arrow-slider-hit arrow-prev-slider-hit'>", "<div class='arrow-slider-hit arrow-next-slider-hit'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#menu-id').on('click', function(){
		$('.mb-menu--list').toggleClass('menu-open');
	});
	
$('#close-menu').on('click', function(){
	$('.mb-menu--list').toggleClass('menu-open');
	$('.mb-menu--list_second-lv').removeClass('menu-open');
});

$('.mb-menu--list_first-lv .mb-menu--list_first-lv-menu-one ul li a').on('click', function(){
	$('.mb-menu--list_second-lv').toggleClass('menu-open');
});
$('.arrow-mm.left').on('click', function(){
	$('.mb-menu--list_second-lv').removeClass('menu-open');
});

