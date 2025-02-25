import React from 'react'
import DirectoryItem from '../DirectoryItem/DirectoryItem'
import { DirectoryContainer } from './DirectoryStyles'

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  )
}

export default Directory