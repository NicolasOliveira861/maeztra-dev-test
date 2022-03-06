import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import Banner from "assets/img/banner-home.png";
import BannerMobile from "assets/img/banner-home-mobile.png";
import NewCollectionImg from "assets/img/new-collection.png";
import NewCollectionImgDesktop from "assets/img/new-collection-desktop.png";
import ArrowIcon from "assets/svg/arrow.svg";
import { Header } from "components/Header";
import { Tipbar } from "components/Tipbar";
import { BrandsSlider } from "components/Brands";
import { Footer } from "components/Footer";
import { Shelf } from "components/Shelf";
import { Newsletter } from "components/Newsletter";
import { NewsletterPopup } from "components/PopupNewsletter";

import { Container, Panel, NewCollection } from "./styles";

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
      <Shelf />

      <NewCollection>
        <div className="content">
          <p className="title">Lorem ipsum </p>
          <p className="description">
            {window.innerWidth > 900
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque ."}
          </p>
        </div>
        <div className="image-container">
          <img
            src={
              window.innerWidth > 900
                ? NewCollectionImgDesktop
                : NewCollectionImg
            }
            alt="Imagem Nova Coleção"
          />
        </div>
      </NewCollection>

      <Newsletter />
      <Footer />

      <NewsletterPopup />
    </Container>
  );
};
export default Home;
