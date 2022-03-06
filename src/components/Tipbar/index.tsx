import React from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Planet from "assets/img/planet.png";
import Stock from "assets/img/stock.png";
import PriceTag from "assets/img/priceTag.png";
import Exchange from "assets/img/exchange.png";
import Truck from "assets/img/truck.png";
import { Box, Container, Subtitle, Title, BoxContainer } from "./styles";

export const Tipbar: React.FC = () => {
  return (
    <Container>
      <span className="title">Por que comprar na Maeztra?</span>
      {window.outerWidth < 1400 ? (
        <Flicking align={window.outerWidth < 768 ? "center" : "prev"}>
          <Box>
            <div className="img-container">
              <img src={Planet} alt="Planet Icon" />
            </div>
            <div className="description">
              <Title>Produtos importados</Title>
              <Subtitle>Produto de Alta Qualidade</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Stock} alt="Stock Icon" />
            </div>
            <div className="description">
              <Title>Estoque no Brazil</Title>
              <Subtitle>Produtos mais perto de você!</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Exchange} alt="Exchange Icon" />
            </div>
            <div className="description">
              <Title>Trocas Garantidas</Title>
              <Subtitle>Trocas em até 48 horas, vejas as regras</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={PriceTag} alt="Price Tag Icon" />
            </div>
            <div className="description">
              <Title>Ganhe 5% off</Title>
              <Subtitle>Pagando à vista no Cartão</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Truck} alt="Truck Icon" />
            </div>
            <div className="description">
              <Title>Frete Grátis</Title>
              <Subtitle>Em compras acima de R$ 499,00</Subtitle>
            </div>
          </Box>
        </Flicking>
      ) : (
        <BoxContainer>
          <Box>
            <div className="img-container">
              <img src={Planet} alt="Planet Icon" />
            </div>
            <div className="description">
              <Title>Produtos importados</Title>
              <Subtitle>Produto de Alta Qualidade</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Stock} alt="Stock Icon" />
            </div>
            <div className="description">
              <Title>Estoque no Brazil</Title>
              <Subtitle>Produtos mais perto de você!</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Exchange} alt="Exchange Icon" />
            </div>
            <div className="description">
              <Title>Trocas Garantidas</Title>
              <Subtitle>Trocas em até 48 horas, vejas as regras</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={PriceTag} alt="Price Tag Icon" />
            </div>
            <div className="description">
              <Title>Ganhe 5% off</Title>
              <Subtitle>Pagando à vista no Cartão</Subtitle>
            </div>
          </Box>

          <Box>
            <div className="img-container">
              <img src={Truck} alt="Truck Icon" />
            </div>
            <div className="description">
              <Title>Frete Grátis</Title>
              <Subtitle>Em compras acima de R$ 499,00</Subtitle>
            </div>
          </Box>
        </BoxContainer>
      )}
    </Container>
  );
};
