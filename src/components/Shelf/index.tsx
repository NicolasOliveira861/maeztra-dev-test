import { productProps } from "libs/productProps";
import React, { useEffect, useState } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow } from "@egjs/flicking-plugins";
import ArrowIcon from "assets/svg/arrow.svg";
import {
  AddToCartBtn,
  Box,
  Container,
  ProductImage,
  ProductInfo,
  Sku,
  SkuSelector,
} from "./styles";

export const Shelf: React.FC = () => {
  const plugins = [new Arrow()];

  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:3333/products", {
        method: "GET",
        mode: "cors",
        cache: "default",
      })
        .then((response) => response.json())
        .then((value) => setProducts(value));
    }

    fetchData();
  }, []);

  const panelsPerView = () => {
    let panels = 1;

    if (window.innerWidth > 1300) {
      panels = 5;
    }

    if (window.innerWidth < 1300 && window.innerWidth > 900) {
      panels = 4;
    }

    if (window.innerWidth < 900 && window.innerWidth > 768) {
      panels = 2;
    }

    if (window.innerWidth <= 768 && window.innerWidth > 560) {
      panels = 2;
    }

    if (window.innerWidth < 560) {
      panels = 1;
    }

    return panels;
  };

  return (
    <Container>
      <h1>As Mais Pedidas</h1>
      <Flicking
        plugins={plugins}
        panelsPerView={panelsPerView()}
        align={window.innerWidth > 900 ? "prev" : "center"}
        circular
      >
        {products.map((product) => (
          <Box>
            <ProductImage>
              <img src={product.productImage[0]} alt={product.name} />
            </ProductImage>

            <SkuSelector>
              {product.skus.map((sku) => (
                <Sku style={{ background: sku.skucolor }} />
              ))}
            </SkuSelector>
            <ProductInfo>
              <p className="price">{product.skus[0].bestPriceFormatted}</p>

              <p className="name">{product.name}</p>

              <p className="description">{product.description}</p>
            </ProductInfo>
            <AddToCartBtn>Adicionar</AddToCartBtn>
          </Box>
        ))}
        <ViewportSlot>
          <span className="flicking-arrow-prev">
            <img src={ArrowIcon} alt="Arrow Icon" />
          </span>
          <span className="flicking-arrow-next">
            <img src={ArrowIcon} alt="Arrow Icon" />
          </span>
        </ViewportSlot>
      </Flicking>
    </Container>
  );
};
