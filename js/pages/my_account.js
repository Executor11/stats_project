export default class Account {
  constructor() {}

  markup = () => {
    return ` 
      <div class="my_account_wrapper">
       <section class="header">My account</section>
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
                <i class="fas fa-window-minimize blue font-16"></i>
                <i class="fas fa-window-minimize blue font-16"></i>
                <i class="fas fa-window-minimize blue font-16"></i>
                <i class="fas fa-window-minimize silver font-16"></i>
                <i class="fas fa-window-minimize silver font-16"></i>
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
      </section>
      </div>`;
  };
}
