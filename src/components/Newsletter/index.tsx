import React from "react";
import { Btn, Container, Email, Title } from "./styles";

export const Newsletter: React.FC = () => {
  return (
    <Container>
      <Title>Receba Nossa Newsletter</Title>
      <Email type="email" placeholder="Digite seu e-mail" />
      <Btn type="button">Enviar</Btn>
    </Container>
  );
};
