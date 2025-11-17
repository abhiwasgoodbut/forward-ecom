import Title from '../components/Title'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>

      {/* Page Title */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text={'CONTACT'} text2={' US'} />
        <p className='text-gray-500 max-w-xl mx-auto mt-3 text-base'>
          Get in touch with our team for support, inquiries, or business collaborations. 
          We're always here to help.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12 md:gap-20 items-center mb-28'>

        {/* Image */}
        <img 
          className='w-full md:max-w-[450px] rounded-xl shadow-sm' 
          src={assets.contact_img} 
          alt="Contact Forever" 
        />

        {/* Info */}
        <div className='flex flex-col justify-center items-start gap-6'>
          
          <p className='font-semibold text-xl text-gray-700'>Our Headquarters</p>

          <p className='text-gray-500 leading-relaxed'>
            54709 Willms Station <br/> 
            Suite 350, Washington, DC
          </p>

          <p className='text-gray-500 leading-relaxed'>
            Tel: (415) 555-0132 <br /> 
            Email: support@forever.com 
          </p>

          <hr className='w-full border-gray-300'/>

          <p className='font-semibold text-xl text-gray-700'>Careers at Forever</p>
          <p className='text-gray-500 max-w-md leading-relaxed'>
            We’re always on the lookout for passionate individuals who want to build 
            the future of fashion, technology, and customer experience.
          </p>

          <Link 
            to="/careers"
            className='px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800 duration-200'
          >
            Explore Job Openings
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Contact
