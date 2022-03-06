import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import Banner from "assets/img/banner-home.png";
import BannerMobile from "assets/img/banner-home-mobile.png";
import ArrowIcon from "assets/svg/arrow.svg";
import { Header } from "components/Header";
import { Tipbar } from "components/Tipbar";
import { BrandsSlider } from "components/Brands";
import { Footer } from "components/Footer";

import { Container, Panel } from "./styles";

const Home: React.FC = () => {
  const plugins = [new Arrow(), new Pagination()];

  return (
    <Container>
      <Header />
      <Flicking align="prev" circular plugins={plugins}>
        <Panel>
          <img
            src={window.outerWidth > 768 ? Banner : BannerMobile}
            alt="Banner"
          />

          <div className="content">
            <span className="title">Promoções de Outono</span>
            <p className="description">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button type="button" className="btn">
              Conferir
            </button>
          </div>
        </Panel>
        <Panel>
          <img
            src={window.outerWidth > 768 ? Banner : BannerMobile}
            alt="Banner"
          />
          <div className="content">
            <span className="title">Promoções de Outono</span>
            <p className="description">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button type="button" className="btn">
              Conferir
            </button>
          </div>
        </Panel>

        <ViewportSlot>
          <span className="flicking-arrow-prev">
            <img src={ArrowIcon} alt="Arrow Icon" />
          </span>
          <span className="flicking-arrow-next">
            <img src={ArrowIcon} alt="Arrow Icon" />
          </span>
        </ViewportSlot>

        <ViewportSlot>
          <div className="flicking-pagination" />
        </ViewportSlot>
      </Flicking>

      <Tipbar />

      <BrandsSlider />

      <Footer />
    </Container>
  );
};
export default Home;
