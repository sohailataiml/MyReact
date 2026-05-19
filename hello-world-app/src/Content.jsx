import { useState } from 'react'

export default function Content() {
  const [name, setName] = useState('')

  const handleClick = () => {
    console.log('Clicked')
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="content-component">
      <button type="button" onClick={handleClick}>
        On Click
      </button>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        {name && <p>Name: {name}</p>}
      </div>
    </div>
  )
}
