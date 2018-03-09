require("../libs/libs").jqueryui();
require("../libs/libs").matchMedia();
require("../libs/libs").waypoint();
require("../libs/libs").Animate_css();
require("../libs/libs").animate_modal_js();
require("../libs/libs").magnific_popup();
require("../libs/libs").tooltipster_follower();
require("../libs/libs").tooltipster();
require("../libs/libs").jqueryValidation();
require("../libs/libs").select2();
require("../libs/libs").input_mask();
require("../libs/libs").sticky();
require("../libs/libs").owl_carousel();
require("../libs/libs").greenSock();
require("../libs/libs").DrawSVG();
import validation from '../js/validation';
import modal from '../js/modal';

import '../sass/main.sass';
import functions from '../js/_functions.js';


export default class accordionBehavior{
	constructor(obj){
		this.btn = document.querySelectorAll(obj.btn);
		this.className = obj.className;
		this.addListener = this.addListener.bind(this);
		this.addListener();
	}
	addListener(){
		for(let i = this.btn.length;i--;){
			this.btn[i].addEventListener('click',() => {
				$(this.btn[i].nextElementSibling).slideToggle('slow');
				let arrow = this.findArrow(this.btn[i]);
				if(arrow){
					arrow.classList.toggle(this.className);
				}
			});
		}
	}
	// 	this.btn.forEach( item =>{
	// 		item.addEventListener('click',() => {
	// 			$(item.nextElementSibling).slideToggle('slow');
	// 			let arrow = this.findArrow(item);
	// 			if(arrow){
	// 				arrow.classList.toggle(this.className);
	// 			}
	// 		});
	// 	});
	// }

	findArrow(i){
	let arrow = [...i.children].filter(item => item.classList.contains('fa-angle-down'));
		return arrow[0];
	}
}

$(document).ready( function() {




class ModalBehavior{
	constructor(obj) {
		this.btnOpen = this.findBtnOpen(obj.btnOpen) ? document.querySelectorAll(obj.btnOpen)[1] : document.querySelectorAll(obj.btnOpen)[0];
		this.btnClose =  document.querySelector(obj.btnClose);
		this.target = document.querySelector(obj.target);
		this.typeOfDisplay = obj.typeOfDisplay || 'flex';
		this.className = obj.className;
		this.overlay = this.findOverlay();
		this.addListeners = this.addListeners.bind(this);
		this.findOverlay = this.findOverlay.bind(this);
		this.findBtnOpen = this.findBtnOpen.bind(this);
		this.addListeners();
	}
	addListeners(){
		this.btnOpen.addEventListener('click',()=>{
			this.openModal();
		});
		this.btnClose.addEventListener('click',()=> {
			this.closeModal();
		});
		this.overlay[0].addEventListener('click',()=>{this.closeModal()}
		);
	}
	openModal(){
		if(this.className){
			setTimeout(()=> {
				this.target.classList.add(this.className);
			},100);
		}
		this.target.style.display = this.typeOfDisplay;
		document.body.style.overflow = 'hidden';
	}
	findBtnOpen(btn){
		if(document.querySelectorAll(btn).length > 1){
			return true;
		}
		return false;
	}
	closeModal(){
		if(this.className){
			this.target.classList.remove(this.className);
		}
	setTimeout(() =>{
		this.target.style.display = ''
		document.body.style.overflow = '';
	},200);
	}

	findOverlay(){
		let elem = [].filter.call(this.target.children,item => {
				return item.className === 'overlay';
			});
		return elem;
	}
}

const openModalIndex = new ModalBehavior({
	btnOpen: '.main-menu-burger',
	btnClose: '.modal-menu-content > .modal-menu-close',
	target: '.modal-menu',
	className:'class-opacity'
	});

// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		const ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}
	if (get_name_browser() == "Safari") {
		console.log("Это Сафари");
	}
	if (get_name_browser() == "Google Chrome") {
		console.log("Это Хром");
	}
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });

	//  Активация слайдера
	// $(".owl-carousel").owlCarousel({
	//     loop: true,
	//     items: 1,
	//     dots: true
	// });

	// Кастомные кнопки управления слайдером
	// var owl = $('.owl-carousel');
	// owl.owlCarousel();
	// // Go to the next item
	// $('.customNextBtn').click(function() {
	//     owl.trigger('next.owl.carousel', [700]);
	// });
	// // Go to the previous item
	// $('.customPrevBtn').click(function() {
	//     // With optional speed parameter
	//     // Parameters has to be in square bracket '[]'
	//     owl.trigger('prev.owl.carousel', [700]);
	// });

	//анимация logo_svg
	var box = document.querySelectorAll("#logo > g"),
		box2 = document.querySelectorAll("#logo-index > g");
	var tl = new TimelineMax({delay:0.5, repeat:99999, repeatDelay:3, onComplete:restart});

	if(box2.length){
		tl.staggerFrom(box2, 0.3, {opacity:0,  yoyo:true, ease:Linear.easeNone},0.3);
	}else{
		tl.staggerFrom(box, 0.3, {opacity:0,  yoyo:true, ease:Linear.easeNone},0.3);
	}


	function restart() {
		TweenLite.to(restart, 0.4, {autoAlpha:1})
	}

});

$(window).resize(function() {

});

$(window).scroll(function() {

});