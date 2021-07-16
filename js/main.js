import Statistic from "./pages/statistic.js";
import Account from "./pages/my_account.js";
import TopPlayers from "./pages/top_players.js";
import Guides from "./pages/guides.js";
import Chat from "./pages/chat.js";

//randomizer
const randomNum = (min, max) => ~~(Math.random() * (max - min + 1) + min);
const arrayRandomizer = array => [...array].sort(() => 0.5 - Math.random());
//
//app render
const app = $(".content_renderer");

//preloader start

const preloader = () => {
  app.html(`
  <div id="hellopreloader">
      <div id="hellopreloader_preload"></div>
      <p>
        <a href=""></a>
      </p>
    </div>
  `);
};
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
});
//notification hide
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

// drop menu
$(window).on("resize", () => {
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    let menuDropped = false;
    $(".fa-bars").on("click", () => {
      if (!menuDropped) {
        $(".nav ul").show();
        menuDropped = true;
      } else {
        $(".nav ul").hide();
        menuDropped = false;
      }
    });
  }
  if (window.screen.width >= 768) {
    $(".nav ul").show();
    menuDropped = true;
  }
});
//click my account
$(".my_account ").on("click", () => {
  const myAccount = new Account();
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    menuDropped = false;
  }
  preloader();
  $(".nav_list .active").removeClass("active");
  $(".my_account").addClass("active");
  setTimeout(() => {
    app.html(myAccount.markup());

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
        let start = 0;
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
      "./img/skills/avenging-wrath.png",
      "./img/skills/divine-favor.png",
      "./img/skills/holy-wrath.png",
      "./img/skills/righteous-hammer.png",
      "./img/skills/vindication.png",
      "./img/skills/word-of-glory.png",
    ];
    // console.log(...talents);
    [...talents].forEach(e => {
      const img = arrayRandomizer(images);
      [...$(e).children()].forEach((e, i) => {
        $(e).css("backgroundImage", `url(${img[i]})`);
      });
    });
  }, 1000);

  // progress bar
});
$(".my_statistics a").on("click", () => {
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    menuDropped = false;
  }
  const statisticPage = new Statistic();
  // preloader
  preloader();
  //active
  $(".nav_list .active").removeClass("active");
  $(".my_statistics a").addClass("active");
  //render
  setTimeout(() => {
    app.html(statisticPage.markup());

    const heroResult = statisticPage.heroResult();

    statisticPage.appendSearchResults(heroResult);
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
$(".my_top_players a").on("click", () => {
  const topPlayers = new TopPlayers();
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    menuDropped = false;
  }
  //preloader.
  preloader();

  //active

  $(".nav_list .active").removeClass("active");
  $(".my_top_players a").addClass("active");
  setTimeout(() => {
    app.html(topPlayers.markup());
    // top 5 player
    topPlayers.topFiveInfoRender(topPlayers.topFive());
    // top 5-10 rating

    topPlayers.topTenInfoRenderer(topPlayers.topTen());
  }, 500);
});

$(".my_guides a").on("click", () => {
  const guides = new Guides();
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    menuDropped = false;
  }
  //preloader.
  preloader();

  //active
  $(".nav_list .active").removeClass("active");
  $(".my_guides a").addClass("active");
  setTimeout(() => {
    app.html(guides.markup());

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
        "./img/roles/healer.png",
        "Healer",
        "./img/full_hero/tiranda.png"
      ),
      new Hero(
        "Sylvana",
        "./img/roles/ranged.png",
        "Range",
        "./img/full_hero/sylvana.png"
      ),
      new Hero(
        "Kel'Tuzad",
        "./img/roles/ranged.png",
        "Range",
        "./img/full_hero/keltuzad.png"
      ),

      new Hero(
        "Tyrael",
        "./img/roles/tank.png",
        "Tank",
        "./img/full_hero/tyrael.png"
      ),
      new Hero(
        "Jaina",
        "./img/roles/support.png",
        "Support",
        "./img/full_hero/jaina.png"
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
      preloader();
      //content renderer

      setTimeout(() => {
        app.html(`
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
          roleLogo: "./img/roles/tank.png",
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
            logo: "./img/roles/melee.png",
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
            logo: "./img/roles/healer.png",
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
            logo: "./img/roles/tank.png",
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
            logo: "./img/roles/support.png",
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
              "./img/skills/tyrael1.png",
              "./img/skills/tyrael2.png",
              "./img/skills/tyrael3.png",
              "./img/skills/tyrael4.png",
              "./img/skills/tyrael5.png",
              "./img/skills/tyrael6.png",
            ],
          },
          {
            winRate: 49.6,
            talents: [
              "./img/skills/tyrael4.png",
              "./img/skills/tyrael5.png",
              "./img/skills/tyrael6.png",
              "./img/skills/tyrael1.png",
              "./img/skills/tyrael2.png",
              "./img/skills/tyrael3.png",
            ],
          },
          {
            winRate: 47.2,
            talents: [
              "./img/skills/tyrael5.png",
              "./img/skills/tyrael6.png",
              "./img/skills/tyrael1.png",
              "./img/skills/tyrael4.png",
              "./img/skills/tyrael2.png",
              "./img/skills/tyrael3.png",
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
      new Trainer("Stella", "./img/avatars/1.jpg"),
      new Trainer("IvanS", "./img/avatars/2.jpg"),
      new Trainer("Fan", "./img/avatars/3.jpg"),
      new Trainer("LarryDavid", "./img/avatars/4.jpg"),
      new Trainer("InnaDakota", "./img/avatars/5.jpg"),
      new Trainer("adrenaline", "./img/avatars/6.jpg"),
      new Trainer("KNIP", "./img/avatars/7.jpg"),
      new Trainer("Qepi", "./img/avatars/8.jfif"),
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
        backgroundImg: "./img/guides_bg/jaina.jpg",
        author: "IvanS",
        authorAvatar: "./img/avatars/2.jpg",
        postedDate: "02 Dec 2020",
        likes: 3742,
        comments: 58,
        views: 6931,
        iLiked: false,
      },
      {
        description: "Tracer. Always everywhere.",
        backgroundImg: "./img/guides_bg/tracer.jpg",
        author: "InnaDakota",
        authorAvatar: "./img/avatars/5.jpg",
        postedDate: "28 Nov 2020",
        likes: 2029,
        comments: 14,
        views: 4200,
        iLiked: true,
      },
      {
        description: "Whitemane. Fury of light.",
        backgroundImg: "./img/guides_bg/Whitemane.jpg",
        author: "adrenaline",
        authorAvatar: "./img/avatars/6.jpg",
        postedDate: "18 Nov 2020",
        likes: 1728,
        comments: 23,
        views: 5946,
        iLiked: false,
      },
      {
        description: "Chromie. We have all the time in the world!",
        backgroundImg: "./img/guides_bg/chromie.jpg",
        author: "KNIP",
        authorAvatar: "./img/avatars/7.jpg",
        postedDate: "28 Oct 2020",
        likes: 4602,
        comments: 41,
        views: 5496,
        iLiked: false,
      },
      {
        description: "from D.VA, with love.",
        backgroundImg: "./img/guides_bg/dva.jpg",
        author: "InnaDakota",
        authorAvatar: "./img/avatars/5.jpg",
        postedDate: "18 Oct 2020",
        likes: 4512,
        comments: 17,
        views: 8150,
        iLiked: false,
      },
      {
        description: "Kel'Thas. Walking flame.",
        backgroundImg: "./img/guides_bg/keltas.png",
        author: "Fan",
        authorAvatar: "./img/avatars/3.jpg",
        postedDate: "08 Oct 2020",
        likes: 849,
        comments: 29,
        views: 1062,
        iLiked: false,
      },
      {
        description: "Nova. Ghost of the Nexxus.",
        backgroundImg: "./img/guides_bg/nova.jpg",
        author: "LarryDavid",
        authorAvatar: "./img/avatars/4.jpg",
        postedDate: "07 Oct 2020",
        likes: 5281,
        comments: 33,
        views: 8157,
        iLiked: false,
      },
      {
        description: "Arthas. No king rules forever.",
        backgroundImg: "./img/guides_bg/Arthas.jpg",
        author: "IvanS",
        authorAvatar: "./img/avatars/2.jpg",
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

$(".header_account-mngr .chat").on("click", () => {
  if (window.screen.width <= 768) {
    $(".nav ul").hide();
    menuDropped = false;
  }
  preloader();
  setTimeout(() => {
    app.html(`
  <section class="message_content_wrapper">
            <section class="header"
              >InnaDakota
              <i class="fas fa-ellipsis-h font-20" aria-hidden="true"></i>
            </section>
            <div class="chat_box">
              <section class="chat">
                <div class="messages_box">
                  <div class="message">
                    <div class="avatar" style="background-image: url('./img/avatars/avatar5.png')"></div>
                    <div class="message_content">
                      <div class="name flex font-12">
                        InnaDacota
                        <div class="date font-12 silver">11 min ago.</div>
                      </div>

                      <div class="content silver font-12">
                        Hello can your help me?
                      </div>
                      <div class="content silver font-12">
                        I'am under the water
                      </div>
                    </div>
                  </div>

                  <div class="message">
                    <div class="avatar" style="background-image: url('./img/avatar2.jpg')"></div>
                    <div class="message_content last_message">
                      <div class="name flex font-12">
                        MegaOps
                        <div class="date font-12 silver">10 min ago.</div>
                      </div>

                      <div class="content silver font-12">
                        Oh its so crazy!!
                      </div>
                      <div class="content silver font-12">
                        Wait 30 min. and I come to help :DD
                      </div>
                    </div>
                  </div>
                </div>

                <div class="send_message">
                  <div class="tools">
                    <div class="left"
                      ><i class="far fa-grin"></i>
                      <i class="fas fa-italic"></i>
                      <i class="fas fa-bold"></i>
                      <i class="fas fa-folder"><input type="file" class="files"/></i
                    ></div>

                    <div class="send">Send</div>
                  </div>
                  <textarea class="text font-14 silver"></textarea>
                </div>
              </section>
              <section class="friends">
                <div class="head">
                  <span class="font-12 silver">Personal messages</span>
                  <i class="fas fa-chevron-up"></i>
                </div>
              </section>
              
            </div>
          </section>
  
  `);
    // list of friends add
    class FriendList {
      constructor(avatar, name, time, unreads) {
        this.avatar = avatar;
        this.name = name;
        this.time = time;
        this.unreads = unreads;
      }
    }
    const friends = [
      new FriendList("./img/avatars/1.jpg", "HasuObs", "10 min. ago", 1),
      new FriendList("./img/avatars/avatar5.png", "InnaDacota", "online", 3),
      new FriendList(
        "./img/avatars/avatar3.png",
        "adrenaline",
        "1 min. ago",
        1
      ),
      new FriendList("./img/avatars/4.jpg", "KNIP", "7 min. ago", 0),
      new FriendList("./img/avatars/5.jpg", "Stell", "15 min. ago", 2),
    ];

    friends.forEach(e => {
      $("section.friends").append(`
      <div class="friend_info ${e.name == "InnaDacota" ? "blue_bg" : ""}" >
      <div class="avatar" 
      style="background-image: url('${e.avatar}')"
      ></div>
      <div class="info">
        <div class="name">${e.name}</div>
        <div class="online silver font-12">${e.time}</div>
      </div>
      <div class="unread ${e.name == "InnaDacota" ? "green_bg" : "rose_bg"}">
      ${e.unreads}
      </div>
    </div>
      `);
    });

    // message toolbar
    //bold
    let boldMode = false;
    $(".fa-bold").on("click", e => {
      if (!boldMode) {
        e.target.style.backgroundColor = "#433fd1";
        e.target.style.color = "#fff";
        boldMode = true;

        $(".text")[0].style.fontWeight = "bold";
      } else {
        e.target.style.backgroundColor = "#eceffa";
        e.target.style.color = "#a3a8b0";
        boldMode = false;
        $(".text")[0].style.fontWeight = "normal";
      }
    });
    //italic
    let italicMode = false;
    $(".fa-italic").on("click", e => {
      if (!italicMode) {
        e.target.style.backgroundColor = "#433fd1";
        e.target.style.color = "#fff";
        $(".text")[0].style.fontStyle = "italic";

        italicMode = true;
      } else {
        e.target.style.backgroundColor = "#eceffa";
        e.target.style.color = "#a3a8b0";
        $(".text")[0].style.fontStyle = "normal";

        italicMode = false;
      }
    });

    // adding messages
    $(".send").on("click", () => {
      let text = $(".text")[0].value;
      if (text) {
        $(".last_message").append(`
      <div class="content silver font-12"
      style="font-style:
      ${italicMode ? "italic" : "normal"};
       font-weight: ${boldMode ? "bold" : "normal"}"
      >
      ${text}
     </div>
      `);
        $(".text")[0].value = "";
      }
    });
    //hide friend list
    let arrowDownUp = 0;
    let showHideFriendList = false;
    $(".fa-chevron-up").on("click", e => {
      console.log(e.target);
      arrowDownUp += 180;
      e.target.style.transform = `rotate(${arrowDownUp}deg)`;
      if (!showHideFriendList) {
        $(".friend_info").hide();
        showHideFriendList = true;
      } else {
        $(".friend_info").show();
        showHideFriendList = false;
      }
    });
  }, 500);
});

//on load
document.querySelector(".my_account").click();
