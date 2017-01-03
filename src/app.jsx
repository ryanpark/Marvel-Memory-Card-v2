import styles from './index.scss';
import React from 'react';
import Service from './service.jsx';

export default class App extends React.Component {
   componentDidMount() { 
    return fetch(Service.url, {
        method: 'GET'
     })
        .then((res) => res.json()) 
        .then((data) => {
          this.setState({'data': data});
      }).catch(function(err){
        console.log(err);
     });
  }
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        {Service.url}
      </div>
    )
  }
}
