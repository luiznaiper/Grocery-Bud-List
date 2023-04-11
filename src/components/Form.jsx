import { useState } from 'react'

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('')

  const handleChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    if (!newItem) {
      return
    } else {
      addItem(newItem)
      setNewItem('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  )
}

export default Form
