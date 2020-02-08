import React from 'react';
import CostsIndex from '../containers/costs_index';

const App = (props) => {
  console.log('App reached!');
  return (
    <div className="thin-container">
      <CostsIndex monthFromParams={props.match.params.month} />
    </div>
  );
};

export default App;
