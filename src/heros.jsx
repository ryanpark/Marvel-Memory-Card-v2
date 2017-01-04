import styles from './index.scss';
import React from 'react';

Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

export default class Heros extends React.Component {
 
  render() {
    const lists = this.props.list.concat(this.props.list).map((e,i) => {
      return <li key={i}> {e.name} 
      <img width="150px" src={e.thumbnail.path + '.' + e.thumbnail.extension} alt={e.name}/> </li>
    })
    return (
      <div>
        <ul className="list-inline">{lists.shuffle()}</ul>
      </div>
    )
  }
}
