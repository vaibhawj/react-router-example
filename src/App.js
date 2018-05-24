import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PointSummary from './PointSummary';
import PointDetails from './PointDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/points" component={PointSummary} />
          <Route exact path="/pointDetails" component={PointDetails} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
