const questionAdd = document.getElementById("questionAdd");
const questionSub = document.getElementById("questionSub");
const questionMul = document.getElementById("questionMul");
const questionDiv = document.getElementById("questionDiv");

const form = document.getElementsByClassName("form");
const inputEl = document.getElementsByClassName("input");
const questionNo = document.getElementsByClassName("questionNo")
const scoreEl = document.getElementsByClassName("score");
const submit = document.getElementsByClassName("submit");

let num1, num2; 
let correctAdd, correctSub, correctMul, correctDiv;
let questionCount = 1;
const maxQuestionCount = 10;

function upques(){
num1 = Math.ceil(Math.random() * 10);
num2 = Math.ceil(Math.random() * 10);

correctAdd = num1 + num2;
correctSub = num1 - num2;
correctMul = num1 * num2;
correctDiv = num1 / num2;

questionAdd.innerHTML = `What is Addition of ${num1} + ${num2}?`;
questionSub.innerHTML = `What is ${num1} Subtract ${num2}?`;
questionMul.innerHTML = `What is ${num1} Multiplied by ${num2}?`;
questionDiv.innerHTML = `What is ${num1} Divided by ${num2}?`;

questionNo[0].innerHTML = `Question: ${questionCount}/${maxQuestionCount}`;
questionNo[1].innerHTML = `Question: ${questionCount}/${maxQuestionCount}`;
questionNo[2].innerHTML = `Question: ${questionCount}/${maxQuestionCount}`;
questionNo[3].innerHTML = `Question: ${questionCount}/${maxQuestionCount}`;
}

let score = 0;

function update(){
    scoreEl[0].innerHTML = `Your Score: ${score}`;
    scoreEl[1].innerHTML = `Your Score: ${score}`;
    scoreEl[2].innerHTML = `Your Score: ${score}`;
    scoreEl[3].innerHTML = `Your Score: ${score}`;
}

let  first = document.getElementById("first");

function addition(){ 
let add = document.getElementById("add");
first.addEventListener("click", () => {
    if(add.style.display = "none"){
    add.style.display = "block";
    first.style.display = "none";
    }
  });
  form[0].addEventListener("submit", (e)=>{
    e.preventDefault();
    const userAns = +inputEl[0].value
    if(userAns === correctAdd){
        score++;
        questionCount++;
      update();
      inputEl[0].value="";
    }
    if(userAns !== correctAdd){
        questionCount++;
        inputEl[0].value="";
        } 
    if(questionCount>maxQuestionCount){
        add.style.fontSize = "60px"
        add.style.textAlign = "center";
        add.innerHTML= `Total Score: ${score} Out Of  ${maxQuestionCount}`;
      }
    upques();
    });
}

function subtraction(){ 
  first.addEventListener("click", () => {
      if(sub.style.display = "none"){
      sub.style.display = "block";
      first.style.display = "none";
      }
    });
    form[1].addEventListener("submit", (e)=>{
      e.preventDefault();
      const userAns = +inputEl[1].value;
      if(userAns === correctSub){
          score++;
          questionCount++;
        update();
        inputEl[1].value="";
      }
      if(userAns !== correctSub){
          questionCount++;
          inputEl[1].value="";
          } 
      if(questionCount>maxQuestionCount){
          sub.style.fontSize = "60px"
          sub.style.textAlign = "center";
          sub.innerHTML= `Total Score: ${score} Out Of  ${maxQuestionCount}`;
        }
      upques();
      });
  }

  function multiplication(){ 
  const mul = document.getElementById("mul");
  first.addEventListener("click", () => {
      if(mul.style.display = "none"){
      mul.style.display = "block";
      first.style.display = "none";
      }
    });
    form[2].addEventListener("submit", (e)=>{
      e.preventDefault();
      const userAns = +inputEl[2].value;
      if(userAns === correctMul){
          score++;
          questionCount++;
        update();
        inputEl[2].value="";
      }
      if(userAns !== correctMul){
          questionCount++;
          inputEl[2].value="";
          } 
      if(questionCount>maxQuestionCount){
          mul.style.fontSize = "60px"
          mul.style.textAlign = "center";
          mul.innerHTML= `Total Score: ${score} Out Of  ${maxQuestionCount}`;
        }
      upques();
      });
  }

  function division(){ 
    const divide = document.getElementById("divide");
    first.addEventListener("click", () => {
        if(divide.style.display = "none"){
        divide.style.display = "block";
        first.style.display = "none";
        }
      });
      form[3].addEventListener("submit", (e)=>{
        e.preventDefault();
        const userAns = +inputEl[3].value;
        if(userAns === correctDiv){
            score++;
            questionCount++;
           update();
           inputEl[3].value="";
        }
        if(userAns !== correctDiv){
            questionCount++;
            inputEl[3].value="";
            } 
        if(questionCount>maxQuestionCount){
            divide.style.fontSize = "60px"
            divide.style.textAlign = "center";
            divide.innerHTML= `Total Score: ${score} Out Of  ${maxQuestionCount}`;
          }
        upques();
        });
    }

update();
upques();


