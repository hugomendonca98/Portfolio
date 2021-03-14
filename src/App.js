import React from "react";

import GlobalStyles from "./global/GlobalStyles";
import FixedNavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import WorkCard from "./components/WorksUi/WorksUi";
import WorkCardTwo from "./components/WorksUiTwo/WorksUiTwo";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

import easyBank from "./assets/images/desktop-preview.jpg";
import shortyUrl from "./assets/images/desktop-preview-2.jpg";
import socialMedia from "./assets/images/desktop-preview-3.jpg";
import luxuryRestaurant from "./assets/images/desktop-preview-4.png";
import felipeImportadoss from "./assets/images/desktop-preview-5.png";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <FixedNavBar />
      <section id="header">
        <Header />
      </section>
      <section id="portfolio">
        <WorkCard
          title="Easybank landing page"
          imgAlt="Easyban landing page - hugo mendonça dev frontend"
          externalLink="https://easy-bank-landingpage.netlify.app/"
          workImg={easyBank}
          description="landing page de um banco virtual, design moderno e totalmente responsivo se adaptando para todos tipos de tela. Feito usando react e styled components.
          "
        />
        <WorkCardTwo
          title="Felipe Importados"
          imgAlt="Felipe Importadoss - hugo mendonça dev frontend"
          externalLink="https://felipeimportadoss.com"
          workImg={felipeImportadoss}
          description="Site e-commerce feito com wordpress e woocomerce, sistema de pagamentos usando o pagseguro."
        />
        <WorkCard
          title="luxury restaurant"
          imgAlt="Luxury Restaurant - hugo mendonça dev frontend"
          externalLink="https://luxury-restaurant-site.netlify.app/"
          workImg={luxuryRestaurant}
          description="Site para restaurante, feito com html, css e javascript orientado a objeto, com 7 páginas, entre eles formulários e mapas."
        />
        <WorkCardTwo
          title="Encurtador de url"
          imgAlt="Encurtador de url - hugo mendonça dev frontend"
          externalLink="https://shortly-react.netlify.app/"
          workImg={shortyUrl}
          description="Landing page encurtador de url usando uma Api rel.ink, feito com React e estilizado com styled-components."
        />
        <WorkCard
          title="Social media dashboard"
          imgAlt="Social media dashboard - hugo mendonça dev frontend"
          externalLink="https://soacil-media-dashboard.netlify.app/"
          workImg={socialMedia}
          description="Front end de um dashboard para gerenciar media sociais, com theme switcher usando o styled-components."
        />
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
