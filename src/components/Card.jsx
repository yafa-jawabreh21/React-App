import React, { useEffect } from 'react'

function Card({product , addToCart}) {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.name === product.name);
    // setIsInCart(!!productInCart);
  }, [product.name]);

  return (
    

<div className="max-w-sm   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:duration-300 bg-slate-700 ">
    <a href="#" className='bg-slate-600'>
        <img className="rounded-t-lg" src={product.imageUrl} alt="" />
    </a>
    <div className="p-5 bg-slate-700">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white text-white">{product.name}</h5>
        </a>
        <p className="mb-3 font-normal dark:text-gray-400 text-gray-500">{product.description}</p>
        <a href="#" onClick={() => addToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default Card
