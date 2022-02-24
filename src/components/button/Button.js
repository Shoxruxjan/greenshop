import React from 'react'
import "./index.scss"
export default function Button(props) {
    let style={width:props.width+"px",height:props.height+"px"}
  return (
    <button className='my-btn' style={style}>
        {props.img&& <img className="login" src={props.img} alt={props.content} />}
        {props.content}
        </button>
  )
}
