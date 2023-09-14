$(function(){
  $(window).on('load',function(){
      $('.loader').delay(500).fadeOut(500);
      $('.loader-bg').delay(800).fadeOut(700);
  });
  setTimeout(function(){
      $('.loader-bg').fadeOut(500);
  },5000);
});

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

function toggleHamburgerMenu() {
  const screenWidth = window.innerWidth;
  const hamburger = $('.hamburger');
  const globalMenuSp = $('.globalMenuSp');

  if (screenWidth <= 1080) {
    hamburger.show();
    if (hamburger.hasClass('active')) {
      globalMenuSp.addClass('active');
    } else {
      globalMenuSp.removeClass('active');
    }
  } else {
    hamburger.hide();
    globalMenuSp.removeClass('active');
  }
}

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        $('.globalMenuSp').addClass('active').css('transition', 'transform 0.7s ease-in-out');
      } else {
        $('.globalMenuSp').removeClass('active').css('transition', 'transform 0.7s ease-in-out');
      }
    });
  });

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);

      $('.hamburger').removeClass('active');
      $('.globalMenuSp').removeClass('active').css('transition', 'transform 0.7s ease-in-out');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const h2Elements = document.querySelectorAll('h2');

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    h2Elements.forEach(function(h2Element) {
      const elementRect = h2Element.getBoundingClientRect();
      const elementTop = elementRect.top;

      if (elementTop <= windowHeight * 0.7) {
        h2Element.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const slideDescriptions = document.querySelectorAll('.slide-description');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;

function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#660000' : '#e5c7a8';
  }
}

function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}

function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}

function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});

prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});

indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});

updateListBackground();
startAutoPlay();
