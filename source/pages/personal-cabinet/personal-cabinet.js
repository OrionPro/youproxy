import common from '../../js/common';
//import '../../pages/personal-cabinet/personal-cabinet.pug'; //это для обновления страницы при hotreload - при npm build убрать
//import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './personal-cabinet.sass';

import animate from '../../js/animate';


function tabs(obj) {
	const buttons = document.querySelectorAll(obj.btn);
	const bodyTabs = document.querySelectorAll(obj.tabsBody);

	let func = function(){
		"use strict";
		for( let i = buttons.length; i--; ){
			buttons[i].classList.remove(obj.classBtn);
			bodyTabs[i].classList.remove(obj.classBody);
		}
		this.classList.add(obj.classBtn);
		let item = [].indexOf.call(buttons,this);
		bodyTabs[item].classList.add(obj.classBody)
	};

	[].forEach.call(buttons,item => item.addEventListener('click',func));

}

const checked = (function(){
	"use strict";
	let value = 0;
	let arrInput = [];
	let arrLi = [];
	let result = {
		paymentType:'',
		renewalPeriod:'',
		idArr:[]
	};
	return function (obj) {
		const inputs = document.querySelectorAll(obj.input),
			chosseBtn = document.querySelector(obj.chosseAll),
			proxiLength = document.querySelector(obj.count),
			ul = document.querySelector(obj.list),
			finalValue = document.querySelector(obj.value),
			paymentType = document.querySelector(obj.payment),
			renewalPeriod = document.querySelector(obj.renewal),
			exit = document.querySelector(obj.exit),
			exitBtn = document.querySelector(obj.exitBtn),
			findParent = function(elem,tag,arr){
				let parent = elem.parentNode;
				while (parent.tagName !== tag) {
					parent = parent.parentNode;
				}
			 	if(arr) {
					arr.push(elem);
				let childrenText = parent.children[0].textContent;
					return childrenText;
				}
					return parent;
			},
			exitFunction = function(){
				result.paymentType = paymentType.textContent;
				result.renewalPeriod = renewalPeriod.textContent;
				result.idArr = arrInput.map(item => item.id);
				exit.value = JSON.stringify(result);
				console.log(exit.value);
			},
			counter = function(){
				// value = 0;
				// Array.prototype.forEach.call(arrInput, item => {
				// 	value +=  +item.value;
				// });
				// finalValue.textContent = value;
				proxiLength.textContent = arrLi.length;

			},
			removeLi = function () {
				chosseBtn.checked = false;
				let delLi = [].indexOf.call(arrLi,findParent(this,'LI'));
				arrLi.splice(delLi,1);
				arrInput.splice(delLi,1)[0].checked = false;
				ul.removeChild(findParent(this,'LI'));
				counter();
			},
			addItems = function(content){
				let li = document.createElement('li'),
					i = document.createElement('i');
				i.className = 'fa fa-window-close';
				i.addEventListener('click', removeLi);
				let span = document.createElement('span');
				span.className = 'chossen-id';
				span.textContent = content;
				li.appendChild(i);
				li.appendChild(span);
				arrLi.push(li);
				[].forEach.call(arrLi, item => ul.appendChild(item));
				counter();
			},
			removeItems = function (that) {
				chosseBtn.checked = false;
				let delLi = [].indexOf.call(arrInput,that);
				arrInput = [].filter.call(arrInput,item => item !== that);
				ul.removeChild(arrLi[delLi]);
				arrLi.splice(delLi,1);
				counter();
			},
			currInput = function (ev,arr) {
				// ev.preventDefault();
			if(arr) {
			Array.prototype.forEach.call(arr, item =>{
				if (item.checked) {
					addItems(findParent(item,'TR',arrInput));
				} else {
					removeItems(item);
				}
			});
			}else{
				if (this.checked) {
					addItems(findParent(this,'TR',arrInput));
				} else {
					removeItems(this);
				}
			}
		},
			chosseAll = function(){
				if(this.checked) {
					if(ul.children.length){
						let length = ul.children.length;
						for(let i = length; i--; ){
							ul.removeChild(ul.children[i]);
						}
					}
					arrInput = [];
				 	arrLi = [];
					[].forEach.call(inputs, item => item.checked = true);
					currInput('change',inputs);
				}else{
					[].forEach.call(inputs, item => item.checked = false);
					currInput('change',inputs);
				}
			};

		[].forEach.call(inputs, item => item.addEventListener('change', currInput));
		chosseBtn.addEventListener('change',chosseAll );
	//	exitBtn.addEventListener('click',exitFunction);

		proxiLength.textContent = arrLi.length ? arrLi.length : 0;
		finalValue.textContent = value;

	}}());


$(document).ready(function () {
	"use strict";

	tabs({
		btn:'.pa-tabs-menu > .proxi-btn',
		tabsBody:'.tabs-body',
		classBody: 'active-body',
		classBtn:'active-btn'
	});
	checked({
		input: 'table tr td input[type="checkbox"]',
		list: '.choosen-proxi-list > ul',
		chosseAll: '#chosen-all',
		count: '.items-length',
		value:'.final-value',
		exit: '.exit-point',
		renewal: '.renewal-period',
		payment:'.payment-type',
		exitBtn: '.exit-btn'
	});

});