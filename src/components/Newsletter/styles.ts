import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fafafa;
  display: flex;
  justify-content: center;
  border-top: 2px solid #efefef;
  border-bottom: 2px solid #efefef;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 24px 31px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 37px;
  color: #000000;
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    flex: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }
`;

export const Email = styled.input`
  padding: 0 0 0 24px;
  border: 1px solid #353535;
  border-right: none;
  background: #ffffff;
  border-radius: 4px 0 0 4px;
  width: 30%;

  @media screen and (max-width: 768px) {
    flex: 50%;
    border-radius: 4px;
    border-right: 1px solid #353535;
  }
`;

export const Btn = styled.button`
  width: 131px;
  height: 40px;
  background: #faa500;
  border: 1px solid #faa500;
  border-radius: 0 4px 4px 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    flex: 20%;
    margin-left: 15px;
    border-radius: 4px;
    height: 26px;
  }
`;
