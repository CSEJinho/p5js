let eyeSize = 12; // 눈동자 크기
let isWinking = false; // 윙크

function setup() {
  // [수정 포인트] 생성한 캔버스를 변수에 담고, HTML 컨테이너(#canvas-container)에 바인딩합니다.
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
}

function draw() {
  // 배경색
  background(210, 220 + mouseX / 20, 240);

  // --------------------------------------------------------
  // 1. 목 (구형 브라우저 에러 방지를 위해 rect 라운딩 대신 커스텀 함수 사용)
  fill(255, 220, 190);
  stroke(50);
  strokeWeight(2);
  drawRoundRect(265, 287, 70, 100, 30); 

  // 2. 상반신 (목 위에 덮어씌움 / 에러 원인이었던 rect 라운딩 제거 후 커스텀 함수 대체)
  if (mouseIsPressed) {
    fill(200, 100, 100); 
  } else {
    fill(100, 140, 200); 
  }
  stroke(50);
  strokeWeight(2);
  drawRoundRect(175, 350, 250, 100, 30); // <- 이제 여기서 절대 에러 안 납니다!
  
  fill(255);
  triangle(300, 350, 255, 350, 280, 380);
  triangle(300, 350, 345, 350, 320, 380);
  // --------------------------------------------------------

  // 3. 옆 머리카락
  fill(45, 45, 45); 
  noStroke();
  ellipse(300, 180, 220, 220);
  
  // 4. 얼굴
  fill(255, 220, 190);  
  stroke(50);
  strokeWeight(2);
  ellipse(300, 220, 210, 250);

  // 5. 눈썹
  stroke(45, 45, 45);
  strokeWeight(4);
  noFill();
  let browAngle = map(mouseY, 0, height, -10, 10); 
  
  push();
  translate(260, 195);
  rotate(radians(browAngle));
  arc(0, 0, 40, 15, PI + 0.2, TWO_PI - 0.2);
  pop();

  push();
  translate(337, 195);
  rotate(radians(-browAngle));
  arc(0, 0, 40, 15, PI + 0.2, TWO_PI - 0.2);
  pop();

  // 6. 눈
  stroke(50);
  strokeWeight(2);
  fill(255);
  ellipse(260, 215, 35, 20); // 왼쪽 흰자
  ellipse(337, 215, 35, 20); // 오른쪽 흰자

  if (keyIsPressed) {
    eyeSize = 20;
  } else {
    eyeSize = 12;
  }

  // 왼쪽 눈 인터랙션 (윙크 버그 수정)
  if (mouseIsPressed && mouseButton === LEFT) {
    fill(255, 220, 190);
    noStroke();
    rect(240, 205, 40, 20);
    stroke(50);
    strokeWeight(2);
    line(245, 215, 275, 215);
  } else {
    fill(20);
    noStroke();
    circle(260, 215, eyeSize); 
  }
  
  // 오른쪽 눈동자
  fill(20);
  noStroke();
  circle(337, 215, eyeSize);

  // 7. 코
  noStroke();
  fill(235, 190, 160); 
  triangle(300, 220, 300, 255, 285, 255); 
  stroke(180, 140, 120);
  strokeWeight(1.5);
  line(300, 220, 300, 255);
  noFill();
  arc(300, 255, 15, 8, 0, PI);
  arc(290, 255, 7, 6, 0, PI);
  arc(310, 255, 7, 6, 0, PI);
  
  // 8. 입
  let mouthSize = map(mouseY, 0, height, 5, 30);
  noFill();
  stroke(220, 100, 100);
  strokeWeight(2);
  arc(300, 285, 50, mouthSize, 0.1, PI - 0.1);

  // 9. 앞머리
  fill(45, 45, 45);
  noStroke();
  arc(250, 150, 100, 60, 0, PI); 
  arc(350, 150, 100, 60, 0, PI);
  arc(300, 155, 80, 50, 0, PI);

  // 10. 모자
  fill(200, 50, 50);
  stroke(50);
  strokeWeight(2);
  arc(300, 150, 215, 160, PI, 0); 
  ellipse(300, 145, 220, 40);
  let shake = random(-1, 1);
  fill(150, 30, 30);
  circle(300 + shake, 70 + shake, 15);
}

// [핵심] 구형 브라우저 분들을 위해 ctx.roundRect 에러를 완전히 우회하는 둥근 사각형 함수
function drawRoundRect(x, y, w, h, r) {
  push();
  rectMode(CORNER);
  noStroke();
  // 안쪽 채우기
  rect(x + r, y, w - 2 * r, h);
  rect(x, y + r, w, h - 2 * r);
  ellipse(x + r, y + r, 2 * r);
  ellipse(x + w - r, y + r, 2 * r);
  ellipse(x + r, y + h - r, 2 * r);
  ellipse(x + w - r, y + h - r, 2 * r);
  
  // 외곽선 수동 그리기 (에러 방지용)
  stroke(50);
  strokeWeight(2);
  noFill();
  line(x + r, y, x + w - r, y);
  line(x + r, y + h, x + w - r, y + h);
  line(x, y + r, x, y + h - r);
  line(x + w, y + r, x + w, y + h - r);
  arc(x + r, y + r, 2 * r, 2 * r, PI, HALF_PI + PI);
  arc(x + w - r, y + r, 2 * r, 2 * r, HALF_PI + PI, TWO_PI);
  arc(x + w - r, y + h - r, 2 * r, 2 * r, 0, HALF_PI);
  arc(x + r, y + h - r, 2 * r, 2 * r, HALF_PI, PI);
  pop();
}
