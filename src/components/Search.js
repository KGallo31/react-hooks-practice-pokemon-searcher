import React from "react";

function Search({changeSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={changeSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
