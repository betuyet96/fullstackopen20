import React from 'react';

// a proper place to define a component
// do not define a component within another component
//Param takes from the App component
//return JSX right away with => ()
const Statistic = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );

export default Statistic;