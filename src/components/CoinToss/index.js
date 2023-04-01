// Write your code here
import {Component} from 'react'
import './index.css'

const HeadsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, total: 0, tossImage: HeadsImage}

  flipCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImage: HeadsImage,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImage: TailsImage,
      }))
    }
  }

  render() {
    const {heads, tails, total, tossImage} = this.state

    return (
      <div className="container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tail">Heads (or) Tails</p>

          <img src={tossImage} alt="toss result" className="image" />

          <button type="button" className="button" onClick={this.flipCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
