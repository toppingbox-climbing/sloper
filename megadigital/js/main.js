Splitting();
AOS.init();

const header = document.querySelector(".header");
console.log(header);
//header.clalssList.add("on"); //속성이면서 개체이기도 함.
//사용자가 스크롤을 scoll을 해서 스크롤의 높이가 0보다 커지면 on을 단다.

window.addEventListener("scroll", () => {
  console.log(window.scrollY); //객체이기 때문에 속성과 메서드가 있을 것임
  const scrollY = window.scrollY;
  if(scrollY>0) {
    header.classList.add("on");
  }else {
    header.classList.remove("on");
  }
});

 gsap.from(".main-visual .slogan. char", {y:100, opacity:0, ease:"power 3", duration: 1, delay: 1, stagger: 0.02});


 new Swiper("banner .mask"),{
    slidesPerView: "auto", //auto는 내 마음대로 값 지정 가능
    spaceBetween:30,
    navigation: {
        prevE1:".banner .mask .btn-prev",
        nextE1:".banner .mask .btn-next",
    },
    pagination:{
        el:".banner .mask .pagination",
    },
 };


//window가 자바 스크립트의 가장 최상위 //사용자가 일으키는 이벤트를 매개변수로 받을 수 있어야 한다. 윈도우는 전체를 가리키는 것. 이벤트에 대한 정보가 필요하다. 매개변수를 설정한다. 내 맘대로 설정해도 됨. 여기서는 e, 이벤트 객체, 매개변수로 받을 수 있다. 스크롤의 높이값, 위치값을 알아야 하기 때문에.

//scrollY가 위치값 잡는 것임


new Swiper(".recruit .txt-box .rolling"); {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
  },
});