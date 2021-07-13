//randomizer
const randomNum = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const arrayRandomizer = array => [...array].sort(() => 0.5 - Math.random());
//
//drop notification
let notificationHided = true;
$(".drop_notification").hide();
$(".notification .fas").on("click", () => {
  if (notificationHided) {
    $(".drop_notification").show();
    notificationHided = false;
  } else {
    $(".drop_notification").hide();
    notificationHided = true;
  }
  console.log("321");
});
$("body").on("click", e => {
  e.stopPropagation();
  if (
    !e.target.classList.contains("notification") &&
    !e.target.classList.contains("fa-bell") &&
    !e.target.classList.contains("drop")
  ) {
    $(".drop_notification").hide();
    notificationHided = true;
  }
});
let num = 3;
$(".drop").on("click", e => {
  e.target.style.backgroundColor = "#fff";
  e.target.style.color = "#000";

  if (num > 0) {
    num--;
    $(".notification").attr("data-value", num);
  }
});
//click
$(".my_account").on("click", () => {
  $(".content_renderer").html(`
  <div id="hellopreloader">
      <div id="hellopreloader_preload"></div>
      <p>
        <a href=""></a>
      </p>
    </div>
  `);
  $(".nav_list .active").removeClass("active");
  $(".my_account").addClass("active");
  setTimeout(() => {
    $(".content_renderer").html(`  <section class="header">My account</section>
    <section class="player info">
      <div class="character">
        <header class="character_header">
          <i class="fas fa-cog setting"></i>
          <div class="caption">MegaOps</div>
          <i class="fas fa-sync refresh"></i>
        </header>
        <div class="level">
          <a href="#" class="hero_rank"></a>
          <div class="pie-wrapper progress style-2">
            <span class="label"></span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
            <span class="level_counter bold">478</span>
          </div>
        </div>
        <div class="update"></div>
      </div>
      <div class="role">
        <div class="title">Favorite role</div>
        <i class="fas fa-ellipsis-h"></i>
        <div class="img ">
        <div class="role_bruiser"></div>
        </div>
        <div class="stats">
          <div class="win_rate">Win rate <strong>64.1%</strong></div>
          <div class="rate">Bruiser</div>
          <div class="count win_rate">
            Played games <strong>1027</strong>
          </div>
        </div>
      </div>
      <div class="rank">
        <div class="title">Current rank</div>
        <i class="fas fa-ellipsis-h"></i>
        <div class="img">
          <img src="img/diamond.png" alt="image" />
        </div>
        <div class="stats">
          <div class="win_rate">Win rate <strong>70.7%</strong></div>
          <div class="rate">
            Diamond <span class="green font-12">+168</span>
          </div>
          <div class="count win_rate">Rating <strong>2832</strong></div>
        </div>
      </div>
      <div class="favourite_hero">
        <div class="title">Favorite hero</div>
        <i class="fas fa-ellipsis-h"></i>
        <div class="img">
          <img src="img/anna.png" alt="image" />
        </div>
        <div class="stats">
          <div class="win_rate">Win rate <strong>61.31%</strong></div>
          <div class="rate font-18">Anna</div>
          <div class="count">
          <div class="healer_wrapper">
            <div class="healer"></div>
            <span class="bold font-20">Healer</span>
            </div>
            <div class="difficulty">
              <span class="font-12">Difficulty</span>
            </div>
            <div class="diffculty">
              <i class="fas fa-window-minimize blue font-20"></i>
              <i class="fas fa-window-minimize blue font-20"></i>
              <i class="fas fa-window-minimize blue font-20"></i>
              <i class="fas fa-window-minimize silver font-20"></i>
              <i class="fas fa-window-minimize silver font-20"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="player statistics">
      <div class="battlegrounds">
        <div class="title_bg">
          <div class="title">Battlegrounds</div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div class="content_bg">
          <div class="current_bg">
            <figure>
              <div class="img img_1" data-value="67.7%"></div>
              <figcaption class="font-14 bold">Immortal fight</figcaption>
              <figcaption class="silver font-12">
                played games <span class="black font-12">456</span>
              </figcaption>
            </figure>
          </div>
          <div class="current_bg">
            <figure>
              <div class="img img_2" data-value="66.3%"></div>
              <figcaption class="font-14 bold">Horror garden</figcaption>
              <figcaption class="silver font-12">
                played games <span class="black font-12">309</span>
              </figcaption>
            </figure>
          </div>
          <div class="current_bg">
            <figure>
              <div class="img img_3" data-value="66.2%"></div>
              <figcaption class="font-14 bold">
                Celestial temple
              </figcaption>
              <figcaption class="silver font-12">
                played games <span class="black font-12">518</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="last_games">
        <div class="title_bg">
          <div class="title">Summary of recent games</div>
          <i class="fas fa-ellipsis-h"></i>
        </div>
        <div class="last_games_stats">
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
          <div class="col"><span></span><span></span></div>
        </div>
        <div class="last_games_dates">
          <span class="silver font-12" style="margin-left: 10px"
            >13.07</span
          >
          <span class="silver font-12">15.07</span
          ><span class="silver font-12">16.07</span
          ><span class="silver font-12">19.07</span
          ><span class="silver font-12">24.07</span
          ><span class="silver font-12">25.07</span
          ><span class="silver font-12" style="margin-right: 50px"
            >02.08</span
          >
        </div>
        <div class="win_lose">
          <span class="silver font-12 win">win</span>
          <span class="silver font-12">lose</span>
        </div>
      </div>
    </section>
    <section class="player played_games">
      <div class="title_played_games">
        <div class="title">Played games</div>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="played_games_content">
        <div class="game">
          <div class="hero">
            <a href="#" class="hero_avatar" id="border_red"></a>
            <div class="hero_name">
              <span class="silver font-12">hero</span>
              <span class="black font-12 bold">Irithel</span>
            </div>
          </div>
          <div class="mode">
            <span class="silver font-12">mode</span>
            <span class="black font-12 bold">Rating game</span>
          </div>
          <div class="map">
            <span class="silver font-12">map</span>
            <span class="black font-12 bold">Celestial temple</span>
          </div>
          <div class="rating">
            <span class="silver font-12">rating</span>
            <span class="black font-12 bold">2832</span>
          </div>
          <div class="result">
            <span class="silver font-12">result</span>
            <span class="font-12 bold red">Defeat</span>
          </div>
          <div class="time">
            <span class="silver font-12">time</span>
            <span class="black font-12 bold">02.08.2021, 18:15</span>
          </div>
          <div class="talents">
            <span class="silver font-12">talents</span>
            <div class="talent">
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
            </div>
          </div>
        </div>
        <div class="game">
          <div class="hero">
            <a href="#" class="hero_avatar"></a>
            <div class="hero_name">
              <span class="silver font-12">hero</span>
              <span class="black font-12 bold">Irithel</span>
            </div>
          </div>
          <div class="mode">
            <span class="silver font-12">mode</span>
            <span class="black font-12 bold">Rating game</span>
          </div>
          <div class="map">
            <span class="silver font-12">map</span>
            <span class="black font-12 bold">Celestial temple</span>
          </div>
          <div class="rating">
            <span class="silver font-12">rating</span>
            <span class="black font-12 bold">2832</span>
          </div>
          <div class="result">
            <span class="silver font-12">result</span>
            <span class="font-12 bold green">Win</span>
          </div>
          <div class="time">
            <span class="silver font-12">time</span>
            <span class="black font-12 bold">02.08.2021, 17:52</span>
          </div>
          <div class="talents">
            <span class="silver font-12">talents</span>
            <div class="talent">
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
            </div>
          </div>
        </div>
        <div class="game">
          <div class="hero">
            <a href="#" class="hero_avatar"></a>
            <div class="hero_name">
              <span class="silver font-12">hero</span>
              <span class="black font-12 bold">Irithel</span>
            </div>
          </div>
          <div class="mode">
            <span class="silver font-12">mode</span>
            <span class="black font-12 bold">Rating game</span>
          </div>
          <div class="map">
            <span class="silver font-12">map</span>
            <span class="black font-12 bold">Celestial temple</span>
          </div>
          <div class="rating">
            <span class="silver font-12">rating</span>
            <span class="black font-12 bold">2832</span>
          </div>
          <div class="result">
            <span class="silver font-12">result</span>
            <span class="font-12 bold green">Win</span>
          </div>
          <div class="time">
            <span class="silver font-12">time</span>
            <span class="black font-12 bold">02.08.2021, 17:20</span>
          </div>
          <div class="talents">
            <span class="silver font-12">talents</span>
            <div class="talent">
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
              <a href="#" class="talent_img"></a>
            </div>
          </div>
        </div>
      </div>
    </section>`);

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

    //random talents
    const talents = $(".talents > .talent");
    const images = [
      "../img/skills/avenging-wrath.png",
      "../img/skills/divine-favor.png",
      "../img/skills/holy-wrath.png",
      "../img/skills/righteous-hammer.png",
      "../img/skills/vindication.png",
      "../img/skills/word-of-glory.png",
    ];
    // console.log(...talents);
    [...talents].forEach(e => {
      const img = arrayRandomizer(images);
      // console.log($(e).children);
      [...$(e).children()].forEach((e, i) => {
        $(e).css("backgroundImage", `url(${img[i]})`);
      });
    });
  }, 1000);

  // progress bar
});
$(".my_statistics").on("click", () => {
  //preloader
  $(".content_renderer").html(`
  <div id="hellopreloader">
      <div id="hellopreloader_preload"></div>
      <p>
        <a href=""></a>
      </p>
    </div>
  `);
  //active
  $(".nav_list .active").removeClass("active");
  $(".my_statistics a").addClass("active");
  //render
  setTimeout(() => {
    $(".content_renderer").html(`
  <section class="header">Statistic</section>
  <section class="search_hero">
        <div class="path">
          <span class="silver font-12">Path</span>
          <select name="path" class="search_hero_select random">
            <option value="2.52.0.8">2.52.0.8</option>
            <option value="2.52.0.6">2.52.0.6</option>
            <option value="2.52.0.2">2.52.0.2</option>
            <option value="2.51.9.8">2.51.9.8</option>
          </select>
        </div>
      <div class="role">
        <span class="silver font-12">Role</span>
        <select name="path" class="search_hero_select random">
          <option value="All">All</option>
          <option value="Healer">Healer</option>
          <option value="Slayer">Slayer</option>
          <option value="Tank">Tank</option>
        </select>
      </div>
      <div class="game_mode">
        <span class="silver font-12">Game mode</span>
        <select name="path" class="search_hero_select random">
          <option value="Rating">Rating</option>
          <option value="Solo">Solo</option>
          <option value="Friendly">Friendly</option>
          <option value="Normal">Normal</option>
        </select>
      </div>
      <div class="map">
        <span class="silver font-12">Map</span>
        <select name="path" class="search_hero_select random">
          <option value="Temple">Temple</option>
          <option value="Road">Road</option>
          <option value="Walley">Walley</option>
          <option value="Free">Free</option>
        </select>
      </div>
      <div class="hero_rank">
        <span class="silver font-12">Hero rank</span>
        <select name="path" class="search_hero_select random">
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Diamond">Diamond</option>
          <option value="Bronse">Bronse</option>
        </select>
      </div>
      <div class="graphic_mode">
        <span class="silver font-12">Sorting mode</span>
        <select name="filter_mode" class="search_hero_select filter_mode">
          <option value="winRate">Win Rate</option>
          <option value="playedGames">Played Games</option>
        </select>
      </div>
      <div class="hero">
        <span class="silver font-12">Hero</span>
        <select name="path" class="search_hero_select random">
          <option value="All">All</option>
          <option value="Healer">Healer</option>
          <option value="Slayer">Slayer</option>
          <option value="Tank">Tank</option>
        </select>
      </div>
      <div class="search">
        <button class="search_btn">Search</button>
      </div>
  </section>
  <section class="search_result">
    <section class="header">
        <div class="hero">
          <div class="hero_name">
            <span class="silver font-14">Hero</span>
          </div>
        </div>
        <div class="mode">
          <span class="silver font-14">Win Rate %</span>
        </div>
        <div class="map">
          <span class="silver font-14">Changes %</span>
        </div>
        <div class="rating">
          <span class="silver font-14">Assurance %</span>
        </div>
        <div class="result">
          <span class="silver font-14">Selection %</span>
        </div>
        <div class="time">
          <span class="silver font-14">Banned %</span>
        </div>
        <div class="time">
          <span class="silver font-14">Played Games</span>
        </div>
        <div class="talents">
          <span class="silver font-14">Talents</span>
          </div>
    </section>
    
  
  </section>
  `);
    //hero result section for find heroes
    const heroResult = [
      {
        img: "../img/heroes/Ana_square_tile.png",
        name: "Anna",
        winRate: 61.62,
        changes: "+1.22",
        assurance: "+7.17",
        selection: 9.81,
        banned: 3.11,
        playedGames: 981,
      },
      {
        img: "../img/irel.jpg",
        name: "Yrel",
        winRate: 59.22,
        changes: "-2.01",
        assurance: "+3.17",
        selection: 4.66,
        banned: 1.37,
        playedGames: 712,
      },
      {
        img: "../img/heroes/sylvana.jpg",
        name: "Sylvana",
        winRate: 57.95,
        changes: "-1.71",
        assurance: "+9.55",
        selection: 4.22,
        banned: 6.59,
        playedGames: 939,
      },
      {
        img: "../img/heroes/thrall.jpg",
        name: "Thrall",
        winRate: 56.72,
        changes: "+5.61",
        assurance: "-3.97",
        selection: 4.66,
        banned: 1.37,
        playedGames: 967,
      },
      {
        img: "../img/heroes/Uther_Hero_Portrait.png",
        name: "Uther",
        winRate: 55.02,
        changes: "+3.28",
        assurance: "+1.33",
        selection: 8.91,
        banned: 3.87,
        playedGames: 669,
      },
      {
        img: "../img/heroes/reksar.jpg",
        name: "Rexxar",
        winRate: 53.55,
        changes: "+1.11",
        assurance: "-5.66",
        selection: 7.99,
        banned: 8.57,
        playedGames: 481,
      },
      {
        img: "../img/heroes/cho.jpg",
        name: "Cho",
        winRate: 51.02,
        changes: "-2.21",
        assurance: "-1.11",
        selection: 9.16,
        banned: 4.17,
        playedGames: 557,
      },
      {
        img: "../img/heroes/gall.jpg",
        name: "Gall",
        winRate: 50.51,
        changes: "+5.31",
        assurance: "+1.17",
        selection: 6.11,
        banned: 3.26,
        playedGames: 711,
      },
      {
        img: "../img/heroes/Anduin_square_tile.png",
        name: "Anduin",
        winRate: 50.22,
        changes: "+3.01",
        assurance: "-1.17",
        selection: 6.16,
        banned: 2.37,
        playedGames: 717,
      },

      {
        img: "../img/heroes/Jaina_square_tile.png",
        name: "Jaina",
        winRate: 49.26,
        changes: "+8.01",
        assurance: "-1.17",
        selection: 1.66,
        banned: 6.37,
        playedGames: 517,
      },
    ];

    heroResult.forEach(e => {
      $(".search_result").append(`
    <div class="hero_played">
      <div class="hero">
        <div class="hero_name">
          <div  class="hero_avatar" style="background-image: url(${
            e.img
          })"></div>
            <span class="black font-18">${e.name}</span>
          </div>
        </div>
  <div class="mode">
    <span class="black font-14">${e.winRate}</span>
  </div>
  <div class="map">
    <span class=" font-14 ${+e.changes >= 0 ? "green" : "red"}">${
        e.changes
      }</span>
  </div>
  <div class="rating">
    <span class=" font-14 ${+e.assurance >= 0 ? "green" : "red"}">${
        e.assurance
      }</span>
  </div>
  <div class="result">
    <span class="black font-14">${e.selection}</span>
  </div>
  <div class="time">
    <span class="black font-14">${e.banned}</span>
  </div>
  <div class="time playedGames">
    <span class="black font-14">${e.playedGames}</span>
  </div>
  <div class="talents">
    <span class=" font-14 show_btn">Show</span>
    </div>
</div>`);
    });
    // filter by Filter mode - played games and win rate
    $(".filter_mode").on("change", e => {
      if (e.target.value == "winRate") {
        //if win rate sort
        $(".search_result")
          .children("div")
          .sort(
            (a, b) =>
              +$(b).children(".mode").text().trim() -
              +$(a).children(".mode").text().trim()
          )
          .appendTo(".search_result");
      } else {
        //if played games sort
        $(".search_result")
          .children("div")
          .sort(
            (a, b) =>
              +$(b).children(".playedGames").text().trim() -
              +$(a).children(".playedGames").text().trim()
          )
          .appendTo(".search_result");
      }
    });
    // change options
    $(".random").on("change", () => {
      $(".search_result")
        .children("div")
        .sort(() => 0.5 - Math.random())
        .appendTo(".search_result");
    });
    //click on search
    $(".search .search_btn").on("click", () => {
      $(".search_result")
        .children("div")
        .sort(() => 0.5 - Math.random())
        .appendTo(".search_result");
    });
  }, 500);
});
// top players section
$(".my_top_players").on("click", () => {
  //preloader.
  $(".content_renderer").html(`
  <div id="hellopreloader">
      <div id="hellopreloader_preload"></div>
      <p>
        <a href=""></a>
      </p>
    </div>
  `);

  //active

  $(".nav_list .active").removeClass("active");
  $(".my_top_players a").addClass("active");
  setTimeout(() => {
    $(".content_renderer").html(`
  <section class="header">Top players</section>
          <section class="top_five">
          </section>
          <section class="top_ten_player">
            <header class="top_ten_header">
              <div class="battletag">Battletag</div>
              <div class="rating">Rating</div>
              <div class="win_rate">Win rate %</div>
              <div class="played_games">Played games</div>
              <div class="wins">Win games</div>
              <div class="fav_role">Favorite role</div>
              <div class="fav_hero">Favorite heroes</div>
            </header>
          </section>

  `);
    // top 5 player
    const topFivePlayers = [
      {
        position: 1,
        nickname: "Cris",
        avatar: "../img/avatars/avatar1.jpg",
        rating: 10815,
        win: 537,
        lose: 314,
      },
      {
        position: 2,
        nickname: "TotalyMew",
        avatar: "../img/avatars/avatar2.jfif",
        rating: 10724,
        win: 652,
        lose: 110,
      },
      {
        position: 3,
        nickname: "ZEACris",
        avatar: "../img/avatars/avatar3.png",
        rating: 10116,
        win: 488,
        lose: 401,
      },
      {
        position: 4,
        nickname: "Nano",
        avatar: "../img/avatars/avatar4.jpg",
        rating: 10087,
        win: 467,
        lose: 229,
      },
      {
        position: 5,
        nickname: "Mascarade",
        avatar: "../img/avatars/avatar5.png",
        rating: 10052,
        win: 430,
        lose: 187,
      },
    ];
    topFivePlayers.forEach(e => {
      const winRate = (e.win / (e.win + e.lose)) * 100;
      $(".top_five").append(`
       <div class="top_five_player">
              <header class="position_nickname">
                <div class="position"
                  > <div class="crown"></div><div class="center font-10">${e.position}</div></div
                >
                <div class="name font-20 bold">${e.nickname}</div>
              </header>
              <div class="avatar"
              style="background-image: url(${e.avatar})"
              ></div>
              <div class="raiting font-12"
                ><span class="font-12 silver">Raiting</span> ${e.rating}</div
              >
              <div class="win_lose_rate">
                <div class="win_rating silver font-12"
                style="width: ${winRate}%"
                >${e.win}</div>
                <div class="lose_rating silver font-12">${e.lose}</div>
              </div>
              <div class="win_lose_rate_1">
                <div class="win_rating_1 silver font-12">Win</div>
                <div class="lose_rating_1 silver font-12">Lose</div>
              </div>
            </div>
            
  `);
    });
    // top 5-10 rating
    const topTenPlayers = [
      {
        rank: 6,
        battletag: "TLHasuObs",
        rating: 10005,
        winRate: 55.9,
        played: 403,
        win: 244,
        role: "../img/roles/bruiser.png",
        favoriteHero: [
          "../img/heroes/Jaina_square_tile.png",
          "../img/heroes/garrosh.jpg",
          "../img/heroes/thrall.jpg",
        ],
      },
      {
        rank: 7,
        battletag: "hornyD",
        rating: 9969,
        winRate: 72.7,
        played: 239,
        win: 145,
        role: "../img/roles/ranged.png",
        favoriteHero: [
          "../img/heroes/hanzo.jpg",
          "../img/heroes/gall.jpg",
          "../img/heroes/keltuzad.jpg",
        ],
      },
      {
        rank: 8,
        battletag: "ElMatador",
        rating: 9605,
        winRate: 88.3,
        played: 322,
        win: 176,
        role: "../img/roles/support.png",
        favoriteHero: [
          "../img/heroes/mediv.jpg",
          "../img/heroes/zeratul.jpg",
          "../img/heroes/zarya.jpg",
        ],
      },
      {
        rank: 9,
        battletag: "Vasko",
        rating: 9426,
        winRate: 68.1,
        played: 132,
        win: 74,
        role: "../img/roles/melee.png",
        favoriteHero: [
          "../img/heroes/dva.jpg",
          "../img/heroes/illidan.jpg",
          "../img/heroes/maiev.jpg",
        ],
      },
      {
        rank: 10,
        battletag: "Executor",
        rating: 9422,
        winRate: 54.4,
        played: 584,
        win: 325,
        role: "../img/roles/tank.png",
        favoriteHero: [
          "../img/heroes/tyrael.jpg",
          "../img/heroes/sylvana.jpg",
          "../img/heroes/Uther_Hero_Portrait.png",
        ],
      },
    ];
    topTenPlayers.forEach(e => {
      $(".top_ten_player").append(`
    <div class="player_info">
              <div class="battletag"
                >&nbsp;&nbsp; ${e.rank}. &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; ${e.battletag}</div
              >
              <div class="rating">${e.rating}</div>
              <div class="win_rate">${e.winRate}</div>
              <div class="played_games">${e.played}</div>
              <div class="wins">${e.win}</div>
              <div class="fav_role">
                <div class="role" 
                style="background-image: url(${e.role})"
                ></div>
              </div>
              <div class="fav_hero">
                <div class="hero" style="background-image: url('${e.favoriteHero[0]}')"></div>
                <div class="hero" style="background-image: url('${e.favoriteHero[1]}')"></div>
                <div class="hero" style="background-image: url('${e.favoriteHero[2]}')"></div>
              </div>
            </div>`);
    });
  }, 500);
});

$(".my_guides").on("click", () => {
  //preloader.
  $(".content_renderer").html(`
   <div id="hellopreloader">
       <div id="hellopreloader_preload"></div>
       <p>
         <a href=""></a>
       </p>
     </div>
   `);

  //active
  $(".nav_list .active").removeClass("active");
  $(".my_guides a").addClass("active");
  setTimeout(() => {
    $(".content_renderer").html(`
  <div class="guides_main_wrapper">
  <section class="header">Guides</section>
  <section class="popular_heroes">
    <header class="head_for_container">
      <div class="caption black font-20">Popular heroes</div>
      <div class="all_heroes silver font-14"
        >All heroes &nbsp; &nbsp; &rarr;</div
      >
    </header>
    <section class="hero_wrapper">
      
    </section>
  </section>
  <section class="trainers">
    <header class="head_for_container">
      <div class="caption black font-20">Trainers</div>
      <div class="all_heroes silver font-14"
        >All trainers &nbsp; &nbsp; &rarr;</div
      >
    </header>
    <div class="trainer_wrapper">
      
    </div>
  </section>
  <section class="popular_guides">
    <header class="head_for_container">
      <select name="guides" class="guides">
        <option value="popular">Popular</option>
        <option value="viewed">Most viewed</option>
        <option value="liked">Most liked</option>
        <option value="shared">Most shared</option>
      </select>
      <div class="all_heroes silver font-14"
        >All guides &nbsp; &nbsp; &rarr;</div
      >
    </header>
    <div class="guides_wrapper">
      
      </div>
    </div>
  </section>
</div>
  `);

    class Hero {
      constructor(name, roleImgUrl, role, heroImageUrl) {
        this.name = name;
        this.roleImgUrl = roleImgUrl;
        this.role = role;
        this.heroImageUrl = heroImageUrl;
      }
    }
    // list of heroes
    const heroFromGuides = [
      new Hero(
        "Tiranda",
        "/img/roles/healer.png",
        "Healer",
        "/img/full_hero/tiranda.png"
      ),
      new Hero(
        "Sylvana",
        "/img/roles/ranged.png",
        "Range",
        "/img/full_hero/sylvana.png"
      ),
      new Hero(
        "Kel'Tuzad",
        "/img/roles/ranged.png",
        "Range",
        "/img/full_hero/keltuzad.png"
      ),

      new Hero(
        "Tyrael",
        "/img/roles/tank.png",
        "Tank",
        "/img/full_hero/tyrael.png"
      ),
      new Hero(
        "Jaina",
        "/img/roles/support.png",
        "Support",
        "/img/full_hero/jaina.png"
      ),
    ];
    heroFromGuides.forEach(e => {
      $(".hero_wrapper").append(`
    <div class="hero">
          <div class="name"
            ><div class="hero_name bold font-18"> &nbsp; ${e.name}</div>
            <div class="role font-14"
              >
              <div class="healer"
              style="background-image: url(${e.roleImgUrl})"
              ></div> ${e.role}</div
            >
          </div>
          <img src="${e.heroImageUrl}" class="hero_image" />
        </div>`);
    });
    // heroes on click interactive
    $(".hero_wrapper .hero").on("click", function (e) {
      //preloader.
      $(".content_renderer").html(`
   <div id="hellopreloader">
       <div id="hellopreloader_preload"></div>
       <p>
         <a href=""></a>
       </p>
     </div>
   `);
      //content renderer

      setTimeout(() => {
        $(".content_renderer").html(`
    <div class="hero_info_wrapper">
    <section class="header">Tyrael</section>
    <div class="content_hero_info">
      <div class="description">
        <div class="head silver">Prince of the light</div>
        <div class="hero_description">
         
        </div>
        <div class="popular_talents">
          <header class="head_for_container">
            <div class="caption black font-20">Popular talents</div>
            <div class="all_heroes silver font-14">
              All &nbsp; &nbsp; &rarr;
            </div>
          </header>
          <div class="container">
            <div class="head">
              <div class="win_rate">Win rate</div>
              <div class="talents">Talents</div>
              <div class="copy">Copy</div>
            </div>
            <div class="metas">
              
            </div>
          </div>
        </div>
      </div>
      <div class="big_hero"></div>
    </div>
  </div>
    `);

        //hero decription
        const heroDescription = {
          about: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Qui voluptatum odit numquam porro corporis voluptate veniam`,
          role: "Tank",
          roleLogo: "/img/roles/tank.png",
          roleType: "Melee",
          game: "WoW",
          gameLogo: "",
          winRate: 55.3,
        };
        $(".hero_description").append(`
                <div class="desc">
                  <div class="about font-10">
                    ${heroDescription.about}
                  </div>
                  <div class="role">
                    <div class="role_logo"
                    style="background-image: url('${heroDescription.roleLogo}')"
                    ></div>
                    ${heroDescription.role}
                    <div class="silver font-12">&nbsp; (${heroDescription.roleType})</div>
                  </div>
                  <div class="game">
                    <div class="game_logo"></div>
                    &nbsp; ${heroDescription.game}
                  </div>
                  <div class="win_rate font-12">
                    <div class="blue font-12">Win rate</div>
                    &nbsp; ${heroDescription.winRate}%
                  </div>
                  
          
    `);
        //atrr append
        $(".hero_description").append(`
      <div class="attributes"></div>
      `);
        //hero attributes
        const heroAttributes = [
          {
            logo: "/img/roles/melee.png",
            attr: "Damage",
            diff: [
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "silver_bg",
              "silver_bg",
              "silver_bg",
              "silver_bg",
              "silver_bg",
            ],
          },
          {
            logo: "/img/roles/healer.png",
            attr: "Support",
            diff: [
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "silver_bg",
              "silver_bg",
              "silver_bg",
              "silver_bg",
            ],
          },
          {
            logo: "/img/roles/tank.png",
            attr: "Vitality",
            diff: [
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "silver_bg",
              "silver_bg",
            ],
          },
          {
            logo: "/img/roles/support.png",
            attr: "Difficulty",
            diff: [
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "blue_bg",
              "silver_bg",
              "silver_bg",
            ],
          },
        ];
        heroAttributes.forEach(e => {
          $(".attributes").append(`
    <div class="damage">
            <div class="img_logo"
            style="background-image: url('${e.logo}')"
            ></div>
            <div class="caption font-10">
              <div class="attr">${e.attr}</div>
              <div class="lines">
                <div class="line ${e.diff[0]}"></div>
                <div class="line ${e.diff[1]}" ></div>
                <div class="line ${e.diff[2]}"></div>
                <div class="line ${e.diff[3]}"></div>
                <div class="line ${e.diff[4]}"></div>
                <div class="line ${e.diff[5]}"></div>
                <div class="line ${e.diff[6]}"></div>
                <div class="line ${e.diff[7]}"></div>
                <div class="line ${e.diff[8]}"></div>
                <div class="line ${e.diff[9]}"></div>
              </div>
            </div>
          </div>`);
        });
        const metaTalents = [
          {
            winRate: 55.3,
            talents: [
              "/img/skills/tyrael1.png",
              "/img/skills/tyrael2.png",
              "/img/skills/tyrael3.png",
              "/img/skills/tyrael4.png",
              "/img/skills/tyrael5.png",
              "/img/skills/tyrael6.png",
            ],
          },
          {
            winRate: 49.6,
            talents: [
              "/img/skills/tyrael4.png",
              "/img/skills/tyrael5.png",
              "/img/skills/tyrael6.png",
              "/img/skills/tyrael1.png",
              "/img/skills/tyrael2.png",
              "/img/skills/tyrael3.png",
            ],
          },
          {
            winRate: 47.2,
            talents: [
              "/img/skills/tyrael5.png",
              "/img/skills/tyrael6.png",
              "/img/skills/tyrael1.png",
              "/img/skills/tyrael4.png",
              "/img/skills/tyrael2.png",
              "/img/skills/tyrael3.png",
            ],
          },
        ];
        metaTalents.forEach(e => {
          $(".metas").append(`
      <div class="meta">
                <div class="win_rate">${e.winRate}%</div>
                <div class="talents">
                  <div class="talent"
                  style="background-image: url('${e.talents[0]}')"
                  ></div>
                  <div class="talent"
                  style="background-image: url('${e.talents[1]}')"
                  ></div>
                  <div class="talent"
                  style="background-image: url('${e.talents[2]}')"
                  ></div>
                  <div class="talent"
                  style="background-image: url('${e.talents[3]}')"
                  ></div>
                  <div class="talent"
                  style="background-image: url('${e.talents[4]}')"
                  ></div>
                  <div class="talent"
                  style="background-image: url('${e.talents[5]}')"
                  ></div>
                </div>
                <div class="copy_talents blue ">&#128461;</div>
              </div>
      `);
        });
      }, 500);
    });

    class Trainer {
      constructor(name, img) {
        this.name = name;
        this.imageUrl = img;
      }
    }
    // list of trainers
    const trainersArray = [
      new Trainer("Stella", "/img/avatars/1.jpg"),
      new Trainer("IvanS", "/img/avatars/2.jpg"),
      new Trainer("Fan", "/img/avatars/3.jpg"),
      new Trainer("LarryDavid", "/img/avatars/4.jpg"),
      new Trainer("InnaDakota", "/img/avatars/5.jpg"),
      new Trainer("adrenaline", "/img/avatars/6.jpg"),
      new Trainer("KNIP", "/img/avatars/7.jpg"),
      new Trainer("Qepi", "/img/avatars/8.jfif"),
    ];
    trainersArray.forEach(e => {
      $(".trainer_wrapper").append(`
    <div class="trainer">
                <div class="avatar"
                style="background-image: url(${e.imageUrl})"
                ></div>
                <div class="name font-12">${e.name}</div>
             </div>
    `);
    });
    //guides description
    const guidesInfo = [
      {
        description: "Jaina Pradmure. Admiral daughter.",
        backgroundImg: "/img/guides_bg/jaina.jpg",
        author: "IvanS",
        authorAvatar: "/img/avatars/2.jpg",
        postedDate: "02 Dec 2020",
        likes: 3742,
        comments: 58,
        views: 6931,
        iLiked: false,
      },
      {
        description: "Tracer. Always everywhere.",
        backgroundImg: "/img/guides_bg/tracer.jpg",
        author: "InnaDakota",
        authorAvatar: "/img/avatars/5.jpg",
        postedDate: "28 Nov 2020",
        likes: 2029,
        comments: 14,
        views: 4200,
        iLiked: true,
      },
      {
        description: "Whitemane. Fury of light.",
        backgroundImg: "/img/guides_bg/Whitemane.jpg",
        author: "adrenaline",
        authorAvatar: "/img/avatars/6.jpg",
        postedDate: "18 Nov 2020",
        likes: 1728,
        comments: 23,
        views: 5946,
        iLiked: false,
      },
      {
        description: "Chromie. We have all the time in the world!",
        backgroundImg: "/img/guides_bg/chromie.jpg",
        author: "KNIP",
        authorAvatar: "/img/avatars/7.jpg",
        postedDate: "28 Oct 2020",
        likes: 4602,
        comments: 41,
        views: 5496,
        iLiked: false,
      },
      {
        description: "from D.VA, with love.",
        backgroundImg: "/img/guides_bg/dva.jpg",
        author: "InnaDakota",
        authorAvatar: "/img/avatars/5.jpg",
        postedDate: "18 Oct 2020",
        likes: 4512,
        comments: 17,
        views: 8150,
        iLiked: false,
      },
      {
        description: "Kel'Thas. Walking flame.",
        backgroundImg: "/img/guides_bg/keltas.png",
        author: "Fan",
        authorAvatar: "/img/avatars/3.jpg",
        postedDate: "08 Oct 2020",
        likes: 849,
        comments: 29,
        views: 1062,
        iLiked: false,
      },
      {
        description: "Nova. Ghost of the Nexxus.",
        backgroundImg: "/img/guides_bg/nova.jpg",
        author: "LarryDavid",
        authorAvatar: "/img/avatars/4.jpg",
        postedDate: "07 Oct 2020",
        likes: 5281,
        comments: 33,
        views: 8157,
        iLiked: false,
      },
      {
        description: "Arthas. No king rules forever.",
        backgroundImg: "/img/guides_bg/Arthas.jpg",
        author: "IvanS",
        authorAvatar: "/img/avatars/2.jpg",
        postedDate: "27 Sep 2020",
        likes: 1895,
        comments: 12,
        views: 3947,
        iLiked: true,
      },
    ];
    guidesInfo.forEach(e => {
      $(".guides_wrapper").append(`
  <div class="guide">
        <div class="head"
        style="background-image: url(${e.backgroundImg})"
        ></div>
        <div class="caption">${e.description}</div>
        <div class="who_posted">
          <div class="avatar" 
          style="background-image: url(${e.authorAvatar})"
          ></div>
          <div class="author">
            <div class="name font-16">${e.author}</div>
            <div class="date silver font-12">${e.postedDate}</div>
          </div>
        </div>
        <div class="info">
          <div class="like font-12 silver"
            ><div class="${e.iLiked ? "red" : "silver"} love">&#9825;</div> ${
        e.likes
      }</div
          >
          <div class="comment silver font-12"
            ><i class="far fa-comment-alt"></i> ${e.comments}</div
          >
          <div class="views silver font-12"
            ><i class="fas fa-eye"></i> ${e.views}</div
          >
        </div>
  `);
    });
  }, 500);
});
