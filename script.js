var timer = 60;
var score = 0;
var hit = 0;

function makeBubble() {
  var clutter = " ";
  for (var i = 1; i <= 98; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#bottom").innerHTML = clutter;
}

function runTimer() {
  var timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(timerinterval);
      gameOver();
    }
  }, 1000);
}

function timeout(){
    if(timer==0){
        var timerinterval = setInterval(function () { 
              clearInterval(timerinterval);           
          }, 1000);
    }
}

function getNewHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hit;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function gameOver(){
    document.querySelector("#bottom").innerHTML = `
            <div>
                <h2  >Game Over</h2>
                <h1>Your Score = ${score}</h1>
            </div>`;
}

document.querySelector("#bottom").addEventListener("click", function (details) {
  var clickedBubble = Number(details.target.textContent);
  if (clickedBubble == hit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }else{
    gameOver();
    document.querySelector("#bottom").innerHTML =`<p>Clicked wrong bubble</p>`
    timeout();
  }
});

makeBubble();
runTimer();
getNewHit();
