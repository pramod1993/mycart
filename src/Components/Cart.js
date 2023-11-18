import React from 'react'

const Cart = ({cartItem, handleAddProduct, handleRemoveProduct}) => {
    const totalPrice = cartItem.reduce(
        (price, item) => price + item.quantity * item.price, 0
    );
  return (
    <>
      <div className='container'>
        <div><h5>Cart Items</h5></div>
        {cartItem.length === 0 && (
            <div>
                <h5>No items are added .</h5>
            </div>
        )}
        <div>
            {cartItem.map((item) =>(
                <div key={item.id} className='flex gap-3 items-center border-b'>
                    <img src={item.img} alt={item.name} className='w-32'/>
                    <h2>{item.name}</h2> 
                    <p>  $ {item.price} <span className='line-through text-slate-500'>$ {item.discount}</span></p>
                    <div className='flex'>
                        <button className='btn btn-primary' onClick={() => handleAddProduct(item)}>+</button>
                        <p className='w-12 text-center border items-center m-0 flex justify-center'><strong>{item.quantity}</strong></p>
                        <button className='btn btn-primary' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <div className='flex justify-between'>
            <h5>Total Price</h5>
            <h3><strong>${totalPrice}</strong></h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
