import React from 'react' 
import data from "./data";
const Buttons = ({menuItems, filterItem,setCartItem}) => {
    const {productItems} = data;
  return (
    <div className='md:flex gap-2 justify-end '>
      {menuItems.map(val => (         
            <div key={val.id}>
              <button className='bg-orange-600 px-3 py-2 text-white' onClick={() => filterItem(val) }>{val}</button>
            </div>
      ))}
      <button className='bg-orange-600 px-3 py-2 text-white' onClick={() => setCartItem(productItems) }>All</button>
    </div>
  )
}

export default Buttons
