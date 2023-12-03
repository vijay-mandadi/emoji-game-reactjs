// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, addToList} = props
  const {id, emojiName, emojiUrl} = item

  const clickedItem = () => {
    addToList(id)
  }

  return (
    <li className="listitem">
      <button type="button" onClick={clickedItem}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
