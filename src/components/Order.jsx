import React from 'react'
import { FaTrash } from 'react-icons/fa'

export default function Order(props) {
  return (
    <div className="item">
        <img className="" src={"./img/"+props.item.img}/>
        <h2>{props.item.title}</h2>
        <b>${props.item.price}</b>
        <FaTrash className="delete-icon" onClick={()=>props.onDelete(props.item.id)}/>
    </div>
  )
}
