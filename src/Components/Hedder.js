import React from 'react'
import {Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import * as Styled from './HedderStyled';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from './Home';
import Producs from './Producs';
import SingUp from './SingUp';
import Cart from './Cart';
import logo from '../img/logomin.svg';
import { FiMenu } from "react-icons/fi";
import { FaTshirt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import { FaHeartbeat } from "react-icons/fa";
import { LuGift } from "react-icons/lu";
import { FaGamepad } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { CiMobile4 } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { DiRuby } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
const Hedder = ({productItems, cartItem, handleAddProduct, handleRemoveProduct}) => {
  return (
    <>
      <Router>
      <div className='bg-slate-600 py-2'>
        <div className="container ">
          <div className='md:flex gap-3 items-center'>
            <div className='md:w-3/12 md:block hidden '>
              <img src={logo} alt="logo" className='w-32' />
            </div>
            <div className='md:w-1/2'>
            <InputGroup className="relative">
                <select name="" className='px-2'>
                  <option value="1">All Categories</option>
                  <option value="Fashion">Fashion</option>
                  <option value="LifeStyle">LifeStyle</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Entertainmane">Entertainmane</option> 
                </select>
              <Form.Control placeholder="Recipient's username" className='!pr-8'/> 
              <IoSearch className='absolute top-3 right-3 z-10' /> 
            </InputGroup>
            </div>
            <div className='md:w-3/12'>
              <ul className='justify-end md:flex m-0 p-0 gap-3 hidden'>
                <Nav.Link  as={Link} to='/' className='flex no-underline relative'><CiHeart  className='text-2xl text-white'/> <span className='absolute right-[-7px] text-white bg-red-400 flex px-1 rounded-full justify-center items-center w-5 h-5 top-[-7px]'>0</span></Nav.Link>
                <Nav.Link  as={Link} to='/'><FaBalanceScale  className='text-2xl text-white'/></Nav.Link>
                <Nav.Link  as={Link} to="/cart" className='flex no-underline relative'><GiShoppingCart  className='text-2xl text-white'/>
                   <span className='absolute right-[-7px] text-white bg-red-400 flex px-1 rounded-full justify-center items-center w-5 h-5 top-[-7px]'>{cartItem.length === 0 ? '' : cartItem.length}</span></Nav.Link>
              </ul>
            </div>
          </div>          
        </div>
      </div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-white shadow-md md:!p-0">
          <div className='container'>
            <Navbar.Brand href="/"  className='w-32 p-0 md:hidden'><img src={logo} alt="logo" className='md:mt-[-10px]' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={logo} alt="logo"  className='w-32' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 md:items-center">
                    <div>
                      <ul className='p-0 m-0'>
                        <Styled.category>
                        <span className='flex items-center py-[10px]'> <FiMenu className='mr-2'/> All Departments</span>
                          <ul className='submenu bg-white'>
                            <li>
                              <a href="/" className='gap-2'><FaTshirt /> Fashion</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><MdHome /> Home & Garden</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><CiDesktop /> Electronics</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><FaTshirt /> Furniture</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><FaHeartbeat /> Health & Beauty</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><LuGift /> Gift Ideas</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><FaGamepad />Toy & Games</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><GiCoffeeCup /> Cooking</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><CiMobile4 /> Smart Phones</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><CiCamera /> Cameras & Photo</a>
                            </li>
                            <li>
                              <a href="/" className='gap-2'><DiRuby /> Accessories</a>
                            </li> 
                          </ul>
                        </Styled.category>
                      </ul>
                    </div>
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link  as={Link} to='/about'>About Us</Nav.Link>
                  <Nav.Link  as={Link} to='/elements'>Elements</Nav.Link>
                  <Nav.Link  as={Link} to='/shop'>Shop</Nav.Link>
                  <Nav.Link  as={Link} to='/vendor'>Vendor</Nav.Link> 
                  <Nav.Link  as={Link} to='/blog'>Blog</Nav.Link>
                  <Nav.Link  as={Link} to='/contact'>Contact Us</Nav.Link>
                  <ul className=' flex m-0 p-0 gap-3 md:hidden'>
                    <a href="/" className='flex no-underline'><CiHeart  className='text-2xl text-black'/> <span className='relative left-[-7px] text-white bg-red-400 flex px-1 rounded-full justify-center items-center w-5 h-5 top-[-7px]'>0</span></a>
                    <a href="/"><FaBalanceScale  className='text-2xl text-black'/></a>
                    <a href="/" className='flex no-underline'><GiShoppingCart  className='text-2xl text-black'/> <span className='relative left-[-7px] text-white bg-red-400 flex px-1 rounded-full justify-center items-center w-5 h-5 top-[-7px]'>0</span></a>
                  </ul>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
        <Routes>
            <Route path='/' element={<Home  productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
            <Route path='/producs' element={<Producs productItems={productItems} handleAddProduct={handleAddProduct} />}/>
            <Route path='/singUp' element = {<SingUp/>}/>
            <Route path='/cart' element ={<Cart cartItem={cartItem} handleAddProduct ={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Hedder
