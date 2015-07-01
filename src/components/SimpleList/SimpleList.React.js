/**
 * Created by mikhail on 01.07.15.
 */
import React from 'react';
import MockData from './MockData.js';

import Base from '../Base.React.js';
import SimpleListItem from './SimpleListItem.React.js';

require('./_simpleList.scss');

class SimpleList extends Base {
  state = {
    items: [MockData, MockData, MockData]
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