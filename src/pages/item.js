import React from 'react'
import {useParams} from 'react-router-dom'
import { Filter } from '../components'

const Item = () => {
  let {itemID} = useParams()
  console.log(itemID);
  return (
    <>
      <Filter />
      <h1>hello</h1>
    </>
  )
}

export default Item