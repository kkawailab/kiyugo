let x = 100; // 初期化
let to = 18;
let r = 50; //円の直径

function setup() {
  createCanvas(50*to + 50, 50*to + 50);
  background(220);
  line(25, 50 , 50*to + 25 ,50);
  strokeWeight(2);
  noLoop();
}

//ボタンクリックで関数呼び出し
  //select_Q1を取得
function change_to(){
  const select_to = document.querySelector('select[name="total"]');
  const options_to = [...select_to.querySelectorAll('option')];

  const values_to = options_to
  .filter(option => option.selected)
  .map(option => option.value);

  console.log(values_to);
  return {values_to};
}

//select_Q2を取得
/*function change_fr() {
  const select_fr = document.querySelector('select[name="front"]');
  const options_fr = [...select_fr.querySelectorAll('option')];

  const values_fr = options_fr
  .filter(option => option.selected)
  .map(option => option.value);

  console.log(values_fr);
  return values_fr;
}*/


//checkbox_Q3を取得

const inputs_le = [...document.querySelectorAll('input[name="leading"]:checked')];
const values_le = inputs_le.map(input => input.value);

for (let i = 0; i < values_le.length; i++) {
  values_le[i].addEventListener('input', e => {
    console.log(e.target.value);})
}


  //radioの取得例
  //const input = document.querySelector('input:checked');


  //取得test
  //console.log(values_to);
  //console.log(values_fr);
  //console.log(values_le);

  //console.log(values_fr[0]);

 // return [values_to,values_fr, values_le];

  //valueを配列化
  //配列に変化があれば、returnを返すようにする

  
//let values_fr= buttonClick([1]);
//console.log(values_fr[0]);









//p5.jsでの図式
function draw() {
  function change_fr(){
    const select_fr = document.querySelector('select[name="front"]');
    const options_fr = [...select_fr.querySelectorAll('option')];
  
    const values_fr = options_fr
    .filter(option => option.selected)
    .map(option => option.value);
  
    console.log(values_fr);
    //return values_fr;
  
  //var values_fr = change_fr();
  //var values_fr = [2];
  //color_conver_fr();
  if (values_fr == 1) {
    var color_fr = color(255,255,255); //white
  }  else if (values_fr == 2) {
    var color_fr = color(230,230,250); //lavender
  } else if (values_fr == 3){
    var color_fr = color(0,0,0); //black
  } else if (values_fr == 4) {
    var color_fr = color(128,128,128); //gray 
  } else if (values_fr == 5) {
    var color_fr = color(220,20,60); //crimson
  } else if (values_fr == 6) {
    var color_fr = color(240,128,128); //lightcoral
  } else if (values_fr == 7) {
    var color_fr = color(30,144,255); //dodgerblue
  } else if (values_fr == 8) {
    var color_fr = color(135,206,235); //skytblue
  } else if (values_fr == 9) {
    var color_fr = color(255,255,0); //yellow
  } else if (values_fr == 10) {
    var color_fr = color(255,239,213); //papaywhip
  } else if (values_fr == 11) {
    var color_fr = color(34,139,34);//forestgreen
  } else if (values_fr == 12) {
    var color_fr = color(144,238,144); //lightgreen
  } else if (values_fr == 13) {
    var color_fr = color(255,165,0); //orange
  } else if (values_fr == 14) {
    var color_fr = color(255,228,225); //mistyrose
  } else if (values_fr == 15) {
    var color_fr = color(244,164,96); //sandybrown
  } else if (values_fr == 16) {
    var color_fr = color(255,182,193); //lightpink
  } else if (values_fr == 17) {
    var color_fr = color(221,160,221); //plum
  } else {
    var color_fr = color(255,105,180); //hotpink
  }
  fill(color_fr);
  circle(100,75,50);
}
  let result = change_fr();


}




/*
  for(let i = 0; i < to; i++){
    circle(50+ i * 50, x, 50);
  }
円の直径
let r = 50;
circle(100 , 100 , 50);
縦長のキャンバス
front の範囲
(0,0, 500,150)
color_conver_fr();
fill(color_fr);
circle(100,75,r); 一回だけ

leading の範囲
(0,150, 500,400)
leの個数判定
console.log(value_le.length)
value_le.length = length_le
二列でcircleを記述
for(let i = 0; i< length_le/2 ;i++){
  console.log(value_le[i])
  circle(50 + i * 50, 200 , r);
}
for(let i = 0; i< length_le/2 + 1 ;i++){
  console.log(value_le[i+parseInt(length_le/2])
  circle(50 + i * 50, 300 , r);
}

*/




