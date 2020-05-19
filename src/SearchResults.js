import React from "react";
import SearchResultsTableHead from "./SearchResultsTableHead.js";
import SearchResultsTableRow from "./SearchResultsTableRow.js";

const SearchResults = props => (
  <table className="table">
    <SearchResultsTableHead />
    <tbody>
      {props.results.map((element, index) => {
        return <SearchResultsTableRow elements={element} key={index} />;
      })}
      {/* <SearchResultsTableRow elements={["2", "Mrs", "Ottessa", "Doe", "Ottessa@doe.com", "3", "2017-11-20", "2017-11-25"]} /> */}
      {/* <SearchResultsTableRow elements={["3", "Mr", "Jonathan", "Doe", "Jonathan@doe.com", "2", "2017-11-18", "2017-11-20"]} /> */}
    </tbody>
  </table>
);

export default SearchResults;
