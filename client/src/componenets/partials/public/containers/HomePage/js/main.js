var Manshour = Manshour || {};
Manshour.global = Manshour.global || {};
Manshour.global.init = function () {
  try {
    $(document).on("click", '[href="#"]', function (e) {
      e.preventDefault();
    });
    window.rippler = $.ripple('[data-ripple="ripple"], .area', {
      debug: true,
      multi: true,
    });

    $(".ziehharmonika").ziehharmonika({
      collapsible: true,
      // prefix: "★"
    });

    $(".ziehharmonika h3:eq(0)").ziehharmonika("open", true);
  } catch (e) {
    console.log("Error on Manshour.global.init " + e);
  }
};

Manshour.slides = Manshour.slides || {};
Manshour.slides.init = () => {
  try {
    $(".sliders").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 6000,
      //autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      rtl: true,
      nav: true,
      dots: false,
    });

    $(".carousels").owlCarousel({
      loop: true,
      margin: 20,
      smartSpeed: 600,
      autoplay: true,
      autoplayTimeout: 5000,
      rtl: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        574: {
          items: 2,
        },
        767: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1600: {
          items: 6,
        },
      },
    });

    $(".teacher-carousel").owlCarousel({
      loop: true,
      margin: 40,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    $(".time-carousel").owlCarousel({
      loop: true,
      margin: 50,
      smartSpeed: 800,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    $(".ranking-carousel").owlCarousel({
      loop: true,
      margin: 25,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 6000,
      rtl: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      navText: [
        "<i class='fas fa-angle-right'></i>",
        "<i class='fas fa-angle-left'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
      },
    });
  } catch (e) {
    console.log("Error on Manshour.slides.init " + e);
  }
};

Manshour.menu = Manshour.menu || {};
Manshour.menu.init = function () {
  try {
    var openMenuBtn = document.getElementById("open-menu");
    var menuAside = document.querySelector("header .menu-aside");
    var headerOveral = document.querySelector("header .overal");

    openMenuBtn.addEventListener("click", function () {
      headerOveral.classList.add("show");
      menuAside.classList.add("show");
    });

    headerOveral.addEventListener("click", function () {
      headerOveral.classList.remove("show");
      menuAside.classList.remove("show");
    });

    // showDetailsBtn.addEventListener('click', function () {
    //   document.querySelector('main .widget .category-filter ul li ul').classList.toggle('show');
    // })

    // liMenu.on('click', function() {
    //   $('> ul', this).toggleClass('show');
    // })
  } catch (e) {
    console.log("Error on Manshour.menu.init " + e);
  }
};

Manshour.tab = Manshour.tab || {};
Manshour.tab.init = function () {
  try {
    var [tabs, tabsPanels] = [
      Array.from(document.querySelectorAll(".tabs li")),
      Array.from(document.querySelectorAll(".tabs-panel")),
    ];

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        var target = document.querySelector(`#${tab.dataset.target}`);
        removeActiveClass([tabs, tabsPanels]);
        tab.classList.add("active");
        target.classList.add("active");
      });
    });

    var removeActiveClass = (el) => {
      el.forEach((item) => {
        item
          .find((e) => e.classList.contains("active"))
          .classList.remove("active");
      });
    };
  } catch (e) {
    console.log("Error on Manshour.tab.init " + e);
  }
};

$(document).ready(function () {
  Manshour.global.init();
  Manshour.slides.init();
});
