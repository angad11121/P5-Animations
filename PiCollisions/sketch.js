function setup() {
  createCanvas(600, 400);
  bigDim = 100
  smallDim = 40
  bigSquare = createVector(150,400-1-bigDim)
  smallSquare = createVector(100,400-1-smallDim)
  bigSpeed = -1
  smallSpeed = 0
  ratio = 100
  collisions=0
  frameRate(120)
}

function draw() {
  background(220);
  bigSquare.x += bigSpeed
  smallSquare.x += smallSpeed
  
  if((bigSquare.x - (smallSquare.x + smallDim)) <= 0)
    {
      collisions+=1
      insideDist = abs(bigSquare.x - (smallSquare.x + smallDim))
      bigSquare.x += insideDist/2
      smallSquare.x -= insideDist/2
      
      newBigSpeed =  ((ratio-1)*bigSpeed+ 2*smallSpeed)/(ratio+1)
      newSmallSpeed =  (-(ratio-1)*smallSpeed+ 2*ratio*bigSpeed)/(ratio+1)
      bigSpeed = newBigSpeed
      smallSpeed = newSmallSpeed
    }
  
  if(smallSquare.x <= 0)
    {
      collisions+=1
      smallSquare.x = 0
      smallSpeed*=-1
    }
  line(1,0,1,width)
  line(0,height-1,width,height-1)
  fill(255,100,50)
  square(bigSquare.x,bigSquare.y,bigDim)
  fill(55,200,50)
  square(smallSquare.x,smallSquare.y,smallDim)
  fill(5,0,0)
  textSize(12)
  text("Collisions: "+collisions,width-110,60)
  text("PI: "+round(PI,log(ratio)/log(100)),width-110,80)
  textSize(20)
  fill(0,0,0)
  text("Pi-Collisions",width/2-50,30)
}