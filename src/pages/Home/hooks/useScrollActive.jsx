import { useEffect } from "react";

export const useScrollActive = () => {
  useEffect(() => {
    // Obtiene todos los elementos con la clase indicada
    const sections = document.querySelectorAll("section[id]");

    //Funcion para añadir ciertas clases al cumplirse cierta condicion
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.add("active-link");
        } else {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.remove("active-link");
        }
      });
    };

    // Se ejecuta cada vez que se hace scroll
    window.addEventListener("scroll", scrollActive);

    return () => {
      //Se ejecuta tanto al montar como desmontar el componente
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
};
