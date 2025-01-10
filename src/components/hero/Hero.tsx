import "./Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <section className="section1">
        <article>
          <h1>Bienvenido a nuestro sitio</h1>
          <p>This is a simple hero component.</p>
        </article>

        <figure>
          <img
            src="dacarsAstro/images/img.png"
            alt=""
            decoding="async"
            loading="lazy"
          />
        </figure>
      </section>
      <section className="section2">
        <figure className="">
          <img src="dacarsAstro/images/img1.png" alt="" />
          <figcaption>Explora ahora!</figcaption>
        </figure>
        <figure className="">
          <img src="dacarsAstro/images/img2.png" alt="" />
          <figcaption>Explora ahora!</figcaption>
        </figure>
        <figure className="">
          <img src="dacarsAstro/images/img3.png" alt="" />
          <figcaption>Explora ahora!</figcaption>
        </figure>
      </section>
    </main>
  );
}
