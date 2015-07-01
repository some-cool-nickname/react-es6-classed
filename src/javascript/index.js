/**
 * Created by mikhail on 01.07.15.
 */
import React from 'react';
import Base from './components/Base.React.js';

class App extends Base {
  render() {
    return (
      <h1>test</h1>
    );
  }
}

React.render(<App />, document.getElementById('app'));

export default App;