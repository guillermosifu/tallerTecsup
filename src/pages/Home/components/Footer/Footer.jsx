//Assets
import logo from "../../../../assets/img/logo.png";
import footer1 from "../../../../assets/img/footer1-img.png";
import footer2 from "../../../../assets/img/footer2-img.png";
//Data
import { sliceData } from "./data";
//Styles
import "./footer.css";


export const Footer = () => (
  <footer className="footer section">
    <div className="footer__container container grid">
      <div className="footer__content">
        <a href="#" className="footer__logo">
          <img src={logo} alt="" className="footer__logo-img" />
          Halloween
        </a>

        <p className="footer__description">
          Enjoy the scariest night <br />
          of your life.
        </p>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100090941623273"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/devguille/"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      {sliceData.map((opt, index) => (
        <div key={index} className="footer__content">
          <h3 className="footer__title">{opt.title}</h3>

          <ul className="footer__links">
            {opt.links && opt.links.length > 0 && opt.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) )}

    </div>

    <span className="footer__copy">
      &#169; Halloween page by <a href="">DevSolutionsa</a>{" "}
    </span>

    <img src={footer1} alt="" className="footer__img-one" />
    <img src={footer2} alt="" className="footer__img-two" />
  </footer>
);
