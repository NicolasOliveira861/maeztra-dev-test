import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Image from "assets/img/newsletter.png";
import MailIcon from "assets/svg/newsletter-mail-icon.svg";
import SendIcon from "assets/svg/send-icon.svg";
import {
  Btn,
  Container,
  Content,
  Email,
  ImageContainer,
  Overlay,
  Close,
} from "./styles";

export const NewsletterPopup: React.FC = () => {
  const cookies = new Cookies();
  const getPopupCookie = cookies.get("PopupNewsletter");

  const [isOpen, setIsOpen] = useState(getPopupCookie !== "closed" && true);

  const current = new Date();
  const nextYear = new Date();

  nextYear.setFullYear(current.getFullYear() + 1);

  useEffect(() => {
    if (!isOpen)
      cookies.set("PopupNewsletter", "closed", {
        path: "/",
        expires: nextYear,
      });
  }, [isOpen]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Container isOpen={isOpen}>
        <Close onClick={() => setIsOpen(false)}>Fechar</Close>
        <ImageContainer>
          <img src={Image} alt="Imagem da Newsletter" />
        </ImageContainer>

        <Content>
          <span className="icon">
            <img src={MailIcon} alt="Ícone email" />
          </span>
          <p className="welcome">Bem Vindo à MAEZTRA</p>
          <p className="info">
            <span>Receba em Primeira mão</span>
            <strong>desconto e ofertas exclusivas</strong>
          </p>
          <Email type="email" placeholder="Digite seu e-mail" />
          <Btn onClick={() => setIsOpen(false)}>
            Enviar <img src={SendIcon} alt="Ícone de enviar" />
          </Btn>
        </Content>
      </Container>
    </>
  );
};
