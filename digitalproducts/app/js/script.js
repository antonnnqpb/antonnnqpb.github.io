	// Works Owl Carousel
	$(function () {
		const owl = $(".works__carousel");
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			navText: [
				'<span class="arrow-owl arrow-left"></span>',
				'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: false
				},
				1180: {
					nav: true
				}
			}
		});
	});

	// OurTeam Owl Carousel
	$(function () {
		const owl = $(".our-team__carousel");
		owl.owlCarousel({
			items: 3,
			margin: 10,
			loop: true,
			dots: false,
			nav: true,
			autoplay: true,
			navText: [
				'<span class="arrow-owl arrow-left"></span>',
				'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					nav: false,
					items: 1
				},
				768: {
					nav: false,
					items: 2
				},
				1180: {
					nav: true,
					items: 3
				}
			}
		});
	});