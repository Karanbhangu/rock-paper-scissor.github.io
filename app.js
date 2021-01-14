function play1() {
  var comp = document.getElementById("comp");
  var score = 0;
  var scored = document.getElementById("score");
  var num = Math.floor(Math.random() * 3 + 1);
  if (num == 2) {
    comp.innerHTML = `<img src="images/icon-paper.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score-1);
    if(sessionStorage.getItem("mainscore") < 0){sessionStorage.setItem("mainscore", 0)}
  }
  else if (num == 3) {
    comp.innerHTML = `<img src="images/icon-scissors.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score+1);
  }
  else if (num == 1) {
    comp.innerHTML = `<img src="images/icon-rock.svg" alt="">`;
  }
  scored.innerHTML = sessionStorage.getItem("mainscore");
}
function play2() {
  var comp = document.getElementById("comp");
  var score = 0;
  var scored = document.getElementById("score");
  var num = Math.floor(Math.random() * 3 + 1);
  if (num == 2) {
    comp.innerHTML = `<img src="images/icon-paper.svg" alt="">`;
  }
  else if (num == 3) {
    comp.innerHTML = `<img src="images/icon-scissors.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score-1);
    if(sessionStorage.getItem("mainscore") < 0){sessionStorage.setItem("mainscore", 0)}
  }
  else if (num == 1) {
    comp.innerHTML = `<img src="images/icon-rock.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score+1);
  }
  scored.innerHTML = sessionStorage.getItem("mainscore");
}
function play3() {
  var comp = document.getElementById("comp");
  var score = 0;
  var scored = document.getElementById("score");
  var num = Math.floor(Math.random() * 3 + 1);
  if (num == 2) {
    comp.innerHTML = `<img src="images/icon-paper.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score+1);
  }
  else if (num == 3) {
    comp.innerHTML = `<img src="images/icon-scissors.svg" alt="">`;
  }
  else if (num == 1) {
    comp.innerHTML = `<img src="images/icon-rock.svg" alt="">`;
    score = parseInt(sessionStorage.getItem("mainscore"));
    if(isNaN(score)){score = 0};
    sessionStorage.setItem("mainscore", score-1);
    if(sessionStorage.getItem("mainscore") < 0){sessionStorage.setItem("mainscore", 0)}
  }
  scored.innerHTML = sessionStorage.getItem("mainscore");
}
function rules(){
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
}
let imges = document.getElementById("imges");
imges.addEventListener("click", ()=>{
    let modal = document.getElementById("modal");
    modal.style.display = "none";
})