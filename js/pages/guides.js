export default class Guides {
  constructor() {}

  markup = () => {
    return `
   
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
    `;
  };
}
