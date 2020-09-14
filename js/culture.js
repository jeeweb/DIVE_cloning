'use strict';

const whatsOn = document.querySelector('.whats-on'),
    cultureTab = whatsOn.querySelector('.lst-tab.culture__sort'),
    cultureTabBtn = cultureTab.querySelectorAll('.lst-tab__item .lst-tab__item-link'),
    cultureTabCnt = document.querySelectorAll('.lst-tab__cnt');

// 캘린더/일정 tab

for (let i = 0; i < cultureTabBtn.length; i++) {
    cultureTabBtn[i].addEventListener('click', (e) => {
        let tg = e.currentTarget;
        //let tabNum = cultureTabBtn.indexOf(tg);
        console.log(tg);
        for (let j = 0; j < cultureTabCnt.length; j++) {
            cultureTabCnt[j].style.display = "none";
        }
        for (let j = 0; j < cultureTabBtn.length; i++) {
            cultureTabBtn[j].className = cultureTabBtn[j].className.replace(' on', '');
        }
        
        cultureTabCnt[tabNum].style.display = 'block';
        
    });
    
}

