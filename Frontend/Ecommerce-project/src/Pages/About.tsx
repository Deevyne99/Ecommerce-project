// import React from 'react'
import image from '../assets/sale-8.jpg'
import image2 from '../assets/sale-10.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <section className=''>
      <div className='mx-4 md:mx-12 flex flex-col my-24 gap-8'>
        <div className='flex-col md:flex-row flex gap-12 items-center'>
          <div className='h-[300px] md:h-[400px] flex md:w-1/2 w-full'>
            <img src={image} alt='' className='w-full h-full object-cover ' />
          </div>
          <article className='w-full md:w-1/2 flex flex-col gap-4'>
            <p className='text-[#6b7280] text-[15px] leading-8'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis recusandae provident iste, eius alias voluptatem
              consequuntur, ea nobis blanditiis totam tenetur! Quos aspernatur
              voluptas, quibusdam distinctio dignissimos atque dolorem quas
              nihil voluptates nulla. Delectus accusamus exercitationem
              distinctio ipsa rem aspernatur quas tempora architecto, magni
              voluptatum! Exercitationem similique voluptate iste fugit!
            </p>
            <Link
              to={`/products`}
              className='capitalize text-center mt-2 p-2 bg-[#3b82f6] text-[#fff] w-[150px]'
            >
              all products
            </Link>
          </article>
        </div>
        <div className='flex flex-col md:flex-row gap-12 items-center'>
          <article className='w-full order-2 md:order-1 md:w-1/2 flex flex-col gap-4'>
            <p className='text-[#6b7280] text-[15px] leading-8'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis recusandae provident iste, eius alias voluptatem
              consequuntur, ea nobis blanditiis totam tenetur! Quos aspernatur
              voluptas, quibusdam distinctio dignissimos atque dolorem quas
              nihil voluptates nulla. Delectus accusamus exercitationem
              distinctio ipsa rem aspernatur quas tempora architecto, magni
              voluptatum! Exercitationem similique voluptate iste fugit!
            </p>
            <Link
              to={`/products`}
              className='capitalize text-center mt-2 p-2 bg-[#3b82f6] text-[#fff] w-[150px]'
            >
              all products
            </Link>
          </article>
          <div className='h-[300px] md:h-[400px] flex  md:w-1/2 w-full order-1 md:order-2'>
            <img src={image2} alt='' className='w-full h-full object-cover ' />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About
