import React, { use } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from "../context/ShopContext";
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

function Product() {

  const {productId} = useParams();
  const {products, currency} = React.useContext(ShopContext);
  const [productData, setProductData] = React.useState(false);
  const [image , setImage] = React.useState(null);
  const [size,setSize] = React.useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])
  

  return productData ? (
    <div className='border-t-2 border-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------------------------------------------------- Product Data -----------------------------------------------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
    {/*----------------------------------------------------------product images ---------------------------------------------------------*/}
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={()=>setImage(item)} src={item} alt="" key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
         </div>
    {/*------------------------------------- Product details ------------------------------------------------------ */}
            <div className='flex-1 '>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500  '>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Sixe</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item, index)=> (
                    <button onClick={()=> setSize(item)} className={`border p-2 px-4 bg-gray-100 
                      ${item === size ? "border-orange-500" : "border-gray-200"}`} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                 <p>100% Original Product.</p> 
                 <p>Cash on delivery is available within 7 days.</p> 
                 <p>Easy 30 days returns and exchanges.</p> 
              </div>
            </div>
      </div>
      {/*-------------- Description and Reviews ------------------------*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
            <p>This classic cotton T-shirt is designed for everyday comfort and effortless style. Made from soft, breathable 100% cotton, it offers a lightweight feel that keeps you cool throughout the day. The modern, relaxed fit makes it perfect for casual outings, workouts, or layering under jackets. With its durable stitching and fade-resistant fabric, this tee maintains its shape and color even after multiple washes — a reliable essential for any wardrobe.</p>      
            <p>Elevate your everyday look with this lightweight denim jacket, crafted from high-quality cotton for both comfort and durability. Its timeless design features a button-down front, adjustable cuffs, and multiple pockets for a perfect blend of style and practicality. Whether layered over a T-shirt on cool evenings or paired with casual wear for weekend outings, this jacket adds a modern touch to any outfit while keeping you comfortably warm.</p>      
        </div>
      </div>

      {/* display related products */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/> 
    </div>
  ) : <div>Loading...</div>
  
}

export default Product