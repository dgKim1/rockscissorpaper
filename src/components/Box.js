import React from 'react'

function Box({title,item,result}) {
  console.log(result);
  return (
    <div className={`box ${result}`}>
        <h1>
            {title}
        </h1>
        <img className='item-img' src={item&&item.img}></img>
        <h2>{result}</h2>
    </div>
  )
}

export default Box
