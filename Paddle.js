 const SPEED=0.02;
export default class Paddle  {
    constructor(paddleElem){
        this.paddleElem=paddleElem; 
        this.reset(); 
    }


    get position(){
 return  parseFloat( getComputedStyle(this.paddleElem).getPropertyValue("--position"))


    }
    reset(){
        this.poistion=50;
    }
    set position(value){

  this.paddleElem.style.setProperty("--position", value);

    } 
    rect (){
        //return this.paddleElem.getBoundingClientReact
            return this.paddleElem.getBoundingClientRect()
    }
  update(delta, ballHeight) {
  // Calculate the difference between the ball's height and the paddle's position
  const difference = ballHeight - this.position;
  
  // Update the paddle's position based on the difference
  this.position += SPEED * delta * difference;
}
}