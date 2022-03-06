import styled from "styled-components";

interface PopupProps {
  isOpen: boolean;
}

export const Overlay = styled.div<PopupProps>`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const Container = styled.div<PopupProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 60%;
  height: 529.65px;
  background: #ffffff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  @media screen and (min-width: 1600px) {
    width: 45%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 307px;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;

  > img {
    object-fit: cover;
    min-width: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 52px;

  @media screen and (max-width: 900px) {
    padding: 40px 20px 24px;
  }

  .welcome {
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #464b54;
    margin: 12.71px 0;
  }

  .info {
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 23px;
    text-align: center;
    color: #787d83;
    display: flex;
    flex-direction: column;

    > strong {
      font-weight: bold;
      font-family: Lato, sans-serif;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Email = styled.input`
  width: 100%;
  padding: 0 13px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  height: 40px;
  margin: 25.42px 0 12.5px 0;
`;

export const Btn = styled.button`
  background: #faa500;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  height: 40px;
`;

export const Close = styled.button`
  position: absolute;
  right: 0;
  font-family: Lato, sans-serif;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  top: -20px;
`;
