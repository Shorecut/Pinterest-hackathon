import React, { useEffect, useState } from "react";
import { usePinContext } from "../contexts/PinContext";
import { useSearchParams } from "react-router-dom";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");
  const { setPage } = usePinContext();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      q: searchVal,
    });
    setPage(1);
  }, [searchVal]);

  return (
    <div>
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          type="search"
          name=""
          placeholder=" &#128269; Search"
          id=""
        />
      </div>
    </div>
  );
};

export default LiveSearch;
