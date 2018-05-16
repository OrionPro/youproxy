import common from '../../js/common';
//import '../../pages/proxi-by-country/proxi-by-country.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './proxi-by-country.sass';


import animate from '../../js/animate';
import App from '../../js/react';

const fillGoalField = function (obj) {
	"use strict";
	const field = document.querySelector(obj.field);
	const currentValues = document.querySelectorAll(obj.list);

	const showContent = function (e) {
		let content1 = this.textContent;
		let conPar = this.parentNode;

		e.preventDefault();
		e.stopPropagation();

		while (!conPar.classList.contains(obj.class)) {
			conPar = conPar.parentNode;
		};
		conPar.parentNode.parentNode.parentNode.classList.add('blur-active');
		if(window.matchMedia("(max-width: 992px)").matches) {
			conPar.parentNode.parentNode.parentNode.classList.remove('active');
			$(this).parents('.first-level').find('.first-level-content').removeClass('active');
			$(this).parents('.first-level').find('.second-level-list').css('display', 'none');
			$(this).parents('.first-level').find('.fa-angle-down').css('transform', 'rotate(0deg)');
		}
		let content2 = Array.prototype.find.call(conPar.children, item => item.tagName === "SPAN");
		field.textContent = `${content2.textContent}: ${content1}`;
		field.value = this.value;
	};
	Array.prototype.forEach.call(currentValues, item => item.addEventListener('click', showContent));
};


function chosseCurency(obj) {
	"use strict";
	const list = document.querySelectorAll(obj.list);
	const curType = document.querySelectorAll(obj.currType);
	const price = document.querySelectorAll(obj.price);
	let termin = document.querySelectorAll(obj.termin);

	let changeTermin = function () {
		let term = +this.textContent.replace(/\D/g, '');

		Array.prototype.forEach.call(price, item => {
			item.textContent = +item.textContent * term;
		})
	};


	let activeFunc = function () {
		let curCurrency;
		Array.prototype.forEach.call(list, item => item.classList.remove(obj.class));
		this.classList.add(obj.class);
		switch (this.textContent) {
			case 'UAH':
				curCurrency = 'грн';
				break;
			case 'RUB':
				curCurrency = 'руб';
				break;
			default:
				curCurrency = this.textContent.toLowerCase();
		}
		Array.prototype.forEach.call(curType, item => item.textContent = curCurrency);
	};

	// Array.prototype.forEach.call(list, item =>{
	// 	item.addEventListener('click',activeFunc);
	// });
	// Array.prototype.forEach.call(termin, item =>{
	// 	item.addEventListener('click',changeTermin);
	// });
}

function changeCurr(obj) {
	"use strict";
	const currButtons = document.querySelectorAll(obj.currButtons);
	const tableTr = document.querySelectorAll(obj.tableTr);


	let changeGoal = function () {

		let number = Array.prototype.indexOf.call(currButtons, this);

		Array.prototype.forEach.call(tableTr, (item, i) => {

			item.classList.remove(obj.class);

			i === number ? item.classList.add(obj.class) : null;

		});

	};

	Array.prototype.forEach.call(currButtons, item => {
		item.addEventListener('click', changeGoal);
	});
}
function multiMenu () {
	if (window.matchMedia("(max-width: 992px)").matches) {
		$(document).click(function (event) {
			if ($(event.target).closest(".main-level").length)
				return;
			$('.main-level').removeClass('active');
			$('.main-level').find('.first-level-content').removeClass('active');
			$('.main-level').find('.second-level-list').css('display', 'none');
			$('.main-level').find('.first-level-content .fa-angle-down').css('transform', 'rotate(0deg)');
			event.stopPropagation();
		});
		$('.main-level').on('click', function (event) {
			event.preventDefault();
			event.stopPropagation();
			if ($(this).hasClass('blur-active')) {
				$(this).removeClass('blur-active');
			}
			if ($(this).hasClass('active') && $(this).hasClass('main-level')) {
				$(this).addClass('blur-active');
				$(this).removeClass('active');
				$(this).find('.first-level-content').removeClass('active');
				$(this).find('.second-level-list').css('display', 'none');
			} else {
				$(this).addClass('active');
				$(this).removeClass('blur-active');
			}
		});
		$('.main-level .first-level-content').on('click', function (event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parents('.first-level').find('.fa-angle-down').css('transform', 'rotate(0deg)');
			if ($(this).hasClass('first-level-content') && !$(this).hasClass('active')) {
				$(this).parents('.main-level').find('.first-level-content').removeClass('active');
				$(this).parents('.main-level').find('.second-level-list').css('display', 'none');
				$(this).addClass('active');
				$(this).find('.second-level-list').css('display', 'block');
				$(this).find('.fa-angle-down').css('transform', 'rotate(180deg)');
			} else {
				$(this).removeClass('active');
				$(this).find('.second-level-list').css('display', 'none');
				$(this).find('.fa-angle-down').css('transform', 'rotate(0deg)');
			}
		});
	}

	if (window.matchMedia("(min-width: 993px)").matches) {
		$('.main-level').hover(function () {

			if ($(this).hasClass('blur-active')) {
				$(this).removeClass('blur-active');
			}
			if ($(this).hasClass('active') && $(this).hasClass('main-level')) {
				$(this).addClass('blur-active');
				$(this).removeClass('active');
				$(this).find('.first-level-content').removeClass('active');
				$(this).find('.second-level-list').css('display', 'none');
			} else {
				$(this).addClass('active');
				$(this).removeClass('blur-active');
			}
		});
		$('.main-level .first-level-content').hover(function () {

			$(this).parents('.first-level').find('.fa-angle-down').css('transform', 'rotate(0deg)');
			if ($(this).hasClass('first-level-content') && !$(this).hasClass('active')) {
				$(this).parents('.main-level').find('.first-level-content').removeClass('active');
				$(this).parents('.main-level').find('.second-level-list').css('display', 'none');
				$(this).addClass('active');
				$(this).find('.second-level-list').css('display', 'block');
				$(this).find('.fa-angle-down').css('transform', 'rotate(180deg)');
			} else {
				$(this).removeClass('active');
				$(this).find('.second-level-list').css('display', 'none');
				$(this).find('.fa-angle-down').css('transform', 'rotate(0deg)');
			}
		});
	}
}
$(window).resize(function () {
	multiMenu();
});
$(document).ready(function () {

	multiMenu();
	"use strict";
	fillGoalField({
		field: '.main-level > span',
		list: '.second-level-list > li',
		class: 'first-level-content'
	});

	// chosseCurency({
	// 	class: 'cur-act',
	// 	list: '.currency-menu > ul > li',
	// 	currType:'.cur-curency',
	// 	price: '.pcc-price > .price',
	// 	termin: '.termin > li'
	// });


	document.body.clientWidth < 767 ? changeCurr({
		currButtons: '.cg_drop > li',
		tableTr: '.main_table tr.pak',
		class: 'active_tr'
	}) : null;


});
