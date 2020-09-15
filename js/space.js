'use strict';
const header = document.querySelector('#header');
let yOffset = 0; 

// scroll 시 header 색상 변경
function chageBgHeader() {
    //console.log(yOffset)
    if (yOffset > 0) {
      header.classList.add('bg-white');
    } else if (yOffset === 0) {
      header.classList.remove('bg-white');
    }
  }
  
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    //console.log(window.pageYOffset);
    chageBgHeader();
  })