export default class Stratistic {
  constructor() {}
  //markup
  markup = () => {
    return `<div class="my_statistic_wrapper">
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
  </div>
  `;
  };
  //array of hero results
  heroResult = () => {
    //hero result section for find heroes
    return [
      {
        img: "./img/heroes/Ana_square_tile.png",
        name: "Anna",
        winRate: 61.62,
        changes: "+1.22",
        assurance: "+7.17",
        selection: 9.81,
        banned: 3.11,
        playedGames: 981,
      },
      {
        img: "./img/irel.jpg",
        name: "Yrel",
        winRate: 59.22,
        changes: "-2.01",
        assurance: "+3.17",
        selection: 4.66,
        banned: 1.37,
        playedGames: 712,
      },
      {
        img: "./img/heroes/sylvana.jpg",
        name: "Sylvana",
        winRate: 57.95,
        changes: "-1.71",
        assurance: "+9.55",
        selection: 4.22,
        banned: 6.59,
        playedGames: 939,
      },
      {
        img: "./img/heroes/thrall.jpg",
        name: "Thrall",
        winRate: 56.72,
        changes: "+5.61",
        assurance: "-3.97",
        selection: 4.66,
        banned: 1.37,
        playedGames: 967,
      },
      {
        img: "./img/heroes/Uther_Hero_Portrait.png",
        name: "Uther",
        winRate: 55.02,
        changes: "+3.28",
        assurance: "+1.33",
        selection: 8.91,
        banned: 3.87,
        playedGames: 669,
      },
      {
        img: "./img/heroes/reksar.jpg",
        name: "Rexxar",
        winRate: 53.55,
        changes: "+1.11",
        assurance: "-5.66",
        selection: 7.99,
        banned: 8.57,
        playedGames: 481,
      },
      {
        img: "./img/heroes/cho.jpg",
        name: "Cho",
        winRate: 51.02,
        changes: "-2.21",
        assurance: "-1.11",
        selection: 9.16,
        banned: 4.17,
        playedGames: 557,
      },
      {
        img: "./img/heroes/gall.jpg",
        name: "Gall",
        winRate: 50.51,
        changes: "+5.31",
        assurance: "+1.17",
        selection: 6.11,
        banned: 3.26,
        playedGames: 711,
      },
      {
        img: "./img/heroes/Anduin_square_tile.png",
        name: "Anduin",
        winRate: 50.22,
        changes: "+3.01",
        assurance: "-1.17",
        selection: 6.16,
        banned: 2.37,
        playedGames: 717,
      },

      {
        img: "./img/heroes/Jaina_square_tile.png",
        name: "Jaina",
        winRate: 49.26,
        changes: "+8.01",
        assurance: "-1.17",
        selection: 1.66,
        banned: 6.37,
        playedGames: 517,
      },
    ];
  };
  //method append all results in html

  appendSearchResults = item => {
    item.forEach(e => {
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
            <span class=" font-14 ${+e.changes >= 0 ? "green" : "red"}">
            ${e.changes}
            </span>
            </div>
            <div class="rating">
            <span class=" font-14 ${+e.assurance >= 0 ? "green" : "red"}">
            ${e.assurance}
             </span>
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
          </div>
      `);
    });
  };
}
