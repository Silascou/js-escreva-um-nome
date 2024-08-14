function setup() {
    createCanvas(500, 500);
    background("white")
  }
  
  function draw() {
    stroke("black");
    fill("blue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }