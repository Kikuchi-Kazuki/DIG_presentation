'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const soundsList = {
  startSound: "sounds/start.mp3",
  ponSound: "sounds/pon.mp3",
  aikodeSound: "sounds/aiko.mp3",
  shoSound: "sounds/sho.mp3",
  loseSound: "sounds/zuko-.mp3",
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

function playPon() {
  const music = new Audio(soundsList.ponSound);
  music.play();
}
function playSho() {
  const music = new Audio(soundsList.shoSound);
  music.play();
}

function finishJanken() {
  document.getElementById("start").disabled = false;
  document.getElementById("gu").disabled = true;
  document.getElementById("choki").disabled = true;
  document.getElementById("pa").disabled = true;
  document.getElementById('ImagOfJankenman').src = 'images/janken_animation_1000msec.gif';
  jankenResult = "finish";
}


// function selectJankenmanHand() {
//   //ジャンケンマンの手を抽選する
//   const jankenmanHand = Math.trunc(Math.random() * 3);
//   if (jankenmanHand === 0) {
//     document.getElementById('ImagOfJankenman').src = 'images/gu_stone_black.jpg';
//   } else if (jankenmanHand === 1) {
//     document.getElementById('ImagOfJankenman').src = 'images/choki_scissors_black.jpg';
//   } else {
//     document.getElementById('ImagOfJankenman').src = 'images/pa_paper_black.jpg';
//   }
//   return jankenmanHand;
// }

function selectJankenmanHand(userHand) {
  //ジャンケンマンの手を抽選する
  // const jankenmanHand = Math.trunc(Math.random() * 3);

  // const randomNumber = Math.trunc(Math.random() * 3);
  // const winRate = 0.2;
  const n = Math.random();
  let result = 0;
  if (userHand === 0) {
    if (n < 0.2) {
      result = 1;
    } else if (n < 0.6) {
      result = 2;
    } else {
      result = 0;
    }
  }
  if (userHand === 1) {
    if (n < 0.2) {
      result = 2;
    } else if (n < 0.6) {
      result = 0;
    } else {
      result = 1;
    }
  }
  if (userHand === 2) {
    if (n < 0.2) {
      result = 0;
    } else if (n < 0.6) {
      result = 1;
    } else {
      result = 2;
    }
  }
  return result;
  /*let jankenmanHand;
    const randomNumber = Math.trunc(Math.random() * 5); //0,1,2,3,4
    const randomNumber = 3;
    console.log("randomNumber = " + randomNumber)
    if (userHand === 0) { //ユーザーがグーを選んだとき
      if (randomNumber === 1) {
        jankenmanHand = 1;
      } else if (randomNumber === 2 || randomNumber === 3) {
        jankenmanHand = 2;
      } else {
        jankenmanHand = 0;
      }
  
    } else if (userHand === 1) { //ユーザーがチョキを選んだとき
      if (randomNumber === 2) {
        jankenmanHand = 2;
      } else if (randomNumber === 0 || randomNumber === 3) {
        jankenmanHand = 0;
      } else {
        jankenmanHand = 1;
      }
    } else { //ユーザーがパーを選んだとき
      if (randomNumber === 0) {
        jankenmanHand = 0;
      } else if (randomNumber === 1 || randomNumber === 3) {
        jankenmanHand = 1;
      } else {
        jankenmanHand = 2;
      }
    }
    */

}

let jankenResult = 0;

const gameCounter = {};
function janken(userHand) {
  if (jankenResult === "draw") {
    playSho();
  } else {
    playPon();
  }

  const jankenmanHand = selectJankenmanHand(userHand);

  console.log("jankenmanHand = " + jankenmanHand);
  if (jankenmanHand === 0) {
    document.getElementById('ImagOfJankenman').src = 'images/gu_stone_black.jpg';
  } else if (jankenmanHand === 1) {
    document.getElementById('ImagOfJankenman').src = 'images/choki_scissors_black.jpg';
  } else if (jankenmanHand === 2) {
    document.getElementById('ImagOfJankenman').src = 'images/pa_paper_black.jpg';
  }
  console.log("userHand = " + userHand);
  console.log("jankenmanHand = " + jankenmanHand);


  if (userHand === jankenmanHand) {
    console.log("aiko");
    setTimeout(() => {
      const music = new Audio(soundsList.aikodeSound);
      music.play();
    }, 500); // Execution 0.5sec
    setTimeout(() => {
      document.getElementById('ImagOfJankenman').src = 'images/janken_animation_20msec.gif';
    }, 700); // Execution 0.7sec
    jankenResult = "draw";

  } else if (userHand === 0 && jankenmanHand === 1) {
    console.log("Win (selected Hand -> Gu)");
    document.getElementById("gu").disabled = true;
    document.getElementById("choki").disabled = true;
    document.getElementById("pa").disabled = true;
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    setTimeout(() => {
      finishJanken();
    }, 6000); // Execution 6sec
  } else if (userHand === 1 && jankenmanHand === 2) {
    console.log("Win (selected Hand -> Choki)")
    document.getElementById("gu").disabled = true;
    document.getElementById("choki").disabled = true;
    document.getElementById("pa").disabled = true;
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    setTimeout(() => {
      finishJanken();
    }, 6000); // Execution 6sec
  } else if (userHand === 2 && jankenmanHand === 0) {
    console.log("Win (selected Hand -> Pa)")
    document.getElementById("gu").disabled = true;
    document.getElementById("choki").disabled = true;
    document.getElementById("pa").disabled = true;
    setTimeout(() => {
      const music = new Audio(soundsList.WinSound);
      music.play();
    }, 500); // Execution 0.5sec
    setTimeout(() => {
      finishJanken();
    }, 6000); // Execution 6sec

  } else {
    console.log("You lose!")
    setTimeout(() => {
      const music = new Audio(soundsList.loseSound);
      music.play();
      finishJanken();
    }, 500); // Execution 0.5sec
  }
}
