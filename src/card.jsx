import styles from './index.scss';
import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({test: false})  
    }
    resetCards() {
        console.log(this.props.details)
    }
    flippCard() {
       
      this.props.selectedCard(this.props.detail.id);
      /*
      var self = this;
      if (this.props.selectedId.length !== 0) {
         if (this.props.detail.id !== this.props.selectedId) {
             this.props.selectedCard(''); 
             console.log('no match')
             
             setTimeout(function() {
                self.setState({
                    flipped : false
                })          
             }, 1000);
             
           // return false;
         } else {
             console.log('no match')
            this.props.selectedCard('');
         }
       }
       
       
       this.setState({
            flipped : true
       })
          
       
      //return this.props.selectedCard(this.props.detail.id);
    /**/
     
     
      
    }
    render() {                                              
        return (
            <li>
                <div onClick={this.flippCard.bind(this)} className={ (this.props.flipped == true ? styles.flipped : ' ') + ' '  + styles.card + ' ' + styles.effect__click}>
                    <div className={styles.card__front}>
                        <span className={styles.card__text}>{this.props.detail.name}</span>
                    </div>
                    <div className={styles.card__back}>
                        <span className={styles.card__text}> <img className={styles.thumbnail} width="150px" src={this.props.detail.thumbnail.path + '.' + this.props.detail.thumbnail.extension} alt={this.props.detail.name}/></span>
                    </div>
                </div>
             </li>
        );   
    }
}

