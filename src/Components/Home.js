import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../img/banner.jpg';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import * as Styled from './HomeStyled';
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
import brand from '../img/brand.png';
import brand1 from '../img/brand-2.png';
import brand2 from '../img/brand-3.png';
import brand3 from '../img/brand-4.png';
import brand4 from '../img/brand-5.png';
import brand5 from '../img/brand-6.png';
import brand6 from '../img/brand-7.png';
import brand7 from '../img/brand-8.png';
import images20 from '../img/Red-Cap.jpg';
 import images21 from '../img/Red-Cap1.jpg';
 import images18 from '../img/Gaming-G.jpg';
 import images19 from '../img/Gaming-G1.jpg';
 import images12 from '../img/USB-Charger.jpg';
 import images13 from '../img/USB-Charger1.jpg';
 import banner3 from '../img/banner-1.jpg';
 import banner4 from '../img/banner-2.jpg';
 import images from '../img/Apple-Laptop.jpg';
 import images1 from '../img/Apple-Laptop1.jpg';
 import images2 from '../img/Sticky-Camera.jpg';
 import images3 from '../img/Sticky-Camera1.jpg'; 
import Buttons from './Buttons';  
import Slider from 'react-slick';
import imagebg from '../img/image-1.png';
import imagebg1 from '../img/image-2.png';
import vendor from '../img/cropped-vendor-2.jpg';
import vendor1 from '../img/cropped-vendor-3.jpg';
import vendor2 from '../img/cropped-vendor-4.jpg';
import vendor3 from '../img/cropped-vendor.jpg';
import banner5 from '../img/banner-5.jpg';
import banner6 from '../img/banner-6.jpg';
import blog from '../img/blog-1.jpg';
import blog1 from '../img/blog-2.jpg';
import blog2 from '../img/blog-3.jpg';
import blog3 from '../img/blog-4.jpg';

