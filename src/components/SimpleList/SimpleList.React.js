/**
 * Created by mikhail on 01.07.15.
 */
import React from 'react';

import Base from '../Base.React.js';
import SimpleListItem from './SimpleListItem.React.js';

class SimpleList extends Base {
  state = {
    items: [{
      text: 'Item text',
      author: 'Author'
    }, {
      text: 'Item text 1',
      author: 'Author 1'
    }, {
      text: 'Item text 2',
      author: 'Author 2'
    }]
  };

  getListItem (data, index) {
    return <SimpleListItem key={index} data={data}/>;
  }
  render() {
   return (
     <div className="simple-list">{this.state.items.map(this.getListItem)}</div>
   );
  }
}

export default SimpleList;