/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import Facebook from "assets/svg/facebook.svg";
import Linkedin from "assets/svg/linkedin.svg";
import Instagram from "assets/svg/instagram.svg";
import Youtube from "assets/svg/youtube.svg";
import Visa from "assets/svg/visa.svg";
import Mastercard from "assets/svg/mastercard.svg";
import VtexLogo from "assets/img/vtex-logo.png";
import MaeztraLogo from "assets/img/maeztra-logo-white.png";
import {
  Container,
  DevelopedBy,
  PaymentMethods,
  SocialNetworks,
  FooterInfo,
  FooterLinks,
  LinksList,
  LinkTitle,
  LinkItem,
} from "./styles";

export const Footer: React.FC = () => {
  function handleOpen(ev: Event) {
    const parentList = (ev.currentTarget as HTMLElement)!.parentElement;

    if (!parentList?.classList.contains("active")) {
      return parentList && parentList.classList.add("active");
    }
    return parentList && parentList.classList.remove("active");
  }

  return (
    <Container>
      <FooterLinks>
        <LinksList>
          <LinkTitle
            onClick={(e: any) => {
              handleOpen(e);
            }}
          >
            Informações
            <span className="plus">+</span>
            <span className="minus">-</span>
          </LinkTitle>
          <div className="list">
            <LinkItem>Quem Somos</LinkItem>
            <LinkItem>Prazo de Envio</LinkItem>
            <LinkItem>Trocas e Devoluções</LinkItem>
            <LinkItem>Promoções e Cupons</LinkItem>
          </div>
        </LinksList>

        <LinksList>
          <LinkTitle
            onClick={(e: any) => {
              handleOpen(e);
            }}
          >
            Minha Conta
            <span className="plus">+</span>
            <span className="minus">-</span>
          </LinkTitle>
          <div className="list">
            <LinkItem>Minha Conta</LinkItem>
            <LinkItem>Meus Pedidos</LinkItem>
            <LinkItem>Cadastre-se</LinkItem>
          </div>
        </LinksList>

        <LinksList>
          <LinkTitle
            onClick={(e: any) => {
              handleOpen(e);
            }}
          >
            Onde nos Encontrar
            <span className="plus">+</span>
            <span className="minus">-</span>
          </LinkTitle>
          <div className="list">
            <LinkItem>Lojas</LinkItem>
            <LinkItem>Endereço</LinkItem>
          </div>
        </LinksList>
      </FooterLinks>
      <FooterInfo>
        <SocialNetworks>
          <img src={Facebook} alt="Facebook Icon" />
          <img src={Linkedin} alt="Linkedin icon" />
          <img src={Instagram} alt="Instagram icon" />
          <img src={Youtube} alt="Youtube icon" />
        </SocialNetworks>

        <PaymentMethods>
          <img src={Visa} alt="Visa Icon" />
          <img src={Mastercard} alt="Mastercard icon" />
          <img src={Visa} alt="Visa Icon" />
          <img src={Mastercard} alt="Mastercard icon" />
        </PaymentMethods>

        <DevelopedBy>
          <div className="vtex">
            <span>Powered by</span>
            <img src={VtexLogo} alt="Vtex Logo" />
          </div>

          <div className="maeztra">
            <span>Developed by</span>
            <img src={MaeztraLogo} alt="Maeztra Logo" />
          </div>
        </DevelopedBy>
      </FooterInfo>
    </Container>
  );
};
