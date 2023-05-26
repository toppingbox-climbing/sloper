console.log("rock-paper-sciccors");
// document.querySelectorAll(".computer ul li");

const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const appendItems = function(className){
const appendItem = document. createElement("li");
appendItem.classList.add(className);
appendItem.textContent = className.substring(0, 1);
resultList.appendChild(appendItem);
};

// resultList.appendChild(`<li class="win"></li>`)
let computerChoice =0;
//배열이다. 눈으로 볼 땐  콘솔 로그를 찍어야 하는데 익스텐션에서 터보 콘솔 깔아줌
// console.log("🚀 ~ file: main.js:5 ~ computerList:", computerList);

const makeRandom = ()=>{
    computerList[0].style.display = "none";
    computerList[1].style.display = "none";
    computerList[2].style.display = "none";
    computerChoice = Math.floor(Math.random()*3);
    computerList[computerChoice].style.display = "block";
};
//console.log(10==10); //===세개는 타입이 같을때, ==는 그냥 같은거. 그래서 무조건 = 세개 쓰기//
let i = 0;
let gameIdx = 0;
humanList.forEach((item,idx)=> { //item = 객체, idx
    item.addEventListener("click", () => {
        i++;
        clearInterval(computerIdx);
        if (i >=3) {
            clearTimeout(gameIdx);
        }else {
        gameIdx = setTimeout(() => {
            console.log("재실행");
            const computerIdx = setInterval(makeRandom, 50);
        }, 1000);
        
        //setTimeout은 함수를 시간 이후에 ? 

        if(idx==computerChoice){
            //console.log("draw");
        }else if(idx===0 && computerChoice===1){
            console.log("lose");

        }else if(idx===1 && computerChoice===2){
            console.log("lose");

        }else if(idx===2 && computerChoice===0){
            console.log("lose");

        }else {
            console.log("win");
        }
        //console.log(idx);
        //console.log(computerChoice); //지역변수라서 쓸 수가 없다. 
    });
});

// humanList[0].addEventListener("click",()=>{
//     clearInterval(computerIdx);
// }) //사용자가 일으키는 이벤트를 받아주는



const computerIdx = setInterval(makeRandom,1000); 
//호출할 함수를 먼저 적고, 호출할 시간을 적어주면 그에 맞춰 호춝된다. 함수를 정의만 해야 한다. 
//setInterval과 대척점에 있는 것, clearInterval
makeRandom();

// computerList[0].style.display = "none"; //이렇게 하면 rock이 없어짐
// computerList[1].style.display = "none";
// computerList[2].style.display = "none";
// //computerList[1].style.display = "block"; random 
// const computerChoice = Math.floor(Math.random()*3); //정수만 남기려면 소수점 아래 다 버리면 됨
// computerList[computerChoice].style.display = "none";
// console.log("🚀 ~ file: main.js:12 ~ computerChoice:", computerChoice)
// // 0*3< Math.random()*3<1*3