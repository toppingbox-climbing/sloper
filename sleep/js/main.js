const gnbList = document.querySelectorAll(".gnb .list > li");
const header = document.querySelector(".header");
gnbList.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    header.classList.add("on");
  });
});
header.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});

new Swiper (".partner .brand", {
  slidePerView: "auto",
  speed: 3000,
  loop:true,
  loopedSlides: 5,
  autoplay:{
    delay : 0,
    disableOnInteraction: false,
  },
  });
