import React, { Component } from 'react';
import './app.scss';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

class App extends Component {
  render() {
    return (
      <div id="theme" className="light">
        <SortingVisualizer />
      </div>
    );
  }
}

export default App;
