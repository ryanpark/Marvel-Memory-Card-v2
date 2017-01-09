import styles from './index.scss';
import React from 'react';
import Card from './card.jsx';

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({selectedId: '', reset: false});
  }
  resetCard() {
      alert('no-match')
  }
  selectedCard(id) {

     const pId = this.state.selectedId;
     const self = this;

     this.setState({selectedId: id})

     if (pId.length == 0) {
       return 
     } else {
        if (pId == id) {
          alert('match');
        } else{
          setTimeout(function() {
             self.setState({reset: true})
             self.setState({reset: false})
          }, 1000);
        }
        this.setState({selectedId:''})
     }
  }
  render() {
    
     let condition = false;
     
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
     if ((e.thumbnail.path).includes('image_not_available')) {
       return false;
     }
       return <Card reset={this.state.reset}  selectedId={this.state.selectedId} detail={e} key={i} card={i} selectedCard= {this.selectedCard.bind(this)} /> 
    })
    return (
      <div className={styles.cardsContainer}>
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}
