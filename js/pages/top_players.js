export default class TopPlayers {
  constructor() {}

  markup = () => {
    return `
  <div class="top_wrapper">
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

        </div>`;
  };

  topFive = () => {
    return [
      {
        position: 1,
        nickname: "Cris",
        avatar: "./img/avatars/avatar1.jpg",
        rating: 10815,
        win: 537,
        lose: 314,
      },
      {
        position: 2,
        nickname: "TotalyMew",
        avatar: "./img/avatars/avatar2.jfif",
        rating: 10724,
        win: 652,
        lose: 110,
      },
      {
        position: 3,
        nickname: "ZEACris",
        avatar: "./img/avatars/avatar3.png",
        rating: 10116,
        win: 488,
        lose: 401,
      },
      {
        position: 4,
        nickname: "Nano",
        avatar: "./img/avatars/avatar4.jpg",
        rating: 10087,
        win: 467,
        lose: 229,
      },
      {
        position: 5,
        nickname: "Mascarade",
        avatar: "./img/avatars/avatar5.png",
        rating: 10052,
        win: 430,
        lose: 187,
      },
    ];
  };
  topFiveInfoRender = item => {
    item.forEach(e => {
      const winRate = (e.win / (e.win + e.lose)) * 100;
      $(".top_five").append(`
         <div class="top_five_player">
                <header class="position_nickname">
                  <div class="position">
                     <div class="crown"></div><div class="center font-10">${e.position}</div></div>
                  <div class="name font-20 bold">${e.nickname}</div>
                </header>
                <div class="avatar"
                style="background-image: url(${e.avatar})">
                </div>
                <div class="raiting font-12">
                  <span class="font-12 silver">Raiting</span> ${e.rating}</div>
                <div class="win_lose_rate">
                  <div class="win_rating silver font-12"
                  style="width: ${winRate}%">
                  ${e.win}</div>
                  <div class="lose_rating silver font-12">${e.lose}</div>
                </div>
                <div class="win_lose_rate_1">
                  <div class="win_rating_1 silver font-12">Win</div>
                  <div class="lose_rating_1 silver font-12">Lose</div>
                </div>
              </div>
    `);
    });
  };

  //top top_ten_player
  topTen = () => {
    return [
      {
        rank: 6,
        battletag: "TLHasuObs",
        rating: 10005,
        winRate: 55.9,
        played: 403,
        win: 244,
        role: "./img/roles/bruiser.png",
        favoriteHero: [
          "./img/heroes/Jaina_square_tile.png",
          "./img/heroes/garrosh.jpg",
          "./img/heroes/thrall.jpg",
        ],
      },
      {
        rank: 7,
        battletag: "hornyD",
        rating: 9969,
        winRate: 72.7,
        played: 239,
        win: 145,
        role: "./img/roles/ranged.png",
        favoriteHero: [
          "./img/heroes/hanzo.jpg",
          "./img/heroes/gall.jpg",
          "./img/heroes/keltuzad.jpg",
        ],
      },
      {
        rank: 8,
        battletag: "ElMatador",
        rating: 9605,
        winRate: 88.3,
        played: 322,
        win: 176,
        role: "./img/roles/support.png",
        favoriteHero: [
          "./img/heroes/mediv.jpg",
          "./img/heroes/zeratul.jpg",
          "./img/heroes/zarya.jpg",
        ],
      },
      {
        rank: 9,
        battletag: "Vasko",
        rating: 9426,
        winRate: 68.1,
        played: 132,
        win: 74,
        role: "./img/roles/melee.png",
        favoriteHero: [
          "./img/heroes/dva.jpg",
          "./img/heroes/illidan.jpg",
          "./img/heroes/maiev.jpg",
        ],
      },
      {
        rank: 10,
        battletag: "Executor",
        rating: 9422,
        winRate: 54.4,
        played: 584,
        win: 325,
        role: "./img/roles/tank.png",
        favoriteHero: [
          "./img/heroes/tyrael.jpg",
          "./img/heroes/sylvana.jpg",
          "./img/heroes/Uther_Hero_Portrait.png",
        ],
      },
    ];
  };
  topTenInfoRenderer = item => {
    item.forEach(e => {
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
  };
}
