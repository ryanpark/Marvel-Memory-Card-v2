import styles from './index.scss';
import React from 'react';
import Card from './card.jsx';

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({selectedId: '', reset: false, matchId: [] });
  }
  resetCard() {
      alert('no-match')
  }
  selectedCard(id) {

     const pId = this.state.selectedId;
     
     this.setState({selectedId: id})

     if (pId.length !== 0) {
       if (pId == id) {
          this.setState({matchId: this.state.matchId.concat([id])});
        } else{
          setTimeout(function() {
             this.setState({reset: true})
             this.setState({reset: false})
          }.bind(this), 1000)
        }
        this.setState({selectedId:''}) 
     } 
  }
  render() {
    
     let disable = false;
    
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
     if ((e.thumbnail.path).includes('image_not_available')) {
       return false;
     }
     if (this.state.matchId.includes(e.id)) {
        disable = true;     
     } else {
        disable = false;
     }
     
     return <Card reset={this.state.reset} disableCard= {disable} selectedId={this.state.selectedId} detail={e} key={i} card={i} selectedCard= {this.selectedCard.bind(this)} />  
     
      
    })
    return (
      <div className={styles.cardsContainer}>
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}
