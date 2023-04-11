import { useState } from 'react'

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="single-item">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" type="button">
        Delete
      </button>
    </div>
  )
}

export default SingleItem
