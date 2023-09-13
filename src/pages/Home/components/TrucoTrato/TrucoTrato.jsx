//Data
import { sliceData } from "./data";
//Styles
import "./trucoTrato.css";

export const TrucoTrato = () => (
  <section
    className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8"
    id="trick"
  >
    <h2 className="large:tw-text-[2.25rem] tw-font-semibold large:tw-mb-12 tw-text-[1.25rem] tw-mb-8 tw-text-center">
      Truco o trato
    </h2>

    <div
      className="tw-grid tw-grid-cols-[1fr_1fr] tw-gap-6 tw-pt-4 max-[320px]:tw-grid-cols-[.8fr] max-[320px]:tw-justify-center
      tablet:tw-grid-cols-[200px_200px_200px] tablet:tw-justify-center tablet:tw-gap-8 large:tw-gap-14 
      tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto"
    >
      {/* Recorro la data existente para poder generar los datos estáticos */}
      {sliceData.map((opt, index) => (
        <div
          key={index}
          className="trick__content tw-group large:tw-rounded-3xl tw-relative tw-rounded-2xl tw-pt-6 tw-pr-0 tw-pb-4 tw-pl-0 tw-text-center tw-overflow-hidden"
        >
          <img
            src={opt.img}
            alt={opt.title}
            className="tw-mx-auto tw-w-[90px] tw-transition tw-duration-[.3s] large:tw-w-[110px] group-hover:-tw-translate-y-[.5rem]"
          />
          <h3 className="tw-text-white tw-font-medium tw-text-[.938rem] large:tw-text-[1.25rem]">
            {opt.title}
          </h3>
          <span className="tw-block tw-text-[.75rem] large:tw-text-[.813rem] tw-mb-2">
            {opt.subtitle}
          </span>
          <span className="tw-block tw-text-white tw-font-medium tw-text-[.938rem] large:tw-text-[1rem] ">
            ${opt.price}
          </span>
          <button
            className="tw-inline-flex tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white 
            tw-p-2 tw-absolute tw-rounded-[.25rem_.25rem_.75rem_.25rem] tw-w-9 tw-h-9 tw-bottom-0 
            -tw-right-12 tw-transition tw-duration-[.3s] group-hover:-tw-translate-x-12"
          >
            <i className="bx bx-cart-alt tw-text-[1.25rem] tw-text-white"></i>
          </button>
        </div>
      ))}
    </div>
  </section>
);
