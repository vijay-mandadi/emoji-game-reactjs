import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderscores = () => {
    const {score, topscore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p>Top Score: {topscore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {this.renderscores()}
      </div>
    )
  }
}

export default NavBar
