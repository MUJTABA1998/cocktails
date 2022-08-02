import React from "react";
import { useGlobalContext } from "../AppContext";
import Cocktail from "./Cocktail";

const Drinks = () => {
  const { cocktails } = useGlobalContext();

  return (
    <div className="main-container">
      <div className="flex flex-wrap items-start justify-start gap-5 gap-y-10">
        {cocktails.map((drink) => (
          <Cocktail item={drink} key={drink.idDrink} />
        ))}
      </div>
    </div>
  );
};

export default Drinks;
