import React from 'react'
import logo from '../img/logomin.svg';

const Footer = () => {
  return (
    <>
      <div className='bg-slate-700'>
        <div className="container">
            <div className="grid-cols-4 grid gap-3">
                <div>
                    <img src={logo} alt="logo"  className='w-32' />
                    <p>Got Question? Call us 24/7</p>
                    <a href="/"><h5>+91 1234567809</h5></a>
                    <p>Register now to get updates on pronot get up ions & coupons ster now toon.</p>
                </div>
                <div>
                <p><b>COMPANY</b></p>
                    <ul>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Team Member</a>
                        </li>
                        <li>
                            <a href="/">Career</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                        <li>
                            <a href="/">Affilate</a>
                        </li>
                        <li>
                            <a href="/">Order History</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
