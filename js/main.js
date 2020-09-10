'use strict';

function getMonthDate() {
  const monthYear = document.querySelector('.section__title-month'),
    dates = document.querySelectorAll('.whats-on__calendar .lst-tab__item'),
    thisWeekDate = document.querySelectorAll('.whats-on__calendar-date');
  
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let week = today.getDay();
  
  let thisWeek = [];
  let monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // 현재 월 print
  monthYear.innerHTML = `${monthEng[month]} ${year}`;
  
  for(let i = 1; i < 8; i++) {
    let resultDay = new Date(year, month, date + (i - week));
    let dd = resultDay.getDate();
    //console.log(resultDay);
    
    dd = String(dd).length === 1 ? '0' + dd : dd;
    thisWeek[i-1] = String(dd);
  }

  // 현재 주간 날짜 print
  for(let i = 0; i < thisWeek.length; i++) {
    thisWeekDate[i].innerHTML = thisWeek[i];
  }
  
  // today 표기
  dates[week-1].classList.add('today');

}
getMonthDate();


