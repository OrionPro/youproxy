import common from '../../js/common';
import '../../pages/purchase_by_the_piece/purchase_by_the_piece.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './purchase_by_the_piece.sass';

import animate from '../../js/animate';



const fillGoalField = function(obj){
	"use strict";
	const field = document.querySelector(obj.field);
	const currentValues = document.querySelectorAll(obj.list);

	const showContent = function (e) {
		let content1 = this.textContent;
		let conPar = this.parentNode;

		e.preventDefault();
		e.stopPropagation();

		while(!conPar.classList.contains(obj.class)){
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
	Array.prototype.forEach.call(currentValues, item => item.addEventListener('click',showContent));
};
function multiMenu() {
	if(window.matchMedia("(max-width: 992px)").matches) {
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
	"use strict";

	multiMenu();
	fillGoalField({
		field:'.main-level > span',
		list: '.second-level-list > li',
		class: 'first-level-content'
	});


});

