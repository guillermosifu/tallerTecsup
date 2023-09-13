import { useEffect, useState } from "react";
//Custom Hooks
import { useScrollActive } from "./hooks/useScrollActive";
import { useScrollReveal } from "./hooks/useScrollReveal";
//Components
import { Header } from "../../components/Header/Header";
import { MenuInicial } from "./components/MenuInicial/MenuInicial";
import { Categorias } from "./components/Categorias/Categorias";
import { AcercaDe } from "./components/AcercaDe/AcercaDe";
import { TrucoTrato } from "./components/TrucoTrato/TrucoTrato";
import { Descuentos } from "./components/Descuentos/Descuentos";
import { NuevosItems } from "./components/NuevosItems/NuevosItems";
import { Suscribirse } from "./components/Suscribirse/Suscribirse";
import { Footer } from "./components/Footer/Footer";
//Styles
import "./home.css";

export const Home = () => {
  // Estado para detectar cuando se ha hecho scroll
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const scrollUpHandler = () => {
      // Detecta cuando el scroll en Y es mayor a 460
      if (window.scrollY >= 460) setShowScrollUp(true);
      else setShowScrollUp(false);
    };

    // Se ejecuta cada vez que se hace scroll
    window.addEventListener("scroll", scrollUpHandler);

    return () => {
      //Se ejecuta tanto al montar como desmontar el componente
      window.removeEventListener("scroll", scrollUpHandler);
    };
  }, []);

  useScrollActive();

  useScrollReveal();

  return (
    <div>
      {/* Encabezado */}
      <Header />
      <main className="main">
        {/* Componentes que se van a mostrar en esta layout */}
        <MenuInicial />
        <Categorias />
        <AcercaDe />
        <TrucoTrato />
        <Descuentos />
        <NuevosItems />
        <Suscribirse />
      </main>
      <Footer />
      {/* Icono para ir al inicio de la página */}
      <a href="#" className={`scrollup ${showScrollUp && "show-scroll"}`}>
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  );
};
