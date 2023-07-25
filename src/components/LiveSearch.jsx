import React from "react";
import { useSearchParams } from "react-router-dom";
import { usePinContext } from "./../contexts/PinContext";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = React.useState(searchParams.get("q") || "");
  const { setPage } = usePinContext();

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      q: searchVal,
    });
    setPage(1);
  }, [searchVal]);
  return (
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
  );
};

export default LiveSearch;
