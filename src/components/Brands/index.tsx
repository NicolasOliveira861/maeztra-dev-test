import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Melissa from "assets/img/melissa.png";
import Forever from "assets/img/forever21.png";
import Comma from "assets/img/comma.png";
import AnnTaylor from "assets/img/ann-taylor.png";
import Zara from "assets/img/zara.png";
import { Container, ImageContainer, Title, Images } from "./styles";

export const BrandsSlider: React.FC = () => {
  return (
    <Container>
      <Title>Marcas Parceiras</Title>

      {window.innerWidth < 1700 ? (
        <Flicking align={window.innerWidth < 900 ? "center" : "prev"}>
          <ImageContainer>
            <img src={Forever} alt="Forever 21" />
          </ImageContainer>

          <ImageContainer>
            <img src={Melissa} alt="Melissa" />
          </ImageContainer>

          <ImageContainer>
            <img src={Comma} alt="Comma" />
          </ImageContainer>

          <ImageContainer>
            <img src={AnnTaylor} alt="AnnTaylor" />
          </ImageContainer>

          <ImageContainer>
            <img src={Zara} alt="Zara" />
          </ImageContainer>
        </Flicking>
      ) : (
        <Images>
          <ImageContainer>
            <img src={Forever} alt="Forever 21" />
          </ImageContainer>

          <ImageContainer>
            <img src={Melissa} alt="Melissa" />
          </ImageContainer>

          <ImageContainer>
            <img src={Comma} alt="Comma" />
          </ImageContainer>

          <ImageContainer>
            <img src={AnnTaylor} alt="AnnTaylor" />
          </ImageContainer>

          <ImageContainer>
            <img src={Zara} alt="Zara" />
          </ImageContainer>
        </Images>
      )}
    </Container>
  );
};
