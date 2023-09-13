import { useEffect } from "react";
//@Swiper
import Swiper from "swiper";
import 'swiper/css/bundle';

//Data
import { slideData } from "./data";
//Styles
import "./nuevosItems.css";

export const NuevosItems = () => {
  
  // Este useEffect se usa para ejecutar el swiper que es un scroll en horizontal
  useEffect(() => {
    new Swiper(".new-swiper", {
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 16,
    });
  }, []);

  return (
    <section className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8" id="new">
      <h2 className="large:tw-text-[2.25rem] large:tw-mb-12 tw-font-semibold tw-text-[1.25rem] tw-mb-8 tw-text-center">Los recién llegados</h2>

      <div className="tw-pt-4 tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto">
        <div className="swiper new-swiper">
          <div className="swiper-wrapper">
            {/* Recorro la data existente para poder generar los datos estáticos */}
            {slideData.map((slide, index) => (
              <div className="new__content-bg tw-relative tw-w-[242px] tw-pt-8 tw-pb-6 tw-px-0 tw-rounded-xl 
                              tw-text-center tw-overflow-hidden tw-group large:tw-w-[310px] large:tw-rounded-2xl 
                              tw-py-8 swiper-slide" key={index}>
                <div className="tw-absolute tw-top-[8%] tw-left-[8%] tw-bg-[#f4511f] tw-text-white tw-text-[.813rem] 
                                large:tw-text-[.875rem] tw-py-1 tw-px-[.05rem] tw-rounded-sm">{slide.tag}</div>
                <img src={slide.image} alt="" className="tw-w-[120px] tw-mb-2 tw-transition tw-duration-[.3s] large:tw-w-[150px] large:tw-mb-4 tw-mx-auto group-hover:-tw-translate-y-2" />
                <h3 className="new__title">{slide.title}</h3>
                <span className="new__subtitle">{slide.subtitle}</span>

                <div className="new__prices">
                  <span className="new__price">{slide.price}</span>
                  <span className="new__discount">{slide.discount}</span>
                </div>

                <button className="tw-inline-flex tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white 
                                   tw-p-2 tw-absolute tw-rounded-[.25rem_.25rem_.75rem_.25rem] tw-w-9 tw-h-9 tw-bottom-0 
                                   -tw-right-12 tw-transition tw-duration-[.3s] group-hover:-tw-translate-x-12 new__button">
                  <i className="bx bx-cart-alt new__icon"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
