import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  margin-top: 24px;

  .title {
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    display: block;
    color: #353535;
    margin-bottom: 21px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  background: #efefef;
  border-radius: 4px;
  padding: 11px 19px 14px 26px;
  min-width: 308px;
  margin-right: 16px;

  @media screen and (min-width: 1024px) {
    margin-right: 15px;

    :last-child {
      margin-right: 0;
    }
  }

  .img-container {
    margin-right: 21px;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: 0.875rem;
  line-height: 21px;
  font-weight: 700;
  color: #353535;
`;

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 1.125rem;
  color: #4a4441;
`;
