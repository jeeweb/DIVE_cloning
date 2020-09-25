'use strict';
const header = document.querySelector('#header');
let yOffset = 0; 
let winWidth ;

function checkWinWidth() {
	winWidth = window.innerWidth;
	if (winWidth <= 768) {
		header.classList.add('bg-white');
	} else {
		changeBgHeader();
	};
	console.log(winWidth);
}
// scroll 시 header 색상 변경
function changeBgHeader() {
    //console.log(yOffset)
    if (yOffset > 0) {
      header.classList.add('bg-white');
    } else if (yOffset === 0) {
      header.classList.remove('bg-white');
    }
	}

	window.addEventListener('load', checkWinWidth());
	window.onresize = checkWinWidth; 
  
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    //console.log(window.pageYOffset);
		if (winWidth > 768) changeBgHeader();
		
	})
	