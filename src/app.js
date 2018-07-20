import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config';

import {routes} from './routes/routes'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {renderRoutes(routes)}
      </React.Fragment>
    );
  }
}

export default App;
