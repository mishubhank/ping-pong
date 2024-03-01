 const INITIAL_VEL=0.025
 const FACTOR=0.00001;
export default class Ball {
 constructor(ballElem) {
 this.ballElem=ballElem;
 this.reset();

 }
 
 get x(){
    return  parseFloat( getComputedStyle(this.ballElem).getPropertyValue("--x"))
 }

set x(value) {
    this.ballElem.style.setProperty("--x", value);
}

 get y(){
    return  parseFloat( getComputedStyle(this.ballElem).getPropertyValue("--y"))
 }

set y(value) {
    this.ballElem.style.setProperty("--y", value);
}
rect(){
 return this.ballElem.getBoundingClientRect();

}
  reset() {
    this.x = 50
    this.y = 50
    this.direction = { x: 0 }
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = RandomNum(0, 2 * Math.PI)
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
    }
    this.velocity = INITIAL_VEL
 
  }



 update(delta ,paddleRects ){
   
     this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity+=FACTOR;
  
    const rect=this.rect()
   if (rect.bottom >= window.innerHeight || rect.top <= 0) {
    this.direction.y *= -1;
}  

if (paddleRects.some(r=>isCollision(r,rect))) {
    this.direction.x *= -1; 
}

   
 }

  }
function RandomNum( a, b){
 return Math.random()*(b-a)+a;
} 
 function isCollision (rect1,rect2) {
  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top)
}