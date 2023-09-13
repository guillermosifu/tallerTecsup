//Styles
import "./acercaDe.css";

export const AcercaDe = () => (
  <section className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8" id="Nosotros">
    <div className="tw-grid tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto">
      <div>
        <h2 className="large:tw-text-[2.25rem] tw-font-semibold large:tw-mb-12 tw-text-[1.25rem] tw-mb-8 tw-text-center">
          Acerca de Halloween
          <br />
          Night
        </h2>
        <p>
          Night of all the saints, or all the dead, is celebrated on October 31
          and it is a very fun international celebration, this celebration comes
          from ancient origins, and is already celebrated by everyone.
        </p>
        <a href="#" className="tw-inline-block tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white tw-py-4 tw-px-[1.75rem] tw-rounded-lg tw-font-medium tw-transition tw-duration-[.3s]">
          {" "}
          Saber más
        </a>
      </div>
    </div>
  </section>
);

// section: tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8
// container: tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto
// section__title: large:tw-text-[2.25rem] large:tw-mb-12 tw-text-[1.25rem] tw-mb-8 tw-text-center
// button: tw-inline-block tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white tw-py-4 tw-px-[1.75rem] tw-rounded-lg tw-font-medium tw-transition tw-duration-[.3s]