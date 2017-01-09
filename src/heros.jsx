import styles from './index.scss';
import React from 'react';
import Card from './card.jsx';

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({selectedId: {a:'',b:''}, primary: false, reset: false});
  }
  resetCard() {
      alert('no-match')
  }
  componentWillUpdate(nextProps, nextState) {
  //  console.log(nextProps, nextState)
  }
  selectedCard(id) {
    
    this.setState({
      selectedId : {
        a: id,
        b: this.state.selectedId.b
      }
    });
    if (this.state.selectedId.a.toString().length !== 0) {
      this.setState({
      selectedId : {
        a: this.state.selectedId.a,
        b: id
      }
    });
    }
    
    console.log(this.state.selectedId)
    /*
    if (this.state.primary == false) {
        return this.setState({primary: true})
    } else {
      this.setState({selectedCard: id , primary: false})
      //this.setState({primary: false}) 
    }*/
  }
  render() {
    
     let condition = false;
     
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
     if ((e.thumbnail.path).includes('image_not_available')) {
       return false;
     }
     
     
       if (e.id == this.state.selectedId.a || e.id == this.state.selectedId.b) {
          condition = true; 
       } else {
          condition = false;
       }
       return <Card reset={this.state.reset} flipped= {condition} selectedId={this.state.selectedId} detail={e} key={i} card={i} selectedCard= {this.selectedCard.bind(this)} /> 
    })
    return (
      <div className={styles.cardsContainer}>
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}
