//Data
import { sliceData } from "./data";

export const Categorias = () => (
  <section className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8">
    <h2 className="tw-text-[1.25rem] tw-mb-[2rem] tw-font-semibold tw-text-center large:tw-text-[2.25rem] large:tw-mb-[3rem]">
      Susto Favorito <br />
      Categorias
    </h2>

    <div className="tw-grid tw-grid-cols-[1fr_1fr] tw-gap-y-4 tw-gap-x-8 max-[320px]:tw-grid-cols-[0.8fr] max-[320px]:tw-justify-center tablet:tw-grid-cols-[200px_200px_200px] tablet:tw-justify-center large:tw-gap-x-32 container">
      {/* Recorro la data existente para poder generar los datos estáticos */}
      {sliceData.map((opt, index) => (
        <div key={index} className="category__data tw-text-center tw-group">
          <img src={opt.image} alt={opt.title} className="tw-mx-auto tw-w-[120px] tw-mb-[.75rem] tw-transition tw-duration-[.3s] large:tw-w-[200px]  group-hover:-tw-translate-y-2" />
          <h3 className="tw-mb-[.25rem] tw-text-[17px] tw-font-semibold">{opt.title}</h3>
          <p>{opt.description}</p>
        </div>
      ))}
    </div>
  </section>
);
