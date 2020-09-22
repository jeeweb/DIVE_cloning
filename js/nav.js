'use strict';

const openNavBtn = document.querySelector('.btn-nav'),
	navMobile = document.querySelector('.nav-mobile'),
	closeNavBtn = navMobile.querySelector('.btn__close'),
	navMobileMenu = navMobile.querySelectorAll('.lst-gnb__item'),
	navMobileSub = navMobile.querySelectorAll('.lst-gnb-sub');

openNavBtn.addEventListener('click', () => navMobile.classList.add('nav-mobile--active'));

closeNavBtn.addEventListener('click', () => navMobile.classList.remove('nav-mobile--active'));

for (let i = 0; i < navMobileMenu.length; i++) {
	navMobileMenu[i].addEventListener('click', (e) => {
		let target = e.currentTarget;
		let navSub = target.querySelector('.lst-gnb-sub');
		if(navSub) target.classList.toggle('on');
		
	})

}