import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
  static defaultProps = {
    faces: ['heads', 'tails']
  }

  constructor (props) {
    super (props);
    this.state = {
      face: '', 
      headsCount: 0,
      tailsCount: 0,
      totalCount: 0
    }
  }

  flipCoin = () => {
    let randFace = this.props.faces[Math.floor(Math.random() * 2)];
    this.setState({
      face: randFace,
      totalCount: this.state.totalCount + 1,
      tailsCount: randFace === 'tails' ? this.state.tailsCount + 1 : this.state.tailsCount,
      headsCount: randFace === 'heads' ? this.state.headsCount + 1 : this.state.headsCount
    });
  }

  render () {
    return (
      <div>
        <h1>Let's Flip a Coin!!</h1>
        <Coin face={this.state.face} />
        <button onClick={this.flipCoin}>Toss!</button>
        <p>Out of {this.state.totalCount} flips, there have been {this.state.headsCount} heads and {this.state.tailsCount} tails.</p>
      </div>
    )
  }
}

export default CoinFlip; 
