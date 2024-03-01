import Ball from "./Ball.js"; 
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"));
const  player= new Paddle( document.getElementById("paddle-left"));
const  comp= new Paddle( document.getElementById("paddle-right"));
const playerscore= document.getElementById('my-score')

const compScore=document.getElementById('comp-score');
let lastTime =null;

function update(currentTime) {
    if (lastTime !== null) {
        const delta = (currentTime - lastTime)  
    ball.update(delta,[player.rect(),comp.rect()]); 
        comp.update(delta,ball.y);
         const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

        if(isLoose()){
            handleLoose(); 
 console.log('loose');
        }
    }
    lastTime = currentTime;
    window.requestAnimationFrame(update);
} function isLoose () {
    const rect=ball.rect();
  return  rect.right >= window.innerWidth || rect.left <= 0 

 } function handleLoose (){
    const rect=ball.rect();
    if(rect.right>=window.innerWidth ){
        playerscore.textContent=parseInt(playerscore.textContent )+1;
    }
    else {
        compScore.textContent=parseInt(compScore.textContent)+1; 
    }

      ball.reset();
      comp.reset(); 
 }  

document.addEventListener("mousemove",e=>{
    player.position=(e.y/window.innerHeight)*100;
}) 
window.requestAnimationFrame(update);
