"use client"

import BasicSlider from '@/components/ui/BasicSlider';
import Link from 'next/link';
import { imgSesion } from '@/utils/HomeImagesConst';
import PageTransition from '@/components/ui/PageTransition';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  return (
    <PageTransition>
      <div className='text-center'>
        <BasicSlider />
        <h1 className='text-5xl py-20'>SESIONES</h1>
        <section className='grid grid-cols-1 md:grid-cols-3 h-auto mx-auto gap-x-10 px-8 md:px-16 gap-y-10 pb-20'>
          {imgSesion.map((img, index) => (
            <div className='w-full relative break-inside-avoid' key={index}>
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
        </section>
        
        <section className='bg-rosita w-full h-auto mx-auto leading-10 text-center justify-center items-center px-8 flex flex-col py-20' id='francesca-santos'>
          <h1 className='text-4xl text-white mb-20'>SOBRE MI</h1>
          <div className='flex gap-10 flex-col-reverse md:flex-row w-full md:w-[80%] mx-auto pb-10 justify-start items-center md:m-0'>
            <div className='flex flex-col gap-4 md:w-1/2'>
              <h1 className='text-2xl text-left font-bold'>Autenticidad, Emoción, Arte</h1>
              <p className='w-full text-left'>
                En mi fotografía, creo en el poder de capturar momentos que trascienden el tiempo, convirtiendo emociones en recuerdos tangibles. Especializada en maternidad, retratos familiares e infantiles, me dedico a crear imágenes que no solo documentan, sino que celebran la belleza única de cada etapa de la vida. Con una formación sólida y un enfoque artístico, combino técnica, sensibilidad y atención al detalle para ofrecer fotografías que se conviertan en tesoros familiares.
              </p>
            </div>
            <img 
              src='./Images/sobre-mi.jpg' 
              className='w-full mb-10 md:m-0 md:w-1/2 h-[200px] md:h-[400px] object-cover rounded-xl'
            />
          </div>
          <div className='flex gap-10 flex-col-reverse md:flex-row-reverse w-full md:w-[80%] mx-auto justify-end items-center mt-10'>
            <div className='flex flex-col gap-4 md:w-1/2'>
              <h1 className='text-2xl text-left font-bold'>Mi Historia</h1>
              <p className='w-full text-left'>
                Soy Francesca Santos, fotógrafa especializada en maternidad, familias y niños. Desde 2019, capturo momentos llenos de emoción y autenticidad, transformándolos en recuerdos atemporales.
                Mi formación incluye estudios en el Colegio de Fotografía de Occidente y especializaciones en Fine Art, iluminación y retrato, aprendiendo de grandes referentes como Mónica Olvera y Javi Mercader. Cada sesión la vivo con pasión y dedicación, buscando que tus fotografías no solo sean imágenes, sino piezas de arte que cuenten tu historia.
                Porque los mejores momentos merecen ser guardados para siempre.
              </p>
            </div>
            <img 
              src='./Images/sobre-mi.jpg' 
              className='w-full mb-10 md:m-0 md:w-[50%] h-[200px] md:h-[400px] object-cover rounded-xl'
            />
          </div>
        </section>
        
        <ContactForm />
      </div>
    </PageTransition>
  );
};

export default Home;