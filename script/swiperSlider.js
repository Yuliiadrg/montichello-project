$(document).ready(function () {
    $('.swiper-hero').slick({
      vertical: true,
      arrows: false,
      dots: true,
      items: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 8000,
      infinity: true,
      adaptiveHeight: true
    });
  });
  
  
  $(document).ready(function () {
    $('.slider-news').slick({
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      dots: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      infinity: true
  
    });
  });
  
  
  
  // let smoothLink1 = document.querySelector('.hero-arrow svg');
  // let smoothLink2 = document.querySelector('.nav-list-us');
  // let smoothLink3 = document.querySelector('.nav-list-projects');
  // let smoothLink4 = document.querySelector('.nav-list-news');
  // let smoothLink5 = document.querySelector('.nav-list-contact');
  
  // let projectsSection1 = document.querySelector('.projects');
  // let projectsSection2 = document.querySelector('.gallery');
  // let projectsSection3 = document.querySelector('.news');
  // let projectsSection4 = document.querySelector('.footer');
  
  // smoothLink1.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsSection1.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // });
  
  // smoothLink2.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsSection1.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // });
  
  // smoothLink3.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsSection2.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // });
  
  // smoothLink4.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsSection3.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // });
  
  // smoothLink5.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsSection4.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // });
  
  const smoothLinks = [{
      link: '.hero-arrow svg',
      section: '.projects'
    },
    {
      link: '.nav-list-us',
      section: '.projects'
    },
    {
      link: '.nav-list-projects',
      section: '.gallery'
    },
    {
      link: '.nav-list-news',
      section: '.news'
    },
    {
      link: '.nav-list-contact',
      section: '.form-header'
    }
  ];
  
  smoothLinks.forEach(link => {
    const smoothLink = document.querySelector(link.link);
    const section = document.querySelector(link.section);
    smoothLink.addEventListener('click', e => {
      e.preventDefault();
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  
  
  
  
  
  let moveDirection;
  window.addEventListener('scroll', function (e) {
    moveDirection = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
  });
  
  let images = document.querySelectorAll('.projects-img');
  
  function parallax(event) {
  
    if (!moveDirection) {
      images[0].style.transform = `translate(20%, 35px)`;
      images[0].style.transition = "transform 1s";
      images[1].style.transform = `translate(-20%, 35px)`;
      images[1].style.transition = "transform 1s";
    } else {
      images[0].style.transform = `translate(0, 0)`;
      images[0].style.transition = "transform 1s";
      images[1].style.transform = `translate(0, 0)`;
      images[1].style.transition = "transform 1s";
    }
  }
  
  document.addEventListener('scroll', parallax);