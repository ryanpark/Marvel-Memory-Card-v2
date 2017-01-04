import styles from './index.scss';
import React from 'react';
import Service from './service.jsx';
import Heros from './heros.jsx';

export default class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = ({'data':''});
   }
   componentDidMount() { 
    return fetch(Service.url, {
        method: 'GET'
     })
     .then((res) => res.json())
     .then((data) => {
          this.setState({'data': data.data.results});
      }).catch(function(err){
        console.log(err);
     });
  }
  render() {
    return (
      <div>
        <h1>Memory Cards Game</h1>
        {this.state.data.length == 0 ? 'loading..' : <Heros list= {this.state.data} />}
      </div>
    )
  }
}
