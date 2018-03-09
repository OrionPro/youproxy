import common from '../../js/common';
//import '../../pages/FAQ/FAQ.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './FAQ.sass';

import animate from '../../js/animate';

import accordionBehavior from '../../js/common'

$(document).ready(function () {
	"use strict";


	class effectTitle extends accordionBehavior{
		constructor(obj,className){
			super(obj);
			this.btn = document.querySelectorAll(obj.btn);
			this.addNewListeners.bind(this);
			this.addNewListeners();
			this.class = className;
		}

		addNewListeners(){
			for(let i = this.btn.length;i--;){
				this.btn[i].addEventListener('click',() => {
					this.btn[i].classList.toggle(this.class);
				});
			}
		}
	}

	const app = new effectTitle({
		btn: '.cqa-item-title',
		className: 'rotate'
	},'change-color');


});
