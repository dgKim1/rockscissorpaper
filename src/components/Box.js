import React from 'react'

function Box({title,item,result}) {
  console.log(item);
  return (
    <div className={`box ${item ? result : 'tie'}`}>
        <h1>
            {title}
        </h1>
        <img className='item-img' src={item&&item.img}></img>
        <h2>{item ? result : 'tie'}</h2>
    </div>
  )
}

export default Box
