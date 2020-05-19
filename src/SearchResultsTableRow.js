import React from "react";
var moment = require("moment"); // require

const SearchResultsTableRow = props => {
  // console.log(props.elements)
  // props.elements.map((element, index) => {
  return (
    <tr>
      <th scope="row">{props.elements.id}</th>
      <td>{props.elements.title}</td>
      <td>{props.elements.firstName}</td>
      <td>{props.elements.surname}</td>
      <td>{props.elements.email}</td>
      <td>{props.elements.roomId}</td>
      <td>{props.elements.checkInDate}</td>
      <td>{props.elements.checkOutDate}</td>
      <td>
        {moment(props.elements.checkOutDate).diff(
          moment(props.elements.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
  // })
};

export default SearchResultsTableRow;
