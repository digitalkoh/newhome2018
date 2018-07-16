import React, { Component } from 'react';
import CardItem from './CardItem';

class Cards extends Component {

  render() {

    let cardItems;
    if(this.props.cardsdata){
      cardItems = this.props.cardsdata.map(card => {
        return (
          <CardItem key={card.title} card={card} />
        )
      });
    }

    return (
      <div className="Cards">
        {cardItems}
      </div>
    );
  }
}

export default Cards;
