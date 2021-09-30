const Home = async () => {
  const view = `
<div class='container-banner'>
  <section class='banner-wrap'>
      <picture class="banner">
        <source
          media="(min-width: 768px)"
          srcset="./src/images/home-banner-768.jpg"
        />
        <img src="./src/images/home-banner-600.jpg" alt="imagen de un closet" />
      </picture>
      <picture class="banner">
        <source
          media="(min-width: 768px)"
          srcset="./src/images/gallery-02.jpg"
        />
        <img src="./src/images/gallery-02.jpg" alt="imagen de un closet" />
      </picture>
      <picture class="banner">
        <source
          media="(min-width: 768px)"
          srcset="./src/images/gallery-04.jpg.jpg"
        />
        <img src="./src/images/gallery-04.jpg" alt="imagen de un closet" />
      </picture>
      <picture class="banner">
        <source
          media="(min-width: 768px)"
          srcset="./src/images/gallery-01.jpg.jpg"
        />
        <img src="./src/images/gallery-01.jpg" alt="imagen de un closet" />
      </picture>
      <picture class="banner">
        <source
          media="(min-width: 768px)"
          srcset="./src/images/gallery-02.jpg.jpg"
        />
        <img src="./src/images/gallery-02.jpg" alt="imagen de un closet" />
      </picture>
  </section>
</div>
  <section class="gallery">
    <picture>
      <img src="./src/images/gallery-01.jpg" alt="" />
    </picture>
    <picture>
      <img src="./src/images/gallery-02.jpg" alt="" />
    </picture>
    <picture>
      <img src="./src/images/gallery-03.jpg" alt="" />
    </picture>
    <picture>
      <img src="./src/images/gallery-04.jpg" alt="" />
    </picture>
    <picture>
      <img src="./src/images/gallery-05.jpg" alt="" />
    </picture>
  </section>
<section class="hash-tag">
  <h3>@mizapato</h3>
</section>
<section class="carousel-wrap">
  <picture>
    <img src="./src/images/carousel-01.jpg" alt="" />
  </picture>
  <picture>
    <img src="./src/images/carousel-02.jpg" alt="" />
  </picture>
  <picture>
    <img src="./src/images/carousel-03.jpg" alt="" />
  </picture>
  <picture>
    <img src="./src/images/carousel-04.jpg" alt="" />
  </picture>
  <picture>
    <img src="./src/images/carousel-05.jpg" alt="" />
  </picture>
  <picture>
    <img src="./src/images/carousel-06.jpg" alt="" />
  </picture>
</section>
  `;

  return view;
};

export default Home;
