//1. computer li 2개중에 하나만 보이게 하기
//2. 밑에 human li에 이벤트 걸기
//3. computer li를 무작위 나오게 setInterval하기
//4. human li 클릭했을때 멈추게 하기. clearInterval
//5. 승패 확인하기

const computerList = document. querySelectorAll(".computer ul li");
const humanList = document. querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const li = document.createElement("li");
li.textContent = "W";
li.classList.add("win");
resultList.append(li);

// console.log("🚀 ~ file: main.js:8 ~ computerList:", computerList);
// document.createElement("li");
let computerChoice = 0;
const makeRandom = function () {
    computerList[0].style.display = "none";
    computerList[1].style.display = "none";
    computerList[2].style.display = "none";
    computerChoice = Math.floor(Math.random()* 3);
    computerList[computerChoice].style.display = "block";
// const computerChoice = Math.floor( Math.random()*3) ; //0~3
};
const computerIdx = setInterval(makeRandom,10);
makeRandom();
humanList.forEach((item,idx)=>{
    item.addEventListener("click", function(){
        clearInterval(computerIdx);
    // console.log(item);
// humanList[0].addEventListener("click", function(){
//     clearInterval(computerIdx);
    if(computerChoice===idx) {
        console.log("draw");
    }else if (computerChoice===0 && idx ===1) {
        console.log("win");
    }else if (computerChoice===1 && idx ===2) {
        console.log("win");
    }else if (computerChoice===2 && idx ===0) {
        console.log("win");
    }else {
        console.log("lose");
    }
});
});

const animals= ["lion", "dog", "rabbit"];
for (let i = 0; i < 3; i++) {
    console.log(animals[i]);

}
animals.forEach(function(item,num){
    console.log(idx + "===" + item);
});

//forEach는 순행
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);