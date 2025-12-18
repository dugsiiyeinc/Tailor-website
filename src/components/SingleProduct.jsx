import React from 'react'
import { Link, useParams } from 'react-router'
import { products } from '../contstants/data'

const SingleProduct = () => {
  const { productId } = useParams()
  const productInfo = products.find(product => product.id == productId)

  const getTypeColor=(type)=>{
    switch(type){
        case 'casual':
            return 'bg-fuchsia-100 text-fuchsia-700';
        case 'professional':
            return 'bg-green-100 text-green-700'
        case 'wedding':
            return 'bg-blue-100 text-blue-700'
        case 'formal':
            return 'bg-sky-100 text-sky-700'
    }
  }

  return (
    <div className="p-6 dark:text-white-95">

      <div className="mb-6">
        <Link
          to="/shop"
          className="text-cyan-500 hover:underline"
        >
          &larr; Go back
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 border-2 border-gray-200 dark:border-white/10 max-w-3xl min-h-80 md:h-80 p-6 rounded-2xl">
          <img
            src={productInfo.image}
            alt={productInfo.name}
            className="w-60 h-full object-cover rounded-2xl border-2 border-gray-200 dark:border-white/10"
          />
          <div className="flex flex-col gap-4 p-4">
            <h2 className="font-medium">{productInfo.name}</h2>
            <p className='dark:text-white/65'>{productInfo.description}</p>
            <span className={`${getTypeColor(productInfo.type)} max-w-30 p-2 rounded-md`}>{productInfo.type}</span>
            <span>${productInfo.price}</span>
            <div className="flex gap-4">
              <button className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:opacity-85 transition-all duration-300">
                Order now
              </button>
              <button className="px-4 py-2 rounded-md border-2 border-cyan-700 text-gray-900 hover:bg-cyan-700 dark:text-white-95 hover:text-white-95 transition-all duration-300">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
