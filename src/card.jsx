import styles from './index.scss';
import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            click: false
        });
    }
    flippCard() {
      if (this.state.click == false) {
          this.setState({
              click : true
          })
      }
      this.props.selectedCard(this.props.detail.id);
    }
    render() {
        return (
            <li>
                <div onClick={this.flippCard.bind(this)} className={ (this.state.click == true ? styles.flipped : ' ') + ' '  + styles.card + ' ' + styles.effect__click}>
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

