import { createContext, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("a");

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${url}${search}`);
        const data = await res.json();
        if (data.drinks) {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
          setCocktails(data.drinks);
          setSearch("");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        setSearch("");
      }
    };
    fetchDrinks();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        loading,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
