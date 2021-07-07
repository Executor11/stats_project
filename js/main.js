$(".my_account").on("click", () => {
  // $(".content_renderer").hide().show(300)
  //   .html(`<section class="header">My account</section>
  // <section class="player info">
  //   <div class="character">
  //     <header class="character_header">
  //       <i class="fas fa-cog setting"></i>
  //       <div class="caption">Catunic</div>
  //       <i class="fas fa-sync refresh"></i>
  //     </header>
  //     <div class="level">
  //       <a href="#" class="hero_rank"></a>
  //       <div class="pie-wrapper progress style-2">
  //         <span class="label"></span>
  //         <div class="pie">
  //           <div class="left-side half-circle"></div>
  //           <div class="right-side half-circle"></div>
  //         </div>
  //         <div class="shadow"></div>
  //         <span class="level_counter bold">478</span>
  //       </div>
  //     </div>
  //     <div class="update"></div>
  //   </div>
  //   <div class="role">
  //     <div class="title">Favorite role</div>
  //     <i class="fas fa-ellipsis-h"></i>
  //     <div class="img">
  //       <img src="img/slayer.png" alt="image" />
  //     </div>
  //     <div class="stats">
  //       <div class="win_rate">Win rate <strong>64.1%</strong></div>
  //       <div class="rate">Slayer</div>
  //       <div class="count win_rate">
  //         Played games <strong>1027</strong>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="rank">
  //     <div class="title">Current rank</div>
  //     <i class="fas fa-ellipsis-h"></i>
  //     <div class="img">
  //       <img src="img/diamond.png" alt="image" />
  //     </div>
  //     <div class="stats">
  //       <div class="win_rate">Win rate <strong>70.7%</strong></div>
  //       <div class="rate">
  //         Diamond <span class="green font-12">+168</span>
  //       </div>
  //       <div class="count win_rate">Rating <strong>2832</strong></div>
  //     </div>
  //   </div>
  //   <div class="favourite_hero">
  //     <div class="title">Favorite hero</div>
  //     <i class="fas fa-ellipsis-h"></i>
  //     <div class="img">
  //       <img src="img/anna.png" alt="image" />
  //     </div>
  //     <div class="stats">
  //       <div class="win_rate">Win rate <strong>81.3%</strong></div>
  //       <div class="rate font-18">Anna</div>
  //       <div class="count">
  //         <i class="fas fa-plus font-20 blue bold"></i>
  //         <span class="bold font-20">Healer</span>
  //         <div class="difficulty">
  //           <span class="font-12">Difficulty</span>
  //         </div>
  //         <div class="diffculty">
  //           <i class="fas fa-window-minimize blue font-20"></i>
  //           <i class="fas fa-window-minimize blue font-20"></i>
  //           <i class="fas fa-window-minimize blue font-20"></i>
  //           <i class="fas fa-window-minimize silver font-20"></i>
  //           <i class="fas fa-window-minimize silver font-20"></i>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  // <section class="player statistics">
  //   <div class="battlegrounds">
  //     <div class="title_bg">
  //       <div class="title">Battlegrounds</div>
  //       <i class="fas fa-ellipsis-h"></i>
  //     </div>
  //     <div class="content_bg">
  //       <div class="current_bg">
  //         <figure>
  //           <div class="img img_1" data-value="67.7%"></div>
  //           <figcaption class="font-14 bold">Immortal fight</figcaption>
  //           <figcaption class="silver font-12">
  //             played games <span class="black font-12">456</span>
  //           </figcaption>
  //         </figure>
  //       </div>
  //       <div class="current_bg">
  //         <figure>
  //           <div class="img img_2" data-value="66.3%"></div>
  //           <figcaption class="font-14 bold">Horror garden</figcaption>
  //           <figcaption class="silver font-12">
  //             played games <span class="black font-12">309</span>
  //           </figcaption>
  //         </figure>
  //       </div>
  //       <div class="current_bg">
  //         <figure>
  //           <div class="img img_3" data-value="66.2%"></div>
  //           <figcaption class="font-14 bold">
  //             Celestial temple
  //           </figcaption>
  //           <figcaption class="silver font-12">
  //             played games <span class="black font-12">518</span>
  //           </figcaption>
  //         </figure>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="last_games">
  //     <div class="title_bg">
  //       <div class="title">Summary of recent games</div>
  //       <i class="fas fa-ellipsis-h"></i>
  //     </div>
  //     <div class="last_games_stats">
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //       <div class="col"><span></span><span></span></div>
  //     </div>
  //     <div class="last_games_dates">
  //       <span class="silver font-12" style="margin-left: 10px"
  //         >13.07</span
  //       >
  //       <span class="silver font-12">15.07</span
  //       ><span class="silver font-12">16.07</span
  //       ><span class="silver font-12">19.07</span
  //       ><span class="silver font-12">24.07</span
  //       ><span class="silver font-12">25.07</span
  //       ><span class="silver font-12" style="margin-right: 50px"
  //         >02.08</span
  //       >
  //     </div>
  //     <div class="win_lose">
  //       <span class="silver font-12 win">win</span>
  //       <span class="silver font-12">lose</span>
  //     </div>
  //   </div>`);

  //randomizer
  const randomNum = (min, max) => ~~(Math.random() * (max - min + 1) + min);

  // progress bar

  let lockedRefresher = true;
  const progressBar = progress => {
    const pieClass = $(".pie");
    const leftSide = $(".pie .left-side");
    const rightSide = $(".pie .right-side");

    const levelCounter = $(".level_counter");
    //reset rotation
    pieClass.css("clip", "");
    rightSide.css("transform", ``);
    leftSide.css("transform", `rotate(0deg)`);
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
      levelCounter.text(~~(rotate * 6.9));

      leftSide.css("transform", `rotate(${rotate * 3.6}deg)`);

      if (rotate >= 50) {
        pieClass.css("clip", "rect(auto, auto, auto, auto)");
        rightSide.css("transform", "rotate(180deg)");
      }
    }, 30);
  };
  progressBar(70);

  // last update timer

  const lastUpdateTimer = () => {
    const updater = $(".update");
    let last_update = new Date().getMinutes();

    updater.text("Last update less than 1 min. ago");

    setInterval(() => {
      let minNow = new Date().getMinutes();

      updater.text(`Last update ${minNow - last_update} min. ago`);
    }, 60000);
  };
  lastUpdateTimer();

  // refresh on click event
  let rotation = 0;
  $(".refresh").on("click", () => {
    if (!lockedRefresher) {
      $(".refresh").css({
        transform: `rotate(${(rotation += 180)}deg)`,
      });

      progressBar(70);
      lastUpdateTimer();
    }
    lockedRefresher = true;
  });
  // after pseudo element content on loading
  const loadingRateOfBg = () => {
    const loadingElem = $(" figure > .img");
    const playedGames = $(" figcaption > .black");
    const statsTag = $("strong");
    // stats changer
    [...statsTag].forEach(e => {
      const target = $(e).text();
      const value = target.endsWith("%") ? target.slice(0, -1) : target;
      let start = 0;
      const interval = setInterval(() => {
        start += target.endsWith("%") ? 1.1 / 2 : 16;
        $(e).text(target.endsWith("%") ? start.toFixed(1) + "%" : start);
        if (start >= value) window.clearInterval(interval);
      }, 10);
    });
    // played games load
    [...playedGames].forEach(e => {
      const value = $(e).text();
      let start = 0;
      const interval = setInterval(() => {
        start += randomNum(1, 5);

        $(e).text(start);
        if (start >= value) window.clearInterval(interval);
      }, 10);
    });
    // img ::after
    [...loadingElem].forEach(e => {
      start = 0;
      const interval = setInterval(() => {
        start += Math.random() * 2.5 + 1;
        $(e).attr("data-value", start.toFixed(1) + "%");
        if (start >= 64) window.clearInterval(interval);
      }, 110);
    });
  };
  loadingRateOfBg();

  // last games stats
  const lastGamesStats = $(".last_games_stats .col > span");
  [...lastGamesStats].forEach((e, i) => {
    $(e)
      .css("backgroundColor", i % 2 !== 0 ? "rgb(219, 222, 234)" : "#433fd1")
      .animate(
        {
          height: randomNum(30, 120) + "px",
        },
        2500
      );
  });
});
$(".my_statistics").on("click", () => {
  $(".content_renderer").html("");
});
