body {
  font-family: "游ゴシック", "ヒラギノ角ゴシック", "メイリオ", sans-serif;
  background-color: white;
  color: black;
}

h1 {
  color: #f8a;
  font-weight: bold;
  text-shadow: black;
}

h1,
h2 {
  text-align: center;
}


p.img_center {
  text-align: center;
}

.inner {
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
}

.box {
  color: #fff;
  background-color: red;
  border: 1px solid black;
  line-height: 2.5;
  padding: 0 20px;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
}

.box:hover {
  box-shadow:
  inset -2px -2px 3px white,
  inset 2px 2px 3px black;
}

.box:active {
  background-color: darkred;
}



/* 点滅 */
.blink {
  animation: blinking 1s ease-in-out infinite alternate;
}

/* @keyframes blinking {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
} */
