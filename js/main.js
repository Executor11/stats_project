//randomizer
const randomNum = (min, max) => ~~(Math.random() * (max - min + 1) + min);

// progress bar

let lockedRefresher = true;
const progressBar = (progress) => {
  const pieClass = document.querySelector(".pie");
  const leftSide = pieClass.querySelector(".left-side");
  const rightSide = pieClass.querySelector(".right-side");

  const levelCounter = document.querySelector(".level_counter");
  //reset rotation
  pieClass.style.clip = "";
  rightSide.style.transform = "";
  leftSide.style.transform = `rotate(0deg)`;
  //
  let rotate = 0;

  let progressUpper = setInterval(() => {
    rotate++; //increment

    // clear interval
    if (rotate >= progress) {
      lockedRefresher = false;
      window.clearInterval(progressUpper);
    }
    // css changes
    levelCounter.textContent = ~~(rotate * 6.9);
    leftSide.style.transform = `rotate(${rotate * 3.6}deg)`;
    if (rotate >= 50) {
      pieClass.style.clip = "rect(auto, auto, auto, auto)";
      rightSide.style.transform = "rotate(180deg)";
    }
  }, 30);
};
progressBar(70);

// last update timer
const refresher = document.querySelector(".refresh");

const lastUpdateTimer = () => {
  const updater = document.querySelector(".update");
  updater.textContent = "Last update less than 1 min. ago";
  let last_update = new Date().getMinutes();
  setInterval(() => {
    let minNow = new Date().getMinutes();
    updater.textContent = `Last update ${minNow - last_update} min. ago`;
  }, 60000);
};
lastUpdateTimer();

// refresh on click event
let rotation = 0;
refresher.onclick = () => {
  let styles = refresher.style;

  if (!lockedRefresher) {
    styles.transform = `rotate(${(rotation += 180)}deg)`;

    progressBar(70);
    lastUpdateTimer();
  }
  lockedRefresher = true;
};
// after pseudo element content on loading
const loadingRateOfBg = () => {
  const loadingElem = document.querySelectorAll(" figure > .img");
  const playedGames = document.querySelectorAll(" figcaption > .black");
  const statsTag = document.querySelectorAll("strong");
  // stats changer
  [...statsTag].forEach((e) => {
    const target = e.textContent;
    console.log(e.textContent);
    const value = target.endsWith("%") ? target.slice(0, -1) : target;
    let start = 0;
    const interval = setInterval(() => {
      start += target.endsWith("%") ? 1.1 : 16;
      e.textContent = target.endsWith("%") ? start.toFixed(1) + "%" : start;
      if (start >= value) window.clearInterval(interval);
    }, 10);
  });
  // played games load
  [...playedGames].forEach((e) => {
    const value = e.textContent;
    let start = 0;
    const interval = setInterval(() => {
      start += Math.round(Math.random() * 5);
      e.textContent = start;
      if (start >= value) window.clearInterval(interval);
    }, 10);
  });
  // img ::after
  [...loadingElem].forEach((e) => {
    start = 0;
    const interval = setInterval(() => {
      start += Math.random() * 2.5;
      e.setAttribute("data-value", start.toFixed(1) + "%");
      if (start >= 64) window.clearInterval(interval);
    }, 110);
  });
};
loadingRateOfBg();

// last games stats
const lastGamesStats = document.querySelectorAll(
  ".last_games_stats .col > span"
);
[...lastGamesStats].forEach((e, i) => {
  // e.style.height = 0 + "px";
  // e.style.transition = "2s ease";
  e.style.height = randomNum(30, 120) + "px";
  e.style.backgroundColor = i % 2 == 0 ? "rgb(219, 222, 234)" : "#433fd1";
  // console.log(e.style.height);
});
