import React, { useEffect, useState } from 'react'
import { banner } from '../assets/images'
import Star from '../assets/icons/star'
import Product from '../components/product'
import { aothun } from '../assets/images'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    rating: 4.5,
    image: aothun
  },
  {
    id: 2,
    name: 'Product 2',
    price: 100,
    rating: 4.5,
    image: aothun
  },
  {
    id: 3,
    name: 'Product 3',
    price: 100,
    rating: 4.5,
    image: aothun
  },
  {
    id: 4,
    name: 'Product 4',
    price: 100,
    rating: 4.5,
    image: aothun
  },
]

const HomePage = () => {

  return (
    <div>
      <div className="relative flex md:mx-[100px] mx-4 flex-col md:flex-row flex-[1_1] h-[653px] md:h-[563px]">
        <div className='flex flex-col gap-5 md:gap-8'>
          <div className='text-[36px] md:text-[64px] font-[700px] leading-9 md:leading-16 inline-block'>FIND CLOTHES<br />THAT MATCHES<br /> YOUR STYLE</div>
          <div className='leading-[20px] md:leading-[22px] text-[#00000099] text-[14px] md:text-[16px] font-[400px] inline-block'>
            Browse through our diverse range of meticulously crafted garments, designed to bring ,<br />
            out your individuality and cater to your sense of style.
          </div>
          <button className='btn btn-neutral rounded-[62px] md:w-[210px]'>Shop Now</button>
          <div>
            <div className='flex flex-row justify-center flex-wrap gap-5 md:gap-16'>
              <div>
                <div className='text-[24px] md:text-[40px] font-[700px]'>200+</div>
                <div className='text-[12px] md:text-[16px] font-[400px]'>International Brand</div>
              </div>
              <div>
                <div className='text-[24px] md:text-[40px] font-[700px]'>2,000+</div>
                <div className='text-[12px] md:text-[16px] font-[400px]'>High-Quality Products</div>
              </div>
              <div className='hidden md:block'>
                <div className='text-[24px] md:text-[40px] font-[700px]'>30,000+</div>
                <div className='text-[12px] md:text-[16px] font-[400px]'>Happy Customers</div>
              </div>
            </div>
            <div className='flex flex-col md:hidden items-center justify-center'>
              <div className='text-[24px] font-[700px]'>30,000+</div>
              <div className='text-[12px] font-[400px]'>Happy Customers</div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-center'>
          <img className='h-[248px] md:h-[450px] absolute bottom-0' src={banner} />
          <Star
            className='absolute top-[500px] left-7 md:top-50 md:left-190'
            width={40} height={40} fillColor='black'
          />
          <Star
            className='absolute right-5 top-95 md:right-35 md:top-10'
            width={70} height={70} fillColor='black' />
        </div>

      </div>
      <div className='bg-black h-8 md:mx-[100px] mx-4'></div>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[32px] md:text-5xl font-[700px] mt-[72px] mb-[55px]'>NEW ARRIVALS</div>
        <div className='w-full md:flex md:justify-center'>
          {/* Row ngang cuộn trong mobile, căn giữa trên desktop */}
          <div className='flex gap-[16px] md:gap-[19px] overflow-x-auto md:overflow-visible px-[16px] md:px-0'>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <button className='btn btn-outline text-[16px] font-[500px] border border-[rgba(0,0,0,0.1)] rounded-[62px] mt-[36px] mb-[64px]'>VIEW ALL</button>
      </div>
      <div className='h-[1px] bg-[#E6E6E6] md:mx-[100px] mx-4 ' />
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[32px] md:text-5xl font-[700px] mt-[72px] mb-[55px]'>TOP SELLING</div>

        <div className='w-full md:flex md:justify-center'>
          <div className='flex gap-[16px] md:gap-[19px] overflow-x-auto md:overflow-visible px-[16px] md:px-0'>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <button className='btn btn-outline text-[16px] font-[500px] border border-[rgba(0,0,0,0.1)] rounded-[62px] mt-[36px] mb-[64px]'>VIEW ALL</button>
      </div>
      <div className=' bg-black md:mx-[100px] mx-4 md:rounded-[20px] py-8 px-6 md:py-9 md:px-16 flex flex-col md:flex-row gap-8'>
        <div className='text-[32px] md:text-[40px] font-bold leading-[35px] md:leading-[45px] text-[#FFFFFF] mr-auto'>
          STAY UPTO DATE ABOUT<br /> OUR LATEST OFFERS
        </div>
        <div className='flex flex-col gap-3'>  
          <label className="input validator rounded-[62px] md:w-[394px]">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="Enter your email address" />
          </label>
          <button className='btn btn-active text-[14px] md:text-[16px] font-[500px] rounded-[20px] md:w-[394px]'>Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage