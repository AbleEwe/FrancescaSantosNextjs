"use client"

import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className='text-center'>
        <div 
          className='flex flex-col items-center justify-center relative w-screen h-screen bg-cover bg-fixed bg-center'
          style={{ backgroundImage: `url('./Images/FotosEdiciones/pag.jpg')` }}
        >
        </div>
    <ContactForm />
    </div>
  );
};

export default ContactPage;
