import styles from './index.scss';
import React from 'react';
import Service from './service.jsx';
import Heros from './heros.jsx';

Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

export default class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = ({'data':''});
   }
   startGame() {
     return fetch(Service.url, {
        method: 'GET'
     })
     .then((res) => res.json())
     .then((data) => {
        const cards = data.data.results.shuffle();
        this.setState({'data': cards});
      }).catch(function(err){
        console.log(err);
     });
   }
  render() {
    return (
      <div className={styles.container}>
      <div className="row">
        <h1>Memory Cards Game</h1>
        <button className="btn btn-primary" onClick={this.startGame.bind(this)}>Bring the Heros</button>
        {this.state.data.length == 0 ? '' : <Heros list= {this.state.data} />}
        </div>
      </div>
    )
  }
}
