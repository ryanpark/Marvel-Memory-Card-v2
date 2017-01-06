import styles from './index.scss';
import React from 'react';
import Card from './card.jsx';

/*To do*/
let count= 0

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({selectedId:''});
  }
  resetCard() {
    
  }
  selectedCard(id) {
    count++
    if (count == 2) {
      if (id == this.state.selectedId) {
        alert('match')
      } else {
        //this.resetCard();
        //console.log(count)
        console.log(this.props.list)
      } 
      count=0 
    }
    return this.setState({selectedId:id});
  }
  render() {
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
     if ((e.thumbnail.path).includes('image_not_available')) {
       return false;
     }
       return <Card detail={e} key={i} card={i} selectedCard= {this.selectedCard.bind(this)}/> 
    })
    return (
      <div className={styles.cardsContainer}>
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}
