import styled from "styled-components";

interface FooterLinksProps {
  isOpen?: boolean;
}

export const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
`;

export const FooterInfo = styled.div`
  padding: 24px 80px 32px;
  background: #353535;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 19px 161px 17px;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 900px) {
    align-items: center;
    column-gap: 22px;
  }
`;

export const SocialNetworks = styled(Row)`
  margin-bottom: 36px;

  @media screen and (min-width: 900px) {
    margin-bottom: 0;
  }
`;

export const PaymentMethods = styled(Row)`
  margin-bottom: 32px;

  @media screen and (min-width: 900px) {
    margin-bottom: 0;
  }
`;

export const DevelopedBy = styled(Row)`
  color: #ffffff;

  .vtex,
  .maeztra {
    display: flex;
    flex-direction: column;
    font-size: 0.625rem;
    font-family: "Open Sans", sans-serif;

    > span {
      margin-bottom: 6px;
    }
  }
`;

export const FooterLinks = styled.div`
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 20% 64px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 37px 31px 56px 30px;
  }
`;

export const LinksList = styled.div<FooterLinksProps>`
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    flex-direction: column;
    transition: 0.8s;

    @media screen and (max-width: 768px) {
      max-height: 0;
      overflow-y: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    &.active {
      .list {
        max-height: 200px;
      }

      > button {
        .minus {
          display: block;
        }

        .plus {
          display: none;
        }
      }
    }
  }
`;

export const LinkTitle = styled.button<FooterLinksProps>`
  width: fit-content;
  font-weight: bold;
  font-size: 1rem;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #353535;
  margin-bottom: 25px;
  pointer-events: none;

  .minus {
    display: none;
  }

  .plus {
    display: none;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    pointer-events: all;

    .plus {
      display: block;
    }
  }
`;

export const LinkItem = styled.a`
  margin-bottom: 24px;

  @media screen and (min-width: 900px) {
    :last-child {
      margin-bottom: 0;
    }
  }
`;
