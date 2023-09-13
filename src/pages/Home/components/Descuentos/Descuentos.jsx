//Assets
import discount from "../../../../assets/img/discount-img.png";
//Styles
import "./descuentos.css";

export const Descuentos = () => (
  <section className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8">
    <div
      className="discount__container tw-grid tw-rounded-2xl tw-pt-[2.5rem] tw-pr-0 tw-pb-6 tw-gap-y-3 tw-max-w-[968px] 
                 tw-mx-6 max-[320px]:tw-mx-[1rem] tablet:tw-grid-cols-[max-content_max-content] tablet:tw-justify-center 
                 tablet:tw-items-center tablet:tw-gap-x-12 tablet:tw-py-12 tablet:tw-px-0 tablet:tw-rounded-[3rem] large:tw-mx-auto large:tw-gap-x-28"
    >
      <div className="discount__data tablet:tw-pr-24 tw-text-center">
        <h2 className="tw-mb-8 tw-text-[1.25rem] tw-font-semibold large:tw-text-[1.5rem]">
          50% de descuento <br />
          Sobre nuevos productos
        </h2>
        <a href="#" className="tw-inline-block tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white tw-py-4 tw-px-[1.75rem] tw-rounded-lg tw-font-medium tw-transition tw-duration-[.3s]">
          Ir a nuevo
        </a>
      </div>

      <img src={discount} alt="" className="discount__img tw-justify-self-center tw-w-[200px] tablet:tw-w-[350px] -tw-order-1" />
    </div>
  </section>
);
