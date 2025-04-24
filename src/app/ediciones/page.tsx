"use client"

import { PackagesSection } from "@/components/PackagesSection";

const Ediciones = () => {

  return (
    <div className='mx-auto flex flex-col justify-center items-center text-center'>
        <div 
            className='flex flex-col items-center justify-center relative w-screen h-screen bg-cover bg-fixed bg-center'
            style={{ backgroundImage: `url('./Images/FotosEdiciones/pag.jpg')` }}
        >

        </div>
        <h1 className='text-6xl mb-8 mt-[5vh]'>
            Ediciones
        </h1>
        <section className='flex flex-col w-full items-center bg-rosita text-center p-8'>
            <h2 className='text-4xl pt-4 font-bold '>¿Que necesito?</h2>
            <h3 className='text-xl pt-2 '>Horarios de atencion: </h3>
            <p className='text-lg pt-2 font-bold '>De 10:00 am a  8:00 pm</p>
            <ul className='mx-auto my-5 text-base list-disc text-left'>
            <li className='my-1 mb-2'>Se pide enviar  su foto con la mejor calidad posible para un mejor resultado al correo francescahdezs@gmail.com</li>
            <li className='my-1 mb-2'>Haz tu lista muy detallada de lo que quiere que sea editado</li>
            <li className='my-1 mb-2'>Al entregar la foto terminada solo puede ser modificada una vez mas</li>
            <li className='my-1 mb-2'>Se empieza a trabajar cuando el pago esté hecho.</li>
            </ul>
        </section>
        <section className='flex flex-col w-full items-cente text-center p-8 md:p-16'>
            <PackagesSection/>
        </section>
    </div>
  )
}

export default Ediciones;