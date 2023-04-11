import { useState } from 'react'

const Form = () => {
  const [newItem, setNewItem] = useState('')

  const handleChange = (e) => {
    setNewItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(newItem)
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
