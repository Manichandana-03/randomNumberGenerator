// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randNum: 0}

  onButtonClick = () => {
    const randomInteger = Math.floor(Math.random() * 100)
    this.setState({randNum: randomInteger})
  }

  render() {
    const {randNum} = this.state
    const randomNum = randNum
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onButtonClick} className="button">
            Generate
          </button>
          <p className="rand-int">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
