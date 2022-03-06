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
} from "./styles";

export const Footer: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};
