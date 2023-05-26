const word = document.querySelector(".word");
const wordList = document.querySelector(".word-list ul");

//1. 주어진 단어를 하나 만든다. 배열에다가 값을 넣고 그 중에 하나 골라서 뿌리기
const wordArray=[]; //배열은 참조 reference를 한다.
const firstWords = ["강아지", "소나기", "기상청", "청소부", "부잣집"];
//5개 중에 정수만 뽑아야 한다.
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

wordArray.push(firstWord); //push를 하면 내가 값을 집어 넣을 수 있다. 
console.log("🚀 ~ file: main.js:11 ~ wordArray:", wordArray)


console.log(firstWords.includes("기상청"));

const appedWord = (inputWord) => {
    const li = document.createElement("li");
    li.textContent = inputWord;
    wordList.append(li);
    wordArray.push(inputword);
};

const fault = ()=>{
    word.value = "";
    gsap.to(".input-box", {x:100,duration:0.5, ease: "elastic.out(1,0.2)"});
    return
};

appedWord(firstWord);
//2. word에 글자를 입력하고 enter쳤을때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함 
word.addEventListener("keyup", (e)=>{
    // console.log(e);
    if (e.key === "Enter" || e.keycode === 13) {
        if(word.value.length !== 3){
            // alert("3글자만 입력가능합니다.");
          fault();
          return;
        }
        // }else {
            // console.log(word.value.substring(0,1));
            // console.log(word.value.charAt(0));
            const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
            const lastChar = lastWord.substring(2);
            if (word.value.substring(0,1) !==lastChar) {
              fault();
              return;
            }
            // console.log(lastWord + "===" + lastChar);
            // if(word.value.substring(0,1)===lastChar){
              if (wordArray.includes(word.value)){
                fault();
                return;
              }
               
            appedWord(word.value);
            word.value="";            
            }
        });

    //배열을 하나 만든다.
    //배열에 중복을 따져서 없으면 값을 입력한다.



fetch("https://stdict.korean.go.kr/api/search.do?key=EFEFF6C8533005A046B46D446E080DCC&q=기러기&req_type=jason")
.then((response) => {
    // console.log(response);
    response.jason();
})
.then((date) => {
  console.log(data);
});


fetch("https://opendict.korean.go.kr/api/search?key=5E993BE14B29D18BBA170DB1727D69E9&q=기러기&req_type=jason")
.then((response)=>{
    return response.jason();
})
.then((data)=> {
    console.log(data);

});
