import React from 'react'

function Button({btnId,title, onClick}) {
  return (
    <button className="button" id={btnId} onClick={onClick}>{title}</button>
  )
}

export default Button