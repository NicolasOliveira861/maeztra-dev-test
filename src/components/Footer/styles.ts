import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
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

export const FooterLinks = styled.div``;
