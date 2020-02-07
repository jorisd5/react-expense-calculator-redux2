import React from 'react';
import CostsIndex from '../containers/costs_index';

const App = (props) => {
  console.log('App reached!');
  return (
    <CostsIndex monthFromParams={props.match.params.month} />
  );
};

export default App;
