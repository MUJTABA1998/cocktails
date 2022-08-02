import React from "react";
import Drinks from "../comps/Drinks";
import Search from "../comps/Search";
import { useGlobalContext } from "../AppContext";
import Dot from "react-spinners/DotLoader";

const Home = () => {
  const { loading, cocktails } = useGlobalContext();
  return (
    <div className="flex flex-col items-center justify-start py-10 main-container gap-7">
      <Search />
      <div>
        {loading ? (
          <Dot color="#ffff" size={50} className="mt-36" />
        ) : (
          <div>
            {cocktails.length <= 0 ? (
              <h1>No Cocktail match your criteria</h1>
            ) : (
              <Drinks />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
