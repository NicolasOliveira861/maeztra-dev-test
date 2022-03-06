import React from "react";
import { Search, Bar, Btn } from "./styles";

export const SearchBar: React.FC = () => {
  return (
    <Search>
      <Bar type="text" placeholder="O Que Você Busca?" />
      <Btn>Buscar</Btn>
    </Search>
  );
};
