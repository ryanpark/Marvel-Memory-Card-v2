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
     this.state = ({'data':'', restart: false, resetCards: false});
   }
   startGame() {
     this.setState({spinner: true})
     return fetch(Service.url, {
        method: 'GET'
     })
     .then((res) => res.json())
     .then((data) => {
        const cards = data.data.results.filter(function(e) {
           if ((e.thumbnail.path).includes('image_not_available')) {
              return false;
           } 
           return e;
        }).shuffle();
        this.setState({'data': cards, restart: true, spinner: false});
      }).catch(function(err){
        console.log(err);
     });
   }
   restartGame() {
   
   }
  render() {
    return (
      <div className={styles.container}>
      <div className="row">
        <h1>Memory Cards Game</h1>
        <button className="btn btn-primary" onClick={this.state.restart ? this.restartGame.bind(this): this.startGame.bind(this)}> {this.state.restart ? 'Start Over':'Bring the Heros'}</button>
        {this.state.spinner == true ? <div className={styles.loader}>Loading...</div> : null }
        {this.state.data.length == 0 ? null : <Heros list= {this.state.data} reset= {this.state.reset} />}
        </div>
      </div>
    )
  }
}