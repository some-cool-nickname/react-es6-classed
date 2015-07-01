/**
 * Created by mikhail on 01.07.15.
 */
import React, {PropTypes} from 'react';

import Base from '../Base.React.js';

class SimpleListItem extends Base {
  static propTypes = {
    data: PropTypes.shape({
      author: PropTypes.string,
      text: PropTypes.string
    })
  };

  render() {
    let data = this.props.data;

    return (
      <div className="simple-list-item">
        <h1 className="author">{data.author}</h1>
        <div className="text">{data.text}</div>
      </div>
    );
  }
}

export default SimpleListItem;