// // 돔을 제어하려면 html 안에 이게 들어가 있어야 한다?

// const menu01 = document.querySelector(".master-piece . menu li:nth-child(1)");
// const menu02 = document.querySelector(".master-piece . menu li:nth-child(2)");
// const menu03 = document.querySelector(".master-piece . menu li:nth-child(3)");
// menu01. addEventListener("click", function(){
//     alert("menu01을 눌렀습니다.");
    
// });
// menu02. addEventListener("click", callFunc());

// //사용자가 이벤트를 발생 시켰을 때 나중에 호출된다. callback

// //함수는 항상 호출을 해야하는데, 위 함수는 선언만 돼있고 호출할 수 있는 방법이 없다.
// //사용자가 클릭을 했을 때 호출되는 것. 


// function callFunc(){
//     console.log("함수를 실행합니다.");
// }
// //callFunc();




//매개 변수 안에 함수가 또 들어갈 수 있다?

const header = document.querySelector(". header");
const menu = document.querySelectorAll(".master-piece .menu li");
const gnbList = document.querySelectorAll(".gnb .list >li");
gnbList.forEach(function(item, idx) {
    item.addEventListener("mouseenter",function() {
        header.classList.add("on");
    });
        item.addEventListener("mouseleave",function(){
            header.classList.remove("on");
        });
});

function aa () {
    console.log(190910 + 19090);

}
//자바스크립트의 함수는 1급 객체이다.
//일급 객체 함수를 변수에 할당할 수 있다.
//다른 함수를 인자(argument)로 전달 받을 수 있다. 
//다른 함수의 결과로서 리턴 가능하다. 데이터 처럼 다룰 수 있다. 하나의 값으로 인식되는 것

bb();
aa();

//bb는 먼저 호출 되는데 
//aa는 호출 안됨.

function bb(){  //이름이 없는 함수만 화살표를 달 수 있다. 이름이 있으면 안됨. 익명 함수에만 쓸 수 있다!
                //화살표 함수는 익명 함수에만!
    console.log("함수 선언식입니다.");
}
//ex. aa 라는 함수가 있다. 
const aa = function(){
     console.log("함수 표현식입니다.");
 };




const sum = function(a,b) { //익명이라서 (a,b)=> 이렇게 가능
    return a+b;             // 그리고 한줄이면 중괄호 생략 가능, return 생략 가능
}             
                            // 즉, const sum = (a,b) => a+b;
                            //     console.log(sum(100,100));
                            //     이렇게도 표현 가능  


const double = num => num*2;
// prettier-ignore 써서 이렇게도 표현 가능
//매개변수 하나일때, 없거나 한개 이상일 땐 반드시 괄호 있어야함 num부분!


const contentsList = document.querySelectorAll(".master-piece .contensts li");

// 함수의 표현을 바꿨는데, =>이걸 화살표 함수라고 부른다. 화살표 대신에 function 쓰면 같은거? fat arrow function
// 자바의 람다랑 같은건데 자바에서는 -> 이렇게 쓴다
menu.forEach( (item,idx) => {
    item.addEventListener("mouseenter", () => {
        cpmtentsList.forEach(function (item02, idx02) {
            item02.classList.remove("on");
        });

        const target = document.querySelector(`.master-piece .contents li:nth-child(${idx +1})`); 
        console.log(target);
        target.classList.add("on");
    });
    item.addEventListener("mouseleave", ()  => {
        contentsList.forEach((item02,idx02) =>{
            item02.classList.remove("on");
        });
    });
        // console.log(idx + "번째 입니다.");
    });

//ㅎㅏㅁ수는 펑션이라는 키워드를 달아서 a 라는 함수를 만들었는데 
//부모를 제어할 때 자바스크립트를 써야 한다.

//진짜 배열은 아님. 그러므로 배열의 메서드는 쓸 수 없다.
// console. log(menu);
//유사배열
//console.log(menu);

for(let i=0;i<menu.length;i++){
    menu[i].addEvenListener("click",function(){
        alert(i+"번째 입니다.");
    });
}


const fruits = ["apple", "melon", "peach"];
