class Stone{
    constructor(x,y,w,h){
        var option ={
           isStatic: true,
        }
       this.body= Bodies.circle(x,y,r,option);
       this.w=w;
       this.h=h;
       this.r=r
       
       World.add(world,this.body);
       }
   
       display(){
         var pos = this.body.position
         noStroke()
         fill("red")
         rectMode(CENTER)
         rect(pos.x,pos.y,this.r);
         
       } 
}