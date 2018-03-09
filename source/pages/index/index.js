import common from '../../js/common';
//import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';



import animate from '../../js/animate';

import {accordionBehavior} from '../../js/common'

$(document).ready(function () {
	console.log("obj");

	$('.owl-carousel').owlCarousel({
		center: true,
		items:  3,
		margin: 15,

		responsiveClass:true,
		loop: true,
		responsive:{
			0:{
				items: 1,
				center: false
			},
			600:{
				items: 1,
				center: false,
				autoplay:true,
			},
			1200:{
				items: 3,
				center: true,
				autoplay:true,
				autoplayTimeout:5000
			},

		}

	});


	//
	// const allGoals = new accordionBehavior({
	// 	btn: '.all-proxi-objectives',
	// 	body: '.all-proxi-objectives-list',
	// 	arrow: '.all-proxi-objectives-title > .fa-angle-down',
	// 	className: 'rotate'
	// });

	$(".sticky").sticky({
		topSpacing: 0
	});

	// пример анимации через библиотечку animat (но лучше анимировать через GSAP)
	$('.our_advantages h2').animated("fadeInUp");
	// инициализация tooltipster
	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".header_modal a").tooltipster({
			plugins: ['follower'],
			theme: 'tooltipster-shadow'
		});
		$(".header_logo a").tooltipster({
			theme: 'tooltipster-light'
		});
	}

	// инициализация select2
	$(".select2").select2({
		//minimumResultsForSearch: -1, // выключам поле ввода поиска
		tags: false,
		width: null
	});
	$(".select2-tags").select2({
		tags: true,
		placeholder: "Выберите один или несколько тегов",
		width: null // если null то будет шириной родителя
	});
	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");
});

$(window).resize(function () {

});

$(window).scroll(function () {



});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");