'use strict';

const searchButton = document.querySelector('#header .btn__search'),
    searchBox = document.querySelector('.search'),
    searchInput = searchBox.querySelector('.search__top input'),
    deleteSearchBtn = searchBox.querySelector('.search__top .btn__delete'),
    closeSearchBtn = searchBox.querySelector('.btn__close');

searchButton.addEventListener('click', () => searchBox.classList.add('search--active'));
closeSearchBtn.addEventListener('click', () => searchBox.classList.remove('search--active'));

searchInput.addEventListener('focus', () => {
    console.log('focusin')
    deleteSearchBtn.style.display = 'block';
})
searchInput.addEventListener('blur', () => {
    console.log('focusout')
    deleteSearchBtn.style.display = 'none';
})

