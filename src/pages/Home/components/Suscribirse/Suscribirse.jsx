//Styles
import "./suscribirse.css";

export const Suscribirse = () => (
  <section className="section newsletter">
    <div className="newsletter__container container">
      <h2 className="section__title">Newsletter</h2>
      <p className="newsletter__description">
        Promotion new products and sales. Directly to your inbox
      </p>

      <form action="" className="newsletter__form">
        <input
          type="text"
          placeholder="Enter your email"
          className="newsletter__input"
        />
        <button className="button">Subscribe</button>
      </form>
    </div>
  </section>
);
