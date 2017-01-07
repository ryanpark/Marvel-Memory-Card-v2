import styles from './index.scss';
import React from 'react';
import Card from './card.jsx';

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({selectedId: '', primary: false, reset: false});
  }
  resetCard() {
      alert('no-match')
  }
  selectedCard(id) {
    this.setState({selectedId: id});
    
    if (this.state.primary == false) {
        return this.setState({primary: true})
    } else {
      if (id == this.state.selectedId) {
        alert('match')
      } else {
        this.resetCard();
      }
      this.setState({primary: false}) 
    }
  }
  render() {
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
     if ((e.thumbnail.path).includes('image_not_available')) {
       return false;
     }
       return <Card reset={this.state.reset} detail={e} key={i} card={i} selectedCard= {this.selectedCard.bind(this)} ref="cardLists"/> 
    })
    return (
      <div className={styles.cardsContainer}>
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}