const Home = ({productItems, handleAddProduct,}) => {  
  const [cartItem, setCartItem] = useState(productItems); 
  const menuItems = [...new Set(productItems.map((val) => val.category))]
  const filterItem = (cat) => {
   const newItems = productItems.filter((newval) => newval.category === cat)
   setCartItem(newItems)
  }
  var settings = { 
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className='relative'>
            <img src={banner} alt="banner" />
            <div className='absolute z-10 md:left-40  left-10 md:inset-y-1/3 inset-y-3'>
              <p className='m-0 md:font-lg font-sm'>High Tech Product Collection</p>
              <h1 className=' md:font-xl font-sm m-0'>Electronic Sale</h1>
              <p className='m-0 md:font-lg font-sm'>Starting at <span className='text-orange-400 md:text-3xl font-bold  font-lg'>$299.99</span></p>
              <a href="#" className='bg-orange-600 px-3 py-2 no-underline text-white flex items-center justify-center w-36'>Shop Naw <LiaAngleRightSolid /></a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='relative'>
            <img src={banner1} alt="banner" />
            <div className='absolute z-10 md:left-40  left-10 md:inset-y-1/3 inset-y-3'>
              <p className='m-0 md:font-lg font-sm'>High Tech Product Collection</p>
              <h1 className=' md:font-xl font-sm m-0'>Electronic Sale</h1>
              <p className='m-0 md:font-lg font-sm'>Starting at <span className='text-orange-400 md:text-3xl font-bold  font-lg'>$299.99</span></p>
              <a href="#" className='bg-orange-600 px-3 py-2 no-underline text-white flex items-center justify-center w-36  '>Shop Naw <LiaAngleRightSolid /></a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='relative'>
            <img src={banner2} alt="banner" />
            <div className='absolute z-10 md:inset-x-1/3   left-10 md:inset-y-1/4 inset-y-3 text-center justify-center'>
              <p className='m-0 md:font-lg font-sm'>High Tech Product Collection</p>
              <h1 className=' md:font-xl font-sm m-0'>Electronic Sale</h1>
              <p className=' md:font-lg font-sm'>Starting at <span className='text-orange-400 md:text-3xl font-bold  font-lg'>$299.99</span></p>
              <a href="#" className='bg-orange-600 px-3 py-2 no-underline text-white flex items-center justify-center w-36 m-auto'>Shop Naw <LiaAngleRightSolid /></a>
            </div>
          </div>
        </Carousel.Item>
    </Carousel>
    <div className="container mt-3">
      <div className='md:grid-cols-5 grid gap-3'>
        {productItems.slice(0,5).map((productItems)=>(
          <div key={productItems.id} className='shadow-md'>
            <div>
              <Styled.imagesbox>
                <img src={productItems.img} alt={productItems.name} className='first' />
                <img src={productItems.hoverimg} alt={productItems.name} className='second' />
                <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1 text-sm'>{productItems.off}</span>
                <div  className="over absolute bottom-2.5 gap-2 grid grid-cols-4">
                <button className='flex no-underline  bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white'><CiHeart/></button>
                <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><FaBalanceScale/></button>
                <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white ' onClick={() => handleAddProduct(productItems)}><GiShoppingCart/></button>
                <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><IoSearch/></button>
                </div>
              </Styled.imagesbox>
              <div className='p-1'>
                <p className='truncate'><b>{productItems.name}</b></p>
                <p className='text-sm'><b>${productItems.price}</b> <span className='line-through text-slate-300'><b>${productItems.discount}</b></span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container mt-3">
      <div className="md:grid-cols-8 grid gap-3">
          <img src={brand} alt="images" className='bg-slate-100 p-1' />
          <img src={brand1} alt="images" className='bg-slate-100 p-1' />
          <img src={brand2} alt="images" className='bg-slate-100 p-1' />
          <img src={brand3} alt="images" className='bg-slate-100 p-1' />
          <img src={brand4} alt="images" className='bg-slate-100 p-1' />
          <img src={brand5} alt="images" className='bg-slate-100 p-1' />
          <img src={brand6} alt="images" className='bg-slate-100 p-1' />
          <img src={brand7} alt="images" className='bg-slate-100 p-1' />
      </div>
    </div>

    <div className="container mt-4">
      <div className="md:flex gap-3">
        <div className='md:w-3/12'>
          <h4 className='mb-3'><b>Popular Products</b></h4>
          <div className='md:flex bg-slate-100 gap-3 mb-3'>
            <div className='md:w-3/12'>
            <Styled.imagesbox>
                <img src={images20} alt='images' className='first' />
                <img src={images21} alt='images' className='second' />
              </Styled.imagesbox>
            </div>
            <div className='md:w-9/12 p-1'>
              <p className='truncate mt-1 mb-0'><b>Red Cap Sound Marker</b></p>
                <div className='flex gap-1'>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                </div>
              <p className='text-sm'><b>$ 280.00</b> <span className='line-through text-slate-300'><b>$ 298.10</b></span></p>
            </div>
          </div>
          <div className='md:flex bg-slate-100 gap-3 mb-3'>
            <div className='md:w-3/12'>
            <Styled.imagesbox>
                <img src={images18} alt='images' className='first' />
                <img src={images19} alt='images' className='second' />
              </Styled.imagesbox>
            </div>
            <div className='md:w-9/12 p-1'>
              <p className='truncate  mt-1 mb-0'><b>Gaming G-Mouse</b></p>
              <div className='flex gap-1'>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                </div>
              <p className='text-sm'><b>$ 17.00</b> <span className='line-through text-slate-300'><b>$ 20.00</b></span></p>
            </div>
          </div>
          <div className='md:flex bg-slate-100 gap-3 mb-3'>
            <div  className='md:w-3/12'>
            <Styled.imagesbox>
                <img src={images12} alt='images' className='first' />
                <img src={images13} alt='images' className='second' />
              </Styled.imagesbox>
            </div>
            <div className='md:w-9/12 p-1'>
              <p className='truncate mt-1 mb-0'><b>USB Charger</b></p>
              <div className='flex gap-1'>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                </div>
              <p className='text-sm'><b>$ 75.65</b> <span className='line-through text-slate-300'><b>$ 79.00</b></span></p>
            </div>
          </div>
          <div className='md:flex bg-slate-100 gap-3 mb-3'>
            <div  className='md:w-3/12'>
            <Styled.imagesbox>
                <img src={images} alt='images' className='first' />
                <img src={images1} alt='images' className='second' />
              </Styled.imagesbox>
            </div>
            <div className='md:w-9/12 p-1'>
              <p className='truncate mt-1 mb-0'><b>Apple Laptop</b></p>
              <div className='flex gap-1'>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                </div>
              <p className='text-sm'><b>$ 232.62</b> <span className='line-through text-slate-300'><b>$ 298.28</b></span></p>
            </div>
          </div>
          <div className='md:flex bg-slate-100 gap-3'>
            <div  className='md:w-3/12'>
            <Styled.imagesbox>
                <img src={images2} alt='images' className='first' />
                <img src={images3} alt='images' className='second' />
              </Styled.imagesbox>
            </div>
            <div className='md:w-9/12 p-1'>
              <p className='truncate mt-1 mb-0'><b>Sticky Camera</b></p>
              <div className='flex gap-1'>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                  <span className=' text-slate-300'><IoIosStar /></span>
                </div>
              <p className='text-sm'><b>$ 27.00</b> <span className='line-through text-slate-300'><b>$ 39.00</b></span></p>
            </div>
          </div>

        </div>
        <div className='md:w-9/12'>
          <div className='grid md:grid-cols-2 gap-2'>
          <div className='relative overflow-hidden'>
            <img src={banner3} alt="banner"  className='transition duration-300 ease-in-out hover:scale-110'/>
            <div className='absolute top-5 left-3  text-white'>
              <h6>SmartWatches</h6>
              <h3 className='pb-2'><b>Up to <span className='text-orange-400'>20% OFF</span></b></h3>
              <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>Shop Now</a>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <img src={banner4} alt="banner" className='transition duration-300 ease-in-out hover:scale-110' />
              <div className='absolute top-5 left-3'>
                <h6>Nikon D850</h6>
                <h3 className='pb-2'><b>Camera<span className='text-orange-400'> Sale</span></b></h3>
                <a href="#" className='bg-orange-600 px-3 py-2 text-white no-underline'>Shop Now</a>
              </div>
          </div>
          </div>
          <div className='md:flex items-center gap-3 mt-4'>
            <p className='m-0'><b>Computers & Equipments</b></p>
            <Buttons menuItems={menuItems} filterItem={filterItem} setCartItem={setCartItem}/>
          </div>
          <div className='  mt-3'>
          <Slider  {...settings}>
            {cartItem.map((productItems)=>(
              <div key={productItems.id} className='shadow-md'> 
                  <Styled.imagesbox>
                    <img src={productItems.img} alt={productItems.name} className='first' />
                    <img src={productItems.hoverimg} alt={productItems.name} className='second' />
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1 text-sm'>{productItems.off}</span>
                    <div  className="over absolute bottom-2.5 gap-2 grid grid-cols-4">
                    <button className='flex no-underline  bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white  '><CiHeart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><FaBalanceScale/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white ' onClick={() => handleAddProduct(productItems)}><GiShoppingCart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><IoSearch/></button>
                    </div>
                  </Styled.imagesbox>
                  <div className='p-1'>
                    <p className='truncate'><b>{productItems.name}</b></p>
                    <p className='text-sm'><b>${productItems.price}</b> <span className='line-through text-slate-300'><b>${productItems.discount}</b></span></p>
                  </div>
                </div>  
            ))}
            </Slider>
        </div>
        </div>
      </div>
    </div>

    <div className="container mt-4"> 
        <p className='m-0'><b>Accessories & Gadgets</b></p>
        <div className='grid md:grid-cols-5 gap-3 mt-3 '>
            {productItems.map((productItems) =>(
            <div className='shadow-md' key={productItems.id}>
              <Styled.imagesbox>
                    <div>
                    <img src={productItems.img} alt={productItems.name} className='first' />
                    <img src={productItems.hoverimg} alt={productItems.name} className='second' />
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1 text-sm'>{productItems.off}</span>
                    </div>
                    <div  className="over absolute bottom-2.5 gap-2 grid grid-cols-4">
                    <button className='flex no-underline  bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white  '><CiHeart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><FaBalanceScale/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white ' onClick={() => handleAddProduct(productItems)}><GiShoppingCart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><IoSearch/></button>
                    </div>
                  </Styled.imagesbox>
                  <div className='p-3'>
                    <p className='truncate'><b>{productItems.name}</b></p>
                    <p className='text-sm'><b>${productItems.price}</b> <span className='line-through text-slate-300'><b>${productItems.discount}</b></span></p>
                  </div>
            </div>
            ))}
        </div>
    </div> 

    <div className="bg-slate-600 mt-4 overflow-hidden md:max-h-72">
      <div className='container'>
        <div className='md:grid-cols-3 md:flex gap-3 items-center justify-center text-white'>
          <div>
            <img src={imagebg} alt="imagebg" className='w-full' />
          </div>
          <div className='text-center'>
            <h4>TRENDING ACCESSORIES COLLECTION</h4>
            <h1 className='font-semibold pb-3'>Best Selling <span className='text-orange-400'>2021</span> Smartphone Packs</h1>
            <a href="/" className='border-orange-600 border-2 text-white no-underline px-3 py-2'>DISCOVER NOW</a>
          </div>
          <div>
          <img src={imagebg1} alt="imagebg1"  className='w-4/6'/>
          </div>
        </div>
      </div>
    </div> 
    <div className="container mt-4">
      <h3>Top Selling Vendors</h3>
      <div className="md:grid-cols-4 grid gap-3">
        <div className='shadow-md'>
          <img src={vendor} alt="vendor" />
          <div className='text-center p-2'>
            <p><b>Vendor 1</b></p>
            <div className='flex justify-center'>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
            </div>
            <p>Browse This Vendor</p>
            <div className='grid-cols-3 grid gap-3'>
              <img src={images20} alt="" />
              <img src={images18} alt="" />
              <img src={images12} alt="" />
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <img src={vendor1} alt="vendor" />
          <div className='text-center p-2'>
            <p><b>Vendor 1</b></p>
            <div className='flex justify-center'>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
            </div>
            <p>Browse This Vendor</p>
            <div className='grid-cols-3 grid gap-3'>
              <img src={images20} alt="" />
              <img src={images18} alt="" />
              <img src={images12} alt="" />
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <img src={vendor2} alt="vendor" />
          <div className='text-center p-2'>
            <p><b>Vendor 1</b></p>
            <div className='flex justify-center'>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
            </div>
            <p>Browse This Vendor</p>
            <div className='grid-cols-3 grid gap-3'>
              <img src={images20} alt="" />
              <img src={images18} alt="" />
              <img src={images12} alt="" />
            </div>
          </div>
        </div>
        <div className='shadow-md'>
          <img src={vendor3} alt="vendor" />
          <div className='text-center p-2'>
            <p><b>Vendor 1</b></p>
            <div className='flex justify-center'>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
                <span className=' text-slate-300'><IoIosStar /></span>
            </div>
            <p>Browse This Vendor</p>
            <div className='grid-cols-3 grid gap-3'>
              <img src={images20} alt="" />
              <img src={images18} alt="" />
              <img src={images12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-4">    
    <h3>Top Categories Of The Month</h3>
      <div className='bg-slate-600 mt-4'>
        <div className='md:grid-cols-6 grid text-center'>
          <div className="border  items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Featured Selections</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Commonly Used Accessories & Parts</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Camera & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Computer Hardware & Software</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Mobile Phone & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Photo & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Speakers & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>TV Receivers & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Home Audio, Video & Accessories</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Earphones & Headphones</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Smart Electronic & Video Games</p>
          </div>
          <div className="border items-center flex justify-center text-white hover:bg-orange-600 px-2 p-2">
            <p>Electronic Cigarettes</p>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
    <div className='mt-3'>
    <h3>Top Rated Products</h3>
          <Slider  {...settings}>
            {cartItem.map((productItems)=>(
              <div key={productItems.id} className='shadow-md'> 
                  <Styled.imagesbox>
                    <img src={productItems.img} alt={productItems.name} className='first' />
                    <img src={productItems.hoverimg} alt={productItems.name} className='second' />
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1 text-sm'>{productItems.off}</span>
                    <div  className="over absolute bottom-2.5 gap-2 grid grid-cols-4">
                    <button className='flex no-underline  bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white  '><CiHeart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><FaBalanceScale/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white ' onClick={() => handleAddProduct(productItems)}><GiShoppingCart/></button>
                    <button className='flex no-underline bg-white p-[5px] justify-center hover:!bg-orange-600 text-xl text-black hover:!text-white '><IoSearch/></button>
                    </div>
                  </Styled.imagesbox>
                  <div className='p-1'>
                    <p className='truncate'><b>{productItems.name}</b></p>
                    <p className='text-sm'><b>${productItems.price}</b> <span className='line-through text-slate-300'><b>${productItems.discount}</b></span></p>
                  </div>
                </div>  
            ))}
            </Slider>
        </div>
    </div>

    <div className="container mt-4">
      <div className='grid md:grid-cols-2 gap-2'>
          <div className='relative overflow-hidden'>
            <img src={banner5} alt="banner"  className='transition duration-300 ease-in-out hover:scale-110'/>
            <div className='absolute top-7 left-4'>
              <h6>Weekend Promotion</h6>
              <h3 className='pb-2'><b>New Drone Pro 4 </b></h3>
              <p>From Only<span className='text-orange-400'> $259.00</span></p>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <img src={banner6} alt="banner" className='transition duration-300 ease-in-out hover:scale-110' />
              <div className='absolute top-7 left-4   text-white'>
                <h6>Sumsong Phone</h6>
                <h3 className='pb-2'><b>Galaxy S20 5G </b></h3>
                <p>Starting at <span className='text-orange-400'> $199.00</span></p>
              </div>
          </div>
          </div>
    </div>
    <div className="container">
    <h3>Latest News</h3>
      <div className="grid-cols-4 grid gap-3">
          <div className='shadow-md'>
            <img src={blog} alt="blog" />
            <div className='p-2'>
              <div className='flex'><small className='text-slate-300 pr-2'>by</small> <p><b> John Doe</b></p> <span className='text-slate-400 pl-2'>May 29, 2022</span></div>
              <h3 className='flex truncate text-xl font-semibold'>Aliquam tincidunt mauris eurisus</h3>
              <a href="/" className='no-underline text-black'>Read More</a>
            </div>
          </div>
          <div className='shadow-md'>
            <img src={blog1} alt="blog" />
            <div className='p-2'>
              <div className='flex'><small className='text-slate-300 pr-2'>by</small> <p><b> John Doe</b></p> <span className='text-slate-400 pl-2'>May 29, 2022</span></div>
              <h3 className='truncate text-xl font-semibold'>Aliquam tincidunt mauris eurisus</h3>
              <a href="/" className='no-underline text-black'>Read More</a>
            </div>
          </div>
          <div className='shadow-md'>
            <img src={blog2} alt="blog" />
            <div className='p-2'>
              <div className='flex'><small className='text-slate-300 pr-2'>by</small> <p><b> John Doe</b></p> <span className='text-slate-400 pl-2'>May 29, 2022</span></div>
              <h3 className=' truncate text-xl font-semibold'>Aliquam tincidunt mauris eurisus</h3>
              <a href="/" className='no-underline text-black'>Read More</a>
            </div>
          </div>
          <div className='shadow-md'>
            <img src={blog3} alt="blog" />
            <div className='p-2'>
              <div className='flex'><small className='text-slate-300 pr-2'>by</small> <p><b> John Doe</b></p> <span className='text-slate-400 pl-2'>May 29, 2022</span></div>
              <h3 className=' truncate text-xl font-semibold'>Aliquam tincidunt mauris eurisus</h3>
              <a href="/" className='no-underline text-black'>Read More</a>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Home
