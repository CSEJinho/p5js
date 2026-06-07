function setup() {
  // 생성한 캔버스를 변수에 담고 HTML 컨테이너(#canvas-container)에 바인딩합니다.
  let canvas = createCanvas(600, 400);
  canvas.parent('canvas-container');
}

function draw() {
  // 1. 배경색 (부드러운 연회색/하늘색 톤)
  background(225, 230, 235);

  // 2. 목
  fill(255, 220, 190);
  stroke(50);
  strokeWeight(2);
  drawRoundRect(265, 287, 70, 100, 30); 

  // 3. 상반신 (파란색 맨투맨 티셔츠 + 흰색 셔츠 칼라)
  fill(100, 140, 200); 
  stroke(50);
  strokeWeight(2);
  drawRoundRect(175, 350, 250, 100, 25); 
  
  // 흰색 깃(칼라) 레이어링
  fill(255);
  triangle(300, 350, 255, 350, 280, 380); // 왼쪽 칼라
  triangle(300, 350, 345, 350, 320, 380); // 오른쪽 칼라

  // 4. 뒷머리/옆머리 베이스
  fill(45, 45, 45); 
  noStroke();
  ellipse(300, 180, 220, 220);
  
  // 5. 얼굴 형태
  fill(255, 220, 190);  
  stroke(50);
  strokeWeight(2);
  ellipse(300, 220, 210, 250);

  // 6. 눈 (오른쪽/왼쪽 대칭 정면 응시)
  stroke(50);
  strokeWeight(2);
  fill(255);
  ellipse(260, 215, 35, 20); // 왼쪽 흰자
  ellipse(337, 215, 35, 20); // 오른쪽 흰자

  // 눈동자 (정중앙 크기 12 고정)
  fill(20);
  noStroke();
  circle(260, 215, 12); // 왼쪽 눈동자
  circle(337, 215, 12); // 오른쪽 눈동자

  // 7. 코 및 콧망울 디테일
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
  
  // 8. 입 (인덱스에 맞게 부드럽게 미소 짓는 고정 호)
  noFill();
  stroke(220, 100, 100);
  strokeWeight(2);
  arc(300, 285, 50, 15, 0.1, PI - 0.1);

  // 9. 앞머리 (이마를 덮는 3개의 호)
  fill(45, 45, 45);
  noStroke();
  arc(250, 150, 100, 60, 0, PI); 
  arc(350, 150, 100, 60, 0, PI);
  arc(300, 155, 80, 50, 0, PI);

  // 10. 빨간색 모자 (메인 캡 + 모자 챙 + 상단 꼭지 버튼)
  fill(200, 50, 50);
  stroke(50);
  strokeWeight(2);
  arc(300, 150, 215, 160, PI, 0); // 모자 몸통
  ellipse(300, 145, 220, 40);      // 모자 챙
  
  fill(150, 30, 30); // 살짝 어두운 레드 색상의 꼭지 방울
  circle(300, 70, 15);
}

// 둥근 사각형(몸통 및 목) 렌더링용 커스텀 우회 함수
function drawRoundRect(x, y, w, h, r) {
  push();
  rectMode(CORNER);
  noStroke();
  rect(x + r, y, w - 2 * r, h);
  rect(x, y + r, w, h - 2 * r);
  ellipse(x + r, y + r, 2 * r);
  ellipse(x + w - r, y + r, 2 * r);
  ellipse(x + r, y + h - r, 2 * r);
  ellipse(x + w - r, y + h - r, 2 * r);
  
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
