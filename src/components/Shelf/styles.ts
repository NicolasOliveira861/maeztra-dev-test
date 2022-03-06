import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 39px 0 23px 0;

  @media screen and (min-width: 901px) {
    width: 90%;
    margin: 80px auto;
  }

  > h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 37px;
    color: #353535;
    display: block;
    text-align: center;
    margin-bottom: 16px;
  }

  > .flicking-viewport {
    display: flex;
    column-gap: 15px;

    @media screen and (max-width: 900px) {
      padding: 0 30px 0 16px;
      overflow-x: visible;
    }
    ::-webkit-scrollbar {
      display: none;
    }

    .flicking-arrow-prev,
    .flicking-arrow-next {
      position: absolute;
      z-index: 10;
      top: 50%;
      cursor: pointer;
    }

    .flicking-arrow-prev {
      left: 0;
      transform: translateY(-50%);
    }

    .flicking-arrow-next {
      right: 0;
      transform: translateY(-50%) rotate(180deg);
    }

    @media screen and (max-width: 900px) {
      .flicking-arrow-prev,
      .flicking-arrow-next {
        display: none;
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin-right: 15px;

  @media screen and (min-width: 901px) {
  }
`;

export const ProductImage = styled.div`
  @media screen and (min-width: 901px) {
    > img {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    > img {
      min-width: 100%;
    }
  }
`;

export const SkuSelector = styled.div`
  display: flex;
  column-gap: 8px;
  margin: 8px 0 8px 27px;
`;

export const Sku = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    border: 1px solid #353535;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  margin-left: 27px;

  .price {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 30px;
    color: #353535;
  }

  .name {
    font-size: 1rem;
    line-height: 24px;
    color: #353535;
  }

  .description {
    font-size: 0.75rem;
    line-height: 18px;
    color: #353535;
    opacity: 0.5;
    width: 90%;
    word-wrap: break-word;
  }
`;

export const AddToCartBtn = styled.div`
  background: #faa500;
  border-radius: 4px;
  width: 80%;
  height: 35px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0 0 27px;
  font-size: 1rem;
  line-height: 24px;
`;
