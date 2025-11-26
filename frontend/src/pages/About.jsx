import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text={'ABOUT'} text2={' US'} /> 
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 mg:w-2/4 text-gray-600'>
          <p>The Forever E-Com section is designed to showcase products in a clean, modern, and easy-to-navigate layout. Each product is presented with a high-quality image, clear pricing, and essential details so that customers can quickly understand what they’re purchasing. The structure focuses on visual clarity and smooth user flow, making it effortless for visitors to browse through collections, view item specifics, and add products to their cart without confusion. Spacing, alignment, and typography are carefully balanced to create a premium shopping feel.</p>
          <p>This section also emphasizes a seamless shopping experience with responsive design that adapts beautifully across all screen sizes. Whether viewed on mobile, tablet, or desktop, the layout maintains consistent readability and ease of interaction. Tailored call-to-action buttons, intuitive spacing, and well-organized components ensure customers can explore, compare, and select products with minimal friction. Overall, the Forever E-Com section blends functionality with visual appeal, enhancing user engagement and increasing conversion potential.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to build a seamless and trustworthy online shopping experience where quality, affordability, and convenience come together. We aim to empower customers with carefully curated products, transparent pricing, and fast, reliable service. Through innovation, customer-first thinking, and continuous improvement, we strive to create an e-commerce platform that not only meets expectations but consistently exceeds them—making everyday shopping simpler, smarter, and more enjoyable for everyone.</p>
        </div>
      </div>

      <div>
        <Title text={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Quality Assurance:</p>
          <p className='text-gray-600'>At Forever E-Com, quality isn’t just a step in the process—it’s the foundation of everything we build. </p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600'>At Forever E-Com, we make shopping effortless by putting your comfort and time first. </p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Expectional Service:</p>
          <p className='text-gray-600'>At Forever E-Com, we believe that outstanding service is the foundation of a great shopping experience.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About