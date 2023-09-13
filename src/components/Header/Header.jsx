import { useState } from "react";
//Data
import { sliceData } from "./data";
//Assets
import trick_treat5 from "../../assets/img/trick-treat5-img.png";
import nav_img from "../../assets/img/nav-img.png";
//Styles
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="background_header tw-w-full tw-fixed tw-top-0 tw-left-0 tw-z-[100]" id="header">
      <nav className="nav__calc tw-h-[3.5rem] tw-flex tw-justify-between tw-items-center container">
        <a href="#home" className="tw-flex tw-items-center tw-gap-x-2 tw-font-medium">
          <img src={trick_treat5} alt="" className="tw-w-[1.25rem]" />
          Halloween
        </a>
        <div className={`nav__menu ${isMenuOpen && "tw-top-0"}`}>
          <ul className="tw-flex tw-flex-col tw-items-center tw-gap-y-6 tablet:tw-flex-row tablet:tw-gap-x-12">
            {sliceData.map((opt, index) => (
              <li key={index} className="nav__item">
                <a
                  href={opt.href}
                  className={`tw-text-white tw-uppercase tw-font-black tw-transition tw-duration-[.4s] ${
                    index == 0 && "active-link"
                  }`}
                  onClick={handleNavLinkClick}
                >
                  {opt.label}
                </a>
              </li>
            ))}
            <a href="#" className="button button--ghost">
              Soporte
            </a>
          </ul>
          <div className="tablet:tw-hidden tw-text-white  tw-text-[1.8rem] tw-absolute tw-top-[0.5rem] tw-right-[0.7rem] tw-cursor-pointer" onClick={closeMenu}>
            <i className="bx bx-x"></i>
          </div>
          <img src={nav_img} alt="" className="tablet:tw-hidden tw-w-[100px] tw-absolute tw-top-0 tw-left-0" />
        </div>
        <div className="tablet:tw-hidden tw-text-white tw-text-xl tw-cursor-pointer" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-grid-alt"}`}></i>
        </div>
      </nav>
    </header>
  );
};
