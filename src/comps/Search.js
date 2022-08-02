import React, { useRef, useState } from "react";
import { RiSearchFill } from "react-icons/ri";
import SyncLoader from "react-spinners/SyncLoader";
import { useGlobalContext } from "../AppContext";

const Search = () => {
  const textRef = useRef(null);
  const [chnageIcon, setChnageIcon] = useState(false);
  const { setSearch } = useGlobalContext();

  return (
    <div className="max-w-[700px]  h-auto mt-10 bg-secondary drop-shadow-lg rounded-sm mx-auto flex justify-center items-center px-5 py-3">
      <div className="flex items-center justify-between w-full h-full mx-auto">
        <input
          type="text"
          placeholder="Search your favorite drink"
          className="md:min-w-[400px] w-full h-[20px] md:h-[50px] text-xs md:text-sm text-gray-400 mx-auto outline-none"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setChnageIcon(true)}
          onBlur={() => setChnageIcon(false)}
          ref={textRef}
        />
        <div className="text-gray-400 w-[60px]">
          {chnageIcon ? (
            <SyncLoader size={5} color="#dfe4ea" />
          ) : (
            <RiSearchFill />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
