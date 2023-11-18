import React from 'react'

const Cards = ({item}) => {
  return (
    <div>
      <div className="container">
        <div className='grid-cols-4 grid gap-3'>
            {item.map((val) =>(
                <div key={val.id}>
                    <div>
                        <img src={val.img} alt={val.name} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{val.name}</h2>
                        <p>{val.price}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
