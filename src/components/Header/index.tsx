import React, { useEffect, useState } from "react";
import MenuIcon from "assets/svg/icon-menu.svg";
import Logo from "assets/img/maeztra-logo.png";
import SearchIcon from "assets/svg/search-icon.svg";
import User from "assets/svg/user.svg";
import Favorite from "assets/svg/favorite.svg";
import Dress from "assets/svg/dress.svg";
import CloseIcon from "assets/svg/close.svg";
import ShoppingBag from "assets/svg/shopping-bag.svg";
import { SearchBar } from "components/SearchBar";

import {
  Container,
  Navbar,
  SecondaryNavbar,
  Topbar,
  NavItem,
  Overlay,
} from "./styles";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")!.style.overflowY = "hidden";
    } else document.querySelector("body")!.style.overflowY = "scroll";
  }, [isOpen]);

  return (
    <Container>
      <Topbar>
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </Topbar>
      <Navbar>
        <button
          className="menu-icon"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={MenuIcon} alt="Menu Icon" />
        </button>
        <div className="logo">
          <img src={Logo} alt="Logo Maeztra" />
        </div>

        <SearchBar />

        <div className="icons">
          <span className="search-icon">
            <img src={SearchIcon} alt="Search Icon" />
          </span>

          <span className="user-icon">
            <img src={User} alt="User Icon" />
            Minha Conta
          </span>

          <span className="favorite-icon">
            <img src={Favorite} alt="Favorite Icon" />
            Meus favoritos
          </span>

          <span className="shopping-bag">
            <img src={ShoppingBag} alt="Search Icon" />
            <p>Meu Carrinho</p>
          </span>
        </div>
      </Navbar>

      <SecondaryNavbar isOpen={isOpen}>
        <button
          className="close-btn"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <img src={CloseIcon} alt="Close Icon" />
        </button>

        <div className="menu-header">
          <span className="user-icon">
            <img src={User} alt="User Icon" />
            Minha Conta
          </span>

          <span className="favorite-icon">
            <img src={Favorite} alt="Favorite Icon" />
            Meus favoritos
          </span>
        </div>

        <NavItem href="/" id="novidades">
          <img src={Dress} alt="Dress Icon" />
          Novidades
        </NavItem>
        <NavItem href="/">Vestidos</NavItem>
        <NavItem href="/">Roupas</NavItem>
        <NavItem href="/">Sapatos</NavItem>
        <NavItem href="/">Lingerie</NavItem>
        <NavItem href="/">Acessórios</NavItem>
        <NavItem href="/">OUTLET</NavItem>
      </SecondaryNavbar>

      <Overlay
        onClick={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      />
    </Container>
  );
};
