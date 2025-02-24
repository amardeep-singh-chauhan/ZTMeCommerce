import React from 'react'
import './Directory.scss'
import DirectoryItem from '../DirectoryItem/DirectoryItem'

function Directory({ categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory