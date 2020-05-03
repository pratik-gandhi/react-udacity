import React from "react";
import { queryWhiteList } from "../../config/Config";

const keywords = (
  <div>
    <h3> Search Keywords to use </h3>  
    <div>
      <strong>Following keywords can be used to search for books</strong>
    </div>
    <ul>
      {queryWhiteList.map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
    </ul>
  </div>
);

const searchKeywords = () => {
  return keywords;
};

export default searchKeywords;
