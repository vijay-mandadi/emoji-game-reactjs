import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedList: [], topscore: 0, isGameEnd: false}

  addToList = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const present = clickedList.includes(id)
    if (present) {
      this.finishGameAndSetTopScore(clickedList.length)
    } else {
      if (emojisList.length - 1 === clickedList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prev => ({
        clickedList: [...prev.clickedList, id],
      }))
    }
  }

  finishGameAndSetTopScore = newscore => {
    const {topscore} = this.state
    if (newscore > topscore) {
      this.setState({topscore: newscore})
    }
    this.setState({isGameEnd: true})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartGame = () => {
    this.setState({clickedList: [], isGameEnd: false})
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isWon = emojisList.length === clickedList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedList.length}
      />
    )
  }

  render() {
    const {topscore, isGameEnd, clickedList} = this.state
    const score = clickedList.length
    const shuffledList = this.shuffledEmojisList()

    return (
      <>
        <NavBar score={score} isGameEnd={isGameEnd} topscore={topscore} />
        <div className="bg-container">
          {isGameEnd ? (
            this.renderWinOrLose()
          ) : (
            <ul className="list-container">
              {shuffledList.map(each => (
                <EmojiCard
                  key={each.id}
                  item={each}
                  addToList={this.addToList}
                />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
