"use client"

import { motion } from "motion/react"
import Link from 'next/link'
import { sesionesIMG } from '@/utils/SesionesPageConst'
import Image from 'next/image'

const Sesiones = () => {
  return (
    <section className='w-full'>
        <div 
          className='flex flex-col items-center justify-center relative w-screen h-screen bg-cover bg-fixed bg-center'
          style={{ backgroundImage: `url('./Images/FotosEdiciones/pag.jpg')` }}
        >
        </div>
      <motion.h1
        initial={{ y: '20%' }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.3 }} 
        className='text-5xl mt-20 text-center mb-12'
      >
        Escoge tu sesión
      </motion.h1>
      <div className='grid grid-cols-1 md:grid-cols-3 h-auto mx-auto gap-x-10 gap-y-10 px-8 md:px-16 pb-8 md:pb-16'>
        {sesionesIMG.map((img, index) => (
          <div className='w-full relative' key={index}>
            <Link key={img.Caption} href={img.path}>
                <Image 
                  src={img.Url} 
                  alt={img.Caption} 
                  loading='lazy'
                  className='w-full h-full block object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:brightness-70 group-hover:scale-102'
                  width={400}
                  height={600}
                />
                <span className='absolute bottom-[15%] left-1/2 transform -translate-x-1/2 bg-[rgba(177,149,142,0.7)] text-white p-2 w-[60%] text-center text-3xl font-black rounded-md'>
                {img.Caption}
              </span>
            </Link>
          </div>         
        ))}
      </div>
    </section>
  )
}

export default Sesiones