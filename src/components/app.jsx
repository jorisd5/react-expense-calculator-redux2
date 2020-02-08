import React from 'react';
import CostsIndex from '../containers/costs_index';

const App = (props) => {
  return (
    <div className="thin-container">
      <CostsIndex monthFromParams={props.match.params.month} />
    </div>
  );
};

export default App;
