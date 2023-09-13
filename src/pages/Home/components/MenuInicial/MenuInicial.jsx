import { useEffect } from "react";
//@Swiper
import Swiper from "swiper";
import "swiper/css/bundle";
//Data
import { slideData } from "./data";
//Styles
import "./menuInicial.css";

export const MenuInicial = () => {
  // Este useEffect se usa para ejecutar el swiper que es un scroll en horizontal
  useEffect(() => {
    new Swiper(".home-swiper", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section
      className="tw-max-w-[968px] tw-mx-6 small:tw-mx-4 large:tw-mx-auto"
      id="home"
    >
      <div className="swiper home-swiper">
        <div className="swiper-wrapper">
          {/* Recorro la data existente para poder generar los datos estáticos */}
          {slideData.map((slide, index) => (
            <section className="swiper-slide" key={index}>
              <div className="tw-pt-14 tablet:tw-pt-32 tablet:tw-pr-0 tablet:tw-pb-8 tablet:tw-grid-cols-[1fr_1fr] tablet:tw-gap-16 large:tw-pt-36 large:tw-gap-12 tw-gap-y-4 tw-grid">
                <div className="large:tw-pt-0 tw-grid tw-relative tw-pt-8">
                  <img
                    src={slide.image}
                    alt=""
                    className="home__img-animation small:tw-h-[250px] tw-h-[200px] tablet:tw-h-[300px] large:tw-h-[400px] large:tw-translate-y-[-3rem] desktop:tw-h-[420px] tw-justify-self-center"
                  />
                  <div className="home__indicator"></div>

                  <div className="large:tw-bottom-0 large:tw-right-[58%] tw-absolute tw-right-2">
                    <h4 className="tw-block tw-text-[.813rem] tw-text-right">
                      {slide.title}
                    </h4>
                    <span className="tw-block tw-text-[.813rem] tw-text-right">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="tablet:tw-text-xl tw-text-base tw-font-semibold tw-uppercase tw-mb-4">
                    # {index + 1} {slide.title}
                  </h3>
                  <h1 className="tablet:tw-text-[64px] tw-text-[32px] tw-font-black tw-leading-[109%] tw-mb-4 large:tw-mb-6">
                    UOOOO <br />
                    TRUCO O <br />
                    TRATO!!
                  </h1>
                  <p className="tw-mb-4 large:tw-mb-10 large:tw-pr-8">
                    {slide.description}
                  </p>

                  <section className="tw-w-full tw-flex tw-justify-between max-[320px]:tw-flex-col max-[320px]:tw-gap-y-4">
                    <a
                      href={slide.buttonLink}
                      className="button max-[320px]:tw-w-max"
                    >
                      {slide.buttonText}
                    </a>
                    <a
                      href="#"
                      className="tw-text-white tw-inline-flex tw-items-center tw-gap-x-2 max-[320px]:tw-w-max"
                    >
                      Audio grabado
                      <i className="bx bx-right-arrow-alt button__icon"></i>
                    </a>
                  </section>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
