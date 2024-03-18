import { FaQuoteLeft } from 'react-icons/fa';

export function Testimonials() {
  return (
    <section className='container mx-auto max-w-4xl p-4 py-8'>
      <div className='relative mb-4 p-4 text-center'>
        <h2 className='relative z-50 mb-2 font-bold'>
          <span className='mr-2 font-headline text-3xl text-gray-800'>
            Depoimentos de
          </span>
          <span className='font-handwriting text-4xl text-blue-800'>
            Clientes
          </span>
        </h2>
        <div className='absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10' />
      </div>

      <figure>
        <FaQuoteLeft className='h-8 w-8 text-gray-600' />
        <blockquote className='mb-6'>
          <p className='text-2xl text-gray-900'>Depoimento</p>
        </blockquote>
        <figcaption className='flex items-center justify-center gap-2'>
          <img
            className='h-6 w-6 rounded-full'
            src='https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhciUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60'
            alt='Tarso Virgilio'
          />
          <div className='flex items-center divide-x-2 divide-gray-200'>
            <div className='pr-3 font-medium text-gray-900'>Tarso Virgilio</div>
            <div className='pl-3 text-sm font-light text-gray-500'>Blip</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default Testimonials;
