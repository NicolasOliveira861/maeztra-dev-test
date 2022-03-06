import styled from "styled-components";

export const Search = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Bar = styled.input`
  background: #efefef;
  border-radius: 10px;
  height: 40px;
  border: none;
  padding-left: 24px;
  width: 30vw;
`;

export const Btn = styled.button`
  background: #faa500;
  border-radius: 8px;
  height: 40px;
  width: 119px;
  color: #ffffff;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 21px;
  margin-left: -20px;
`;
