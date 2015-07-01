/**
 * Created by mikhail on 01.07.15.
 */
import React from 'react';

import Base from './components/Base.React.js';
import SimpleList from './components/SimpleList/SimpleList.React.js';
import MockData from './components/SimpleList/MockData.js'

class App extends Base {
  render() {
    return (
      <SimpleList items={[MockData, MockData, MockData]}/>
    );
  }
}

React.render(<App />, document.getElementById('app'));

export default App;