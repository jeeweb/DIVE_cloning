'use strict';

const whatsOn = document.querySelector('.whats-on'),
    cultureTab = whatsOn.querySelector('.lst-tab.culture__sort'),
    cultureTabBtn = cultureTab.querySelectorAll('.lst-tab__item .lst-tab__item-link'),
    cultureTabCnt = document.querySelectorAll('.lst-tab__cnt');

const eventNow = whatsOn.querySelector('.monthly-lst__now');

// 캘린더/일정 tab

cultureTab.addEventListener('click', (e) => {
    let tg = e.target.parentNode;
    let tabNum;
    for(let i = 0; i < cultureTabBtn.length; i++) {
        if(cultureTabBtn[i] === tg) {
            tabNum = i;
        }

    }
    for (let i = 0; i < cultureTabCnt.length; i++) {
        cultureTabCnt[i].style.display = "none";
    }
    
    for (let i = 0; i < cultureTabBtn.length; i++) {
        cultureTabBtn[i].parentNode.classList.remove('on')
    }
    
    cultureTabBtn[tabNum].parentNode.classList.add('on');
    cultureTabCnt[tabNum].style.display = 'flex';
    
});


// 월요일 휴무 -> no program
function checkMonday() {
    let today = new Date();
    let week = today.getDay();
    
    if (week === 1) {
        eventNow.classList.add('none');
      } else {
        eventNow.className = 'monthly-lst__now';
      }
}
checkMonday();
