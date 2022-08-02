import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ item }) => {
  const { idDrink, strGlass, strDrink, strCategory, strDrinkThumb } = item;

  return (
    <div className="flex flex-col max-w-[280px] max-h-[500px] mx-auto">
      <div>
        <img
          src={strDrinkThumb}
          alt={strDrink}
          className="object-cover w-full h-full rounded-t-md"
        />
      </div>
      <div className="flex flex-col items-start justify-start h-auto gap-2 px-5 py-5 bg-white rounded-b-md">
        <h1 className="font-bold text-gray-900">{strDrink}</h1>
        <h1 className="text-sm font-bold tracking-widest text-gray-600">
          {strGlass}
        </h1>
        <h3 className="text-sm text-gray-400">{strCategory}</h3>
        <Link
          to={`/cocktail/${idDrink}`}
          className="px-3 py-1 text-xs font-bold tracking-widest text-white rounded-full bg-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
