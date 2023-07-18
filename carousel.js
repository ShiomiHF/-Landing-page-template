const swiper = new Swiper(".slider1", {
  loop: true, //ループ
  slidesPerView: 1.4,
  centeredSlides: true,
  spaceBetween: 12,
  autoplay: {
    //自動再生
    delay: 4000,
  },
  pagination: {
    //ページネーション（ドット）
    el: ".swiper-pagination",
  },
  navigation: {
    //ナビゲーション（矢印）
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //小さい順に設定する
    // 599px以上の場合
    768: {
      slidesPerView: 1.6,
      spaceBetween: 40,
    },
    // 1024px以上の場合
    1024: {
      slidesPerView: 2.4,
      centeredSlides: true,
      spaceBetween: 60,
    },
  },
});

const swiperOuter = document.getElementById("swiper-outer");
const swiperSlides = document.getElementsByClassName("swiper-slide");
const breakPoint = 800;
let mySwiper;
let mySwiperBool;

window.addEventListener(
  "load",
  () => {
    if (breakPoint < window.innerWidth) {
      mySwiperBool = false;
    } else {
      createSwipter();
      mySwiperBool = true;
    }
  },
  false
);

window.addEventListener(
  "resize",
  () => {
    if (breakPoint < window.innerWidth && mySwiperBool) {
      mySwiper.destroy(false, true);
      mySwiperBool = false;
    } else if (breakPoint >= window.innerWidth && !mySwiperBool) {
      createSwipter();
      mySwiperBool = true;
    }
  },
  false
);

const createSwipter = () => {
  mySwiper = new Swiper(".slider2", {
    loop: true, //ループ
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 12,
    pagination: {
      //ページネーション（ドット）
      el: ".swiper-pagination",
    },
  });
};
// const swiperGrid = new Swiper(".slider2", {
//   loop: true, //ループ
//   slidesPerView: 1,
//   centeredSlides: true,
//   spaceBetween: 12,
//   pagination: {
//     //ページネーション（ドット）
//     el: ".swiper-pagination",
//   },
//   breakpoints: {
//     //小さい順に設定する
//     // 599px以上の場合
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//     // 1024px以上の場合
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 60,
//     },
//   },
// });
