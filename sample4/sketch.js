let r3=140, r4=310, r5=110, r6=280;  
let r7=60, r8=230, r9=130, r10=300; 
let r11=90, r12=260, r13=150, r14=200; 
let r15=70, r16=320; 


let showR3=true, showR4=true, showR5=true, showR6=true;
let showR7=true, showR8=true, showR9=true, showR10=true;
let showR11=true, showR12=true, showR13=true, showR14=true;
let showR15=true, showR16=true;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
  
  // saveGif('dramatic_sunrise_loop.gif', 6); 
}
function draw() {

  let totalFrames = 360; 
  let currentProgress = (frameCount % totalFrames) / totalFrames; 


  if (frameCount % totalFrames === 1) {
    r3=140; r4=310; r5=110; r6=280; r7=60; r8=230; r9=130; r10=300; r11=90; r12=260; r13=150; r14=200; r15=70; r16=320;
    showR3=true; showR4=true; showR5=true; showR6=true;
    showR7=true; showR8=true; showR9=true; showR10=true;
    showR11=true; showR12=true; showR13=true; showR14=true;
    showR15=true; showR16=true;
  }


  let speed = 2.5; 
  
  r3 = (r3 + speed > 350) ? 50 : r3 + speed;   r4 = (r4 + speed > 350) ? 50 : r4 + speed;
  r5 = (r5 + speed > 350) ? 50 : r5 + speed;   r6 = (r6 + speed > 350) ? 50 : r6 + speed;
  r7 = (r7 + speed > 350) ? 50 : r7 + speed;   r8 = (r8 + speed > 350) ? 50 : r8 + speed;
  r9 = (r9 + speed > 350) ? 50 : r9 + speed;   r10 = (r10 + speed > 350) ? 50 : r10 + speed;
  r11 = (r11 + speed > 350) ? 50 : r11 + speed; r12 = (r12 + speed > 350) ? 50 : r12 + speed;
  r13 = (r13 + speed > 350) ? 50 : r13 + speed; r14 = (r14 + speed > 350) ? 50 : r14 + speed;
  r15 = (r15 + speed > 350) ? 50 : r15 + speed; r16 = (r16 + speed > 350) ? 50 : r16 + speed;

  
  if (currentProgress >= 0.4) {
    if (r3 <= 52) showR3 = false;   if (r4 <= 52) showR4 = false;
    if (r5 <= 52) showR5 = false;   if (r6 <= 52) showR6 = false;
    if (r7 <= 52) showR7 = false;   if (r8 <= 52) showR8 = false;
    if (r9 <= 52) showR9 = false;   if (r10 <= 52) showR10 = false;
    if (r11 <= 52) showR11 = false; if (r12 <= 52) showR12 = false;
    if (r13 <= 52) showR13 = false; if (r14 <= 52) showR14 = false;
    if (r15 <= 52) showR15 = false; if (r16 <= 52) showR16 = false;
  }


  let moonY = 120, sunY = 130;
  let moonX = 450, sunX = 650; 

  if (currentProgress < 0.45) {
    moonX = lerp(450, -50, currentProgress / 0.45);
  } else if (currentProgress >= 0.45 && currentProgress < 0.5) {
    moonX = -100; 
  } else {
    moonX = -100;
    sunX = lerp(650, 350, (currentProgress - 0.5) / 0.5); 
  }

  let skyColor, sunColor;
  let mountainColor1, mountainColor2, mountainColor3;

  if (currentProgress < 0.35) {
  
    skyColor = color(8, 12, 28); 
    sunColor = color(255, 60, 0); 
    
  
    mountainColor1 = color(15, 30, 25);
    mountainColor2 = color(20, 45, 30);
    mountainColor3 = color(25, 55, 35);
  } 
  else if (currentProgress >= 0.35 && currentProgress < 0.65) {
   
    let t = (currentProgress - 0.35) / 0.30;
    skyColor = lerpColor(color(8, 12, 28), color(245, 75, 45), t); 
    sunColor = lerpColor(color(255, 60, 0), color(255, 140, 20), t);
    
   
    mountainColor1 = lerpColor(color(15, 30, 25), color(95, 40, 40), t);
    mountainColor2 = lerpColor(color(20, 45, 30), color(125, 55, 45), t);
    mountainColor3 = lerpColor(color(25, 55, 35), color(145, 70, 50), t);
  } 
  else {
    
    let t = (currentProgress - 0.65) / 0.35;
    skyColor = lerpColor(color(245, 75, 45), color(110, 210, 255), t); 
    sunColor = lerpColor(color(255, 140, 20), color(255, 245, 140), t); 
    
  
    mountainColor1 = lerpColor(color(95, 40, 40), color(60, 145, 80), t);
    mountainColor2 = lerpColor(color(125, 55, 45), color(80, 180, 105), t);
    mountainColor3 = lerpColor(color(145, 70, 50), color(100, 210, 130), t);
  }

  let moonSize = lerp(50, 35, currentProgress < 0.45 ? currentProgress / 0.45 : 1);
  let sunSize = currentProgress >= 0.5 ? lerp(25, 50, (currentProgress - 0.5) / 0.5) : 25;
 
 
  noStroke(); fill(skyColor); rect(0, 0, 600, 400); 


  if (currentProgress >= 0.5) { fill(sunColor); circle(sunX, sunY, sunSize); }
  if (currentProgress < 0.45) {
    fill(255, 230, 120); circle(moonX, moonY, moonSize); 
    fill(skyColor); circle(moonX - (moonSize * 0.24), moonY, moonSize * 0.7);
  }

 
  fill(mountainColor1); triangle(100, 350, 300, 180, 500, 350); 
  fill(mountainColor2); triangle(50, 350, 200, 220, 350, 350); 
  fill(mountainColor3); triangle(295, 350, 425, 250, 550, 350); 

 
  noStroke(); fill(245, 245, 245, 130); 
  if (showR3) ellipse(180, r3, 5, 10);   if (showR4) ellipse(230, r4, 5, 10);
  if (showR5) ellipse(105, r5, 5, 10);   if (showR6) ellipse(155, r6, 5, 10);
  if (showR7) ellipse(205, r7, 5, 10);   if (showR8) ellipse(255, r8, 5, 10);
  if (showR9) ellipse(340, r9, 5, 10);   if (showR10) ellipse(390, r10, 5, 10);
  if (showR11) ellipse(440, r11, 5, 10);  if (showR12) ellipse(490, r12, 5, 10);
  if (showR13) ellipse(365, r13, 5, 10);  if (showR14) ellipse(415, r14, 5, 10);
  if (showR15) ellipse(465, r15, 5, 10);  if (showR16) ellipse(525, r16, 5, 10);


  fill(160, 120, 90); noStroke();
  rect(0, 0, 600, 50); rect(0, 350, 600, 50); rect(0, 50, 50, 300); rect(550, 50, 50, 300); 

  stroke(130, 90, 60); strokeWeight(2);
  for (let y = 20; y < 400; y += 30) {
    if (y < 50 || y > 350) { line(0, y, 600, y); } 
    else { line(0, y, 50, y); line(550, y, 600, y); }
  }

 
  stroke(45, 50, 55); strokeWeight(12); noFill();
  rect(50, 50, 500, 300, 10); line(300, 50, 300, 350); line(50, 200, 550, 200);
}
