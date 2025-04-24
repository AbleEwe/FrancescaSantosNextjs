import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[15vh]'>
        <div className='flex flex-row items-center justify-center h-[50px]'>
         <div className='w-full relative border-b-8 border-verdecito'></div>
            <div className='px-8'>
                <a 
                  href='https://www.facebook.com/Francesca-Santos-Fot%C3%B3grafa-628727967504241'
                  className='no-underline text-inherit transition-all duration-300 hover:text-[#1877F2] hover:text-4xl'
                ></a>
            </div>
            <div className='px-8'>
                <a 
                  href='https://instagram.com/francesca_santosh'
                  className='no-underline text-inherit transition-all duration-300 hover:text-[#901299] hover:text-4xl'
                ></a>
            </div>    
            <div className='px-8'>
                <a 
                  href='https://wa.me/message/BZBNMUE5WGPYD1'
                  className='no-underline text-inherit transition-all duration-300 hover:text-[#075e54] hover:text-4xl'
                ></a>
            </div>
            <div className='w-full relative border-b-8 border-verdecito'></div>
        </div>
        <div className='text-center'>
            <img 
              src='./Images/Logos/Iso-Color.png' 
              alt='logo foto'
              className='h-[100px] w-auto mx-auto'
            />
            <p className='pb-5'>
                &copy;{new Date().getFullYear()} Francesca Santos Foto
            </p>
            <p className='pb-5'>
                AVISO DE PRIVACIDAD  |  INFORMACION LEGAL
            </p>
        </div>
    </div>
  )
}

export default Footer;