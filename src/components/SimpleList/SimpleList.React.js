/**
 * Created by mikhail on 01.07.15.
 */
import React, {PropTypes} from 'react';

import Base from '../Base.React.js';
import SimpleListItem from './SimpleListItem.React.js';

require('./_simpleList.scss');

class SimpleList extends Base {
  static propTypes = {
    data: PropTypes.array
  };
  static defaultPropTypes = {
    data: []
  };

  getListItem (data, index) {
    return <SimpleListItem key={index} data={data}/>;
  }
  render() {
   return (
     <div className="simple-list">{this.props.items.map(this.getListItem)}</div>
   );
  }
}

export default SimpleList;