import styles from './index.scss';
import React from 'react';

export default class Heros extends React.Component {
 
  render() {
    const lists = this.props.list.map((e,i) => {
      return <li key={i}> {e.name} 
      <img width="150px" src={e.thumbnail.path + '.' + e.thumbnail.extension} alt={e.name}/> </li>
    })
    return (
      <div>
        <ul>{lists}</ul>
      </div>
    )
  }
}
