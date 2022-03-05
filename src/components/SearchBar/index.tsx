import React from "react";
import { Search, Bar, Btn } from "./styles";

export const SearchBar: React.FC = () => {
  return (
    <Search>
      <Bar />
      <Btn>Buscar</Btn>
    </Search>
  );
};
