import React from 'react'

const Producs = ({productItems, handleAddProduct}) => {
  return (
    <>
      <div className='container'>
        <div className='grid md:grid-cols-4 gap-3'>
            {productItems.map((productItems)=>(
                <div className='bg-slate-100 p-2' key={productItems.id}>
                    <div>
                        <img src={productItems.img} alt={productItems.name} />
                    </div>
                    <div>
                        <h3>{productItems.name}</h3>
                        <p>$ {productItems.price} <span className='line-through text-slate-500'>$ {productItems.discount}</span></p>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={() => handleAddProduct(productItems)}>Add To Card</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Producs
