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
		let content2 = Array.prototype.find.call(conPar.children, item => item.tagName === "SPAN");
		field.textContent = `${content2.textContent}: ${content1}`;
		field.value = this.value;
	};
	Array.prototype.forEach.call(currentValues, item => item.addEventListener('click',showContent));
};


$(document).ready(function () {
	"use strict";
	$('.main-level').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		if($(this).hasClass('blur-active')) {
			$(this).removeClass('blur-active');
		}
	});
	$('.main-level').hover(function () {
		if($(this).hasClass('blur-active')) {
			$(this).removeClass('blur-active');
		}
	});
	fillGoalField({
		field:'.main-level > span',
		list: '.second-level-list > li',
		class: 'first-level-content'
	});


});

