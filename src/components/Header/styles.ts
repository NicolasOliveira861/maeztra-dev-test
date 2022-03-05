import styled from "styled-components";

interface NavMobileProps {
  isOpen?: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

export const Topbar = styled.div`
  width: 100%;
  height: 24px;
  background: #353535;
  color: #000000;
  font-size: 10px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
`;

export const Navbar = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  padding: 28px 15px 28px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 940px) {
    .menu-icon {
      display: block;
    }

    .user-icon,
    .favorite-icon {
      display: none;
    }
  }

  .logo {
    margin-left: 19px;
  }

  .icons {
    width: 60%;
    display: flex;
    justify-content: flex-end;

    .search-icon {
      margin-right: 40px;
    }
  }
`;

export const SecondaryNavbar = styled.div<NavMobileProps>`
  .menu-header,
  .close-btn {
    display: none;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    animation: ${(props) =>
      props.isOpen ? "slideIn 0.5s forwards" : "slideOut 0.5s forwards"};
    flex-direction: column;
    position: absolute;
    left: -100%;
    top: 0;
    width: 93%;
    height: 100vh;
    background: #ffffff;
    z-index: 10;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    padding: 40px 20px;
    transition: 0.5s;

    @keyframes slideIn {
      from {
        left: -100%;
      }
      to {
        left: 0;
      }
    }

    @keyframes slideOut {
      from {
        left: 0;
      }
      to {
        left: -100%;
      }
    }

    .menu-header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #dedede;
      margin-bottom: 15px;
      padding-bottom: 15px;

      > span {
        display: flex;
        align-items: center;

        > img {
          margin-right: 8px;
        }
      }
    }

    .close-btn {
      display: block;
      position: absolute;
      right: 10px;
      top: 10px;

      > img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;

  &#novidades {
    color: #faa500;
    font-weight: 700;

    > img {
      margin-right: 9.75px;

      @media screen and (max-width: 900px) {
        height: 24px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
`;

export const Overlay = styled.div<NavMobileProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;