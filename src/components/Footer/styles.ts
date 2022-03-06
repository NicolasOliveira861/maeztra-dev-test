import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  padding: 24px 80px 32px;
  background: #353535;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialNetworks = styled(Row)`
  margin-bottom: 36px;
`;

export const PaymentMethods = styled(Row)`
  margin-bottom: 32px;
`;

export const DevelopedBy = styled(Row)`
  color: #ffffff;

  .vtex,
  .maeztra {
    display: flex;
    flex-direction: column;

    > span {
      margin-bottom: 6px;
    }
  }
`;
