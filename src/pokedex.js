//muda a cor da pokedex
const changePokedexColor = () => {
  const screen = document.getElementById("screen");
  const bg1 = document.getElementById("bg_curve1_left");
  const bg2 = document.getElementById("bg_curve2_left");
  const bg3 = document.getElementById("curve2_left");
  const bg4 = document.getElementById("curve1_right");
  const bg5 = document.getElementById("bg_curve2_right");
  const bg6 = document.getElementById("junction");
  const bg7 = document.getElementById("curve1_left");
  const status = document.getElementById("stats");
  if (screen.classList.length == 0) {
    screen.className = "changeColor";
    status.style.background =
      "-webkit-linear-gradient(top, rgb(249 63 63) 0%, rgb(187, 5, 5) 100%)";
    bg1.style.background = "#1313cd";
    bg2.style.background = "blue";
    bg2.style.boxShadow = "-10px 9px #0e0eae";
    bg3.style.background = "blue";
    bg4.style.background = "blue";
    bg5.style.background = "blue";
    bg5.style.boxShadow = "-10px 9px #0e0eae";
    bg6.style.background =
      "linear-gradient(90deg, rgba(13,13,159,1) 0%, rgba(19,19,190,1) 49%, rgba(13,13,159,1) 100%)";
    bg7.style.background = "#1313cd";
    bg7.style.boxShadow = "-10px 9px #0e0eae";
  } else {
    screen.className = "";
    status.style.background = "";
    bg1.style.background = "";
    bg2.style.background = "";
    bg2.style.boxShadow = "";
    bg3.style.background = "";
    bg4.style.background = "";
    bg5.style.background = "";
    bg5.style.boxShadow = "";
    bg6.style.background = "";
    bg7.style.background = "";
    bg7.style.boxShadow = "";
  }
};

const changeBlueButtonsBg = () => {
  const buttons = document.querySelectorAll(".blueButton");
  for (let i = 0; i < buttons.length; i++) {
    const interval = setInterval(() => {
      const randomBg = Math.round(Math.random() * 9);
      buttons[randomBg].classList.add("bgChange");
      setTimeout(() => {
        buttons[randomBg].classList.remove("bgChange");
      }, 500);
    }, 200);
    setTimeout(() => {
      clearInterval(interval);
    }, 800);
  }
};
