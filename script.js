let timer = 20;
let score = 0;
let hitNum = 0;

Bubble = () => {
  let current = "";
  for (let i = 1; i < 169; i++) {
    let rb = Math.floor(Math.random() * 10);
    current += `<div class="ball">${rb}</div>`;
  }
  document.querySelector(".tablebottom").innerHTML = current;
};

timeZone = () => {
  let rd = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(rd);
      document.querySelector(".tablebottom").innerHTML =`<h1>Game over. Your Total Score is ${score}</h1>`
      document.querySelector(".tablebottom").style.backgroundColor = "white"
      document.querySelector(".main").style.backgroundColor = "black";
      document.querySelector(".tabletop").style.backgroundColor = "yellow";
      document.querySelector(".tabletop").style.color = "black";
    }
  }, 1000);
};

hitval=()=>{
    hitNum = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitNum;
}

totalScore=()=>{
    score += 10;
    document.querySelector("#score").textContent = score;
}
document.querySelector(".tablebottom")
.addEventListener("click",function(dets){
    let rex = Number(dets.target.textContent)
    if(rex === hitNum){
        totalScore();
        Bubble();
        hitval();
    }
        
})



Bubble();
timeZone();
hitval();
