import Section from '@/containers/Section/Section';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Section classes='bg-black'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto mb-8 max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-white lg:text-9xl'>
            {`404`}
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl'>
            {`Something's missing.`}
          </p>
          <p className='mb-4 text-lg font-light text-gray-400'>
            {`Sorry, we can't find that page. You'll find lots to explore on the
          home page.`}
          </p>
          <a
            href='/'
            className='bg-primary-600 hover:bg-primary-800 focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
          >
            {`Back to Homepage`}
          </a>
        </div>
        <div>
          <Image
            className='mx-auto h-auto w-4/12'
            src='/images/not-found.svg'
            alt='Lost on the road illustration'
            width={50}
            height={50}
          />
        </div>
      </div>
    </Section>
  );
}
