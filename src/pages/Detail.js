import React from "react";
import { useGlobalContext } from "../AppContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { cocktails } = useGlobalContext();
  const { id } = useParams();

  const item = cocktails.find((drink) => drink.idDrink === id);
  const {
    strGlass,
    strDrink,
    strCategory,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = item;

  return (
    <div className="main-container">
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold tracking-widest text-center text-white mb-28 md:mb-10 drop-shadow-lg">
          Cocktail Details
        </h1>
        <div className="flex mt-8 flex-col max-w-[700px] max-h-[400px] mx-auto h-auto w-full items-center justify-center gap-16 py-16 md:flex-row">
          <div>
            <img
              src={strDrinkThumb}
              alt={strDrink}
              className="max-w-[300px] h-full rounded-md border-2 border-white"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold tracking-widest text-white">
              {strDrink}
            </h1>
            <h1 className="text-lg font-semibold tracking-[2px] text-gray-200 uppercase">
              {strCategory}
            </h1>
            <h1 className="text-sm font-semibold tracking-[2px] text-gray-200 uppercase">
              {strGlass}
            </h1>
            <div className="grid items-center justify-center grid-cols-3 gap-3">
              <h5 className="px-2 py-2 text-xs font-bold text-center text-gray-700 rounded-full drop-shadow-2xl bg-secondary">
                {strIngredient1}
              </h5>
              <h5 className="px-2 py-2 text-xs font-bold text-center text-gray-700 rounded-full drop-shadow-2xl bg-secondary">
                {strIngredient2}
              </h5>
              <h5 className="px-1 py-2 text-xs font-bold text-center text-gray-700 rounded-full drop-shadow-2xl bg-secondary">
                {strIngredient3}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
