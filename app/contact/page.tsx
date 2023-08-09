import Section from '@/containers/Section/Section';

export default function Page() {
  return (
    <Section classes='bg-black'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='lg:col-span-12'>
          <h1 className=' mb-3 text-4xl font-extrabold leading-none tracking-tight md:mb-5 md:text-5xl lg:text-6xl'>
            {`Let's get you started for success.`}
          </h1>
          <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
            {`Complete this form and one of our team members will contact you
            shortly.`}
          </p>
        </div>
      </div>
    </Section>
  );
}
