import React from 'react'
import {useParams} from 'react-router-dom'

const Item = () => {
  let {elem} = useParams()

  return (
    <div>Item {elem}</div>
  )
}

export default Item