import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-left: 15px;
  }
`;

export const Title = styled.div`
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 37px;
  color: #353535;
  margin-bottom: 25px;
`;

export const ImageContainer = styled.div`
  margin-right: 15px;

  > img {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
    border-radius: 4px;
  }
`;

export const Images = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
