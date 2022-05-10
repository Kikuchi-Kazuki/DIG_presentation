'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const soundsList = {
  startSound: "sounds/start.mp3",
  ponSound: "sounds/pon.mp3",
  aikodeSound: "sounds/aiko.mp3",
  shoSound: "sounds/sho.mp3",
  loseSound: "sounds/zuko.mp3",
  WinSound: "sounds/fever_yappi.mp3"
}
//スタートボタンの動作
// let count = 3; //残回数のカウント
function clickStartButton() {
  // document.getElementById("game_start").innerHTML = count; //残回数のカウントを表示する
  document.getElementById("gu").disabled = false;
  document.getElementById("choki").disabled = false;
  document.getElementById("pa").disabled = false;
  // document.getElementById("start_message").innerHTML = "じゃんけん";
  document.getElementById('ImagOfJankenman').src = 'images/janken_animation_20msec.gif';
  const music = new Audio(soundsList.startSound);
  music.play();
}
//Rock-paper-scissors
//Hand 0：グー 1：チョキ 2:パー
function controlButton() {
  document.getElementById("start").disabled = true;
  document.getElementById('ImagOfJankenman').src = 'images/janken_animation_20msec.gif';
  //じゃんけんボタンの動作を制御する
  /*
    count = count - 1;  //残回数のカウントを減らす
    if (count >= 0) {
      document.getElementById("game_start").innerHTML = count; //残回数のカウントを表示する
      document.getElementById("start").disabled = true;
      document.getElementById('ImagOfJankenman').src = 'images/janken_animation_20msec.gif';
  
    } else {
      document.getElementById("game_start").innerHTML = "GAME OVER";
      document.getElementById("gu").disabled = true;
      document.getElementById("choki").disabled = true;
      document.getElementById("pa").disabled = true;
      count = 3;
    }
      */
}

function playPon(){
  const music = new Audio(soundsList.ponSound);
  music.play();
}
function playSho(){
  const music = new Audio(soundsList.shoSound);
  music.play();
}

function finishJanken() {
  document.getElementById("start").disabled = false;
  document.getElementById("gu").disabled = true;
  document.getElementById("choki").disabled = true;
  document.getElementById("pa").disabled = true;
  jankenResult = "finish";
}

function selectJankenmanHand() {
  //ジャンケンマンの手を抽選する
  const jankenmanHand = Math.trunc(Math.random() * 3);
  if (jankenmanHand === 0) {
    document.getElementById('ImagOfJankenman').src = 'images/gu_stone_black.jpg';
  } else if (jankenmanHand === 1) {
    document.getElementById('ImagOfJankenman').src = 'images/choki_scissors_black.jpg';
  } else {
    document.getElementById('ImagOfJankenman').src = 'images/pa_paper_black.jpg';
  }
  return jankenmanHand;
}

let jankenResult = 0;

function janken(userHand) {
  
  if(jankenResult === "draw"){
    playSho();
  } else{
    playPon()
  }

  const jankenmanHand = selectJankenmanHand()
  if (userHand === jankenmanHand) {
    console.log("aiko");
    setTimeout(() => {
      const music = new Audio(soundsList.aikodeSound);
      music.play();
    }, 500); // Execution 0.5sec
    jankenResult = "draw";
  } else if (userHand === 0 && jankenmanHand === 1) {
    console.log("Win (selected Hand -> Gu)");
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    finishJanken();
  } else if (userHand === 1 && jankenmanHand === 2) {
    console.log("Win (selected Hand -> Choki)")
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    finishJanken();
  } else if (userHand === 2 && jankenmanHand === 0) {
    console.log("Win (selected Hand -> Pa)")
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    finishJanken();
  } else {
    console.log("You lose!")
    setTimeout(() => {
      const music = new Audio(soundsList.loseSound);
      music.play();
    }, 500); // Execution 0.5sec
    finishJanken();
  }
}





//テストコードサンプル　
//test({a:"A", b:"B"}, {b:"B", a:"A"});