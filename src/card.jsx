import styles from './index.scss';
import React, {PropTypes} from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({flipped: false, deg : Math.floor(Math.random() * 360) + 1})  
    }
    flippCard() {
      this.setState({flipped: true});
      return this.props.selectedCard(this.props.detail.id);
    }
    componentWillReceiveProps(nextProps) {
       if (nextProps.reset == true) {
           this.setState({flipped: false})
       }
    }
   getStyles() {
    return {
        transform: 'rotate('+ this.state.deg +'deg)'
    }    
   }
   render() {                                              
        return (
            <li>
                <div onClick={ this.props.disableCard == false ? this.flippCard.bind(this) : null } 
                     style={this.getStyles()} 
                     className={(this.state.flipped == true || this.props.disableCard == true  ? styles.flipped : ' ') + ' '  + styles.card + ' ' + styles.effect__click}>
                    <div className={styles.card__front}><span className={styles.card__text}></span>
                    </div>
                    <div className={styles.card__back}>
                        <span className={styles.card__text}> <img className={styles.thumbnail} width="150px" src={this.props.detail.thumbnail.path + '.' + this.props.detail.thumbnail.extension} alt={this.props.detail.name}/></span>
                    </div>
                </div>
             </li>
        );   
    }
}

Card.propTypes = {
  card: PropTypes.number,
  detail: PropTypes.object,
  disableCard: PropTypes.bool,
  reset: PropTypes.bool,
  selectedCard: PropTypes.func
}