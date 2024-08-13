import React from 'react'

function Box({title,item}) {
  return (
    <div className='box'>
        <h1>
            {title}
        </h1>
        <img className='item-img' src={item&&item.img}></img>
        <h2>win</h2>
    </div>
  )
}

export default Box
