import styles from './index.scss';
import React, {PropTypes} from 'react';
import Card from './card.jsx';

export default class Heros extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
                   selectedId: '', 
                   reset: false, 
                   matchId: []
                  });
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
     
     const lists = this.props.list.concat(this.props.list).map((e,i) => {
      
     return <Card reset={this.state.reset} 
                  disableCard= {this.state.matchId.includes(e.id)} 
                  selectedId={this.state.selectedId} 
                  detail={e} 
                  key={i} 
                  card={i} 
                  selectedCard= {this.selectedCard.bind(this)} />
    })
    
    return (
      <div className={styles.cardsContainer}>
        {this.state.matchId.length == this.props.list.length ? <div className={styles.alert_success_handle + ' ' + 'alert alert-success'} role="alert"><h2>Well Done!</h2></div> : null}
        <ul className={styles.listItem + ' ' + 'list-inline'}>{lists}</ul>
      </div>
    )
  }
}

Heros.propTypes = {
  list: PropTypes.array
}