import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;

  .flicking-viewport {
    .flicking-arrow-prev,
    .flicking-arrow-next {
      position: absolute;
      z-index: 10;
      top: 50%;
      cursor: pointer;
    }

    .flicking-arrow-prev {
      left: 161px;
      transform: translateY(-50%);
    }

    .flicking-arrow-next {
      right: 161px;
      transform: translateY(-50%) rotate(180deg);
    }

    @media screen and (max-width: 900px) {
      .flicking-arrow-prev {
        left: 28px;
      }

      .flicking-arrow-next {
        right: 28px;
      }
    }

    .flicking-pagination {
      display: flex;
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 11;

      .flicking-pagination-bullet {
        border: 1px solid #faa500;
        border-radius: 50%;
        height: 8px;
        width: 8px;
        display: block;
        margin-right: 16px;

        :last-child {
          margin-right: 0;
        }

        &-active {
          background: #faa500;
        }
      }
    }
  }
`;

export const Panel = styled.div`
  width: 100%;
  position: relative;

  > img {
    max-width: 100%;
    object-fit: contain;

    @media screen and (max-width: 900px) {
      object-fit: cover;
      min-width: 100%;
      max-width: unset;
    }
  }

  .content {
    position: absolute;
    top: 151px;
    left: 323px;

    @media screen and (max-width: 900px) {
      left: 63px;
      top: 63px;
    }

    .title {
      font-family: Montserrat, sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 49px;
      color: #ffffff;

      @media screen and (max-width: 900px) {
        font-size: 1.875rem;
        line-height: 36px;
      }
    }

    .description {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 24px;
      color: #ffffff;
      margin: 40px 0 32px;
      width: 467px;

      @media screen and (max-width: 900px) {
        font-size: 0.875rem;
        line-height: 17px;
        width: 70%;
        margin: 24px 0 16px;
      }
    }

    .btn {
      width: 128px;
      background: #faa500;
      border-radius: 10px;
      font-size: 1rem;
      line-height: 20px;
      color: #ffffff;
      padding: 14px 0;
      font-weight: 700;

      @media screen and (max-width: 900px) {
        width: 76px;
        height: 28px;
        padding: 0;
        border-radius: 4px;
        font-size: 0.875rem;
      }
    }
  }
`;
