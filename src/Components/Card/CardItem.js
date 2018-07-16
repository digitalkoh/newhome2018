import React, { Component } from 'react';

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: 'panel',
            active: 'Card'
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
    	this.setState(
            { 
                visible: this.state.visible === 'panel'? 'panel visible' : 'panel',
                active: this.state.active === 'Card'? 'Card active' : 'Card'
            }
        );
    }

    render() {
        
        return (
        <div className={this.state.active} data-cardid={this.props.card.id} onClick={this.handleClick}>
            <h3>{this.props.card.title}</h3>
            <div>{this.props.card.text1}</div>
            
            <div className={this.state.visible}>
                <p>{this.props.card.id}</p>
            </div>

        </div>
        );
    }
}

export default CardItem;