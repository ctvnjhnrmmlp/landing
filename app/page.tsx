import Section from '@/containers/Section/Section';

import Link from 'next/link';
import Image from 'next/image';

import { MdOutlineSupportAgent, MdAccountCircle } from 'react-icons/md';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { MdComputer } from 'react-icons/md';
import { BsGearFill, BsBinocularsFill, BsCpuFill } from 'react-icons/bs';
import { RiArrowRightSFill } from 'react-icons/ri';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaSnapchat,
  FaWhatsapp,
  FaDollarSign,
  FaMoneyBillWaveAlt,
  FaPeopleCarry,
  FaHandshake,
  FaBriefcase,
} from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Section classes='bg-black'>
        <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <Link
              href='#'
              className='mb-5 inline-flex items-center justify-between rounded-lg bg-white px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 lg:mb-7'
              role='alert'
            >
              <span className='mr-3 rounded-lg bg-black px-4 py-1.5 text-xs text-white'>
                {`New`}
              </span>{' '}
              <span className='mr-1 text-xs font-medium sm:text-sm'>
                {`We are live! See what's new`}
              </span>
              <RiArrowRightSFill />
            </Link>
            <h1 className='mb-3 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:mb-5 md:text-5xl lg:text-6xl'>
              {`Redefining the Consumer Experience with Innovation and Exceptional
              Service`}
            </h1>
            <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
              {`We revolutionize the consumer experience through cutting-edge
              solutions and a dedication to exceptional service. By fostering
              meaningful connections between brands and consumers, we empower
              businesses and individuals alike.`}
            </p>
            <div className='grid gap-2 sm:flex sm:flex-wrap'>
              <Link
                href='/careers'
                className='md:text-md bg-primary-700 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
              >
                {`Begin The Journey`}
              </Link>
              <Link
                href='/about'
                className='md:text-md inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base text-sm font-medium text-white hover:bg-gray-100 hover:text-black lg:text-lg'
              >
                {`Learn More`}
              </Link>
            </div>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
            <Image
              src='/images/telephone.webp'
              alt='A 3D telephone illustration'
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className='mx-auto flex flex-col text-center md:max-w-screen-md lg:max-w-screen-lg'>
          <h2 className='mb-6 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mb-10 lg:mt-8 lg:text-4xl'>
            {`Customer Care at Its Finest`}
          </h2>
          <div className='grid w-full grid-cols-4 gap-4 sm:flex sm:justify-center sm:gap-8 md:grid-cols-8 lg:grid'>
            <Link
              href='https://facebook.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaFacebook className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaInstagram className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://twitter.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaTwitter className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://youtube.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaYoutube className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://tiktok.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaTiktok className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://snapchat.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaSnapchat className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://whatsapp.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaWhatsapp className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
            <Link
              href='https://linkedin.com/'
              target='_blank'
              className='flex items-center justify-center'
            >
              <FaLinkedin className='text-3xl text-gray-400 hover:text-white sm:text-3xl md:text-4xl lg:text-6xl' />
            </Link>
          </div>
        </div>
      </Section>
      <Section classes='bg-black flex my-[12rem] md:my-[17rem] justify-center items-center'>
        <div className='mx-auto w-fit px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-28'>
          <h2 className='sm:5xl mx-auto w-full text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl'>
            {`Unlocking the Future of Consumer Experience: Join the Konsumer
            Solutions Revolution`}
          </h2>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/customer-service.svg'
              alt='Customer service agent illustration'
              width={50}
              height={50}
            />
          </div>
          <div className='font-light text-gray-500 dark:text-gray-400 sm:text-lg'>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-2xl font-extrabold leading-none tracking-tight text-white sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl'>
                {`Welcome to Konsumer Solutions: Your Path to Exceptional
                Employees`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`Unlocking your company's full potential starts with building a
							remarkable team. At Konsumer Solutions, we specialize in providing
							high-quality employees tailored to meet your unique business
							needs. We take the burden of hiring, training, managing, and
							monitoring off your shoulders, so you can concentrate on what
							truly matters – growing your business.`}
              </p>
              <div className='grid gap-2 sm:flex sm:flex-wrap'>
                <Link
                  href='/about'
                  className='md:text-md bg-primary-700 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
                >
                  {`Learn More`}
                  <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section classes='bg-black gap-x-4 flex my-36 justify-center items-center flex-wrap gap-y-4'>
        <div className='flex flex-col gap-5'>
          <div className='mx-auto flex w-fit w-fit flex-col gap-4 px-4 sm:flex-row md:max-w-screen-md lg:max-w-screen-lg lg:px-28'>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <MdOutlineSupportAgent />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Customer Service`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Deliver unparalleled customer satisfaction with our dedicated
                and highly skilled customer service representatives.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <FaDollarSign />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Sales`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Boost your revenue and exceed targets with our sales experts who
                excel in closing deals and cultivating lasting customer
                relationships.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='mx-auto flex w-fit w-fit flex-col gap-4 px-4 sm:flex-row md:max-w-screen-md lg:max-w-screen-lg lg:px-28'>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <FaMoneyBillWaveAlt />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Lead Generation`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Expand your customer base exponentially with our exceptional
                lead generation strategies that drive qualified prospects to
                your doorstep.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <HiOutlineStatusOnline />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Social Media Management`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Harness the power of social media with our expert team, crafting
                captivating content and engaging your audience to fuel brand
                growth.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='mx-auto flex w-fit w-fit flex-col gap-4 px-4 sm:flex-row md:max-w-screen-md lg:max-w-screen-lg lg:px-28'>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <MdComputer />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Development`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Unlock innovation and technological advancement with our
                brilliant developers proficient in coding and building
                cutting-edge solutions.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full max-w-sm rounded-lg border bg-black p-6 shadow'>
              <p className='mb-3 text-4xl font-normal text-white lg:text-5xl'>
                <MdAccountCircle />
              </p>
              <h5 className='mb-2 text-xl font-bold tracking-tight text-white md:text-2xl'>
                {`Account Management`}
              </h5>
              <p className='mb-3 font-normal text-gray-300'>
                {`Experience proactive and personalized account management
                services, ensuring seamless communication, satisfaction, and
                long-term partnerships.`}
              </p>
              <a
                href='#'
                className='mt-4 inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white'
              >
                {`Read more`}
                <svg
                  className='ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
          <div className='mb-8 max-w-screen-md lg:mb-16'>
            <h2 className='lg:text-5x mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl'>
              {`What sets Konsumer Solutions apart from everyone else?`}
            </h2>
            <p className='text-gray-300 sm:text-xl'>
              {`We are committed to revolutionizing your workforce management
              experience. From sourcing extraordinary talents to handling their
              complete lifecycle, including hiring, managing, training,
              monitoring, and providing essential hardware and software, we
              cater to every aspect that our client might need. With our
              expertise and unwavering dedication, you can trust us to elevate
              your business with exceptional employees while you focus on
              driving your company towards unprecedented success.`}
            </p>
          </div>
          <div className='space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3'>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <FaPeopleCarry className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We handle Sourcing`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Unearth the best, most exceptional employees.`}
              </p>
            </div>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <FaHandshake className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We handle Hiring`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Implementing a robust interview process to select top talent.`}
              </p>
            </div>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <FaBriefcase className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We handle Managing`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Ensuring employees are punctual, proficient, and well-supported,
                from payment to coaching.`}
              </p>
            </div>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <BsGearFill className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We handle Simple Upskills/Training`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Effortlessly communicate product updates to Konsumer Solutions
                for seamless cascading to agents.`}
              </p>
            </div>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <BsBinocularsFill className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We handle Monitoring`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Vigilantly overseeing employee productivity throughout their
                shifts.`}
              </p>
            </div>
            <div>
              <div className='bg-primary-100 dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12'>
                <BsCpuFill className='text-4xl text-white md:text-6xl' />
              </div>
              <h3 className='mb-2 text-xl font-bold text-white'>
                {`We provide the Hardware/Software`}
              </h3>
              <p className='font-normal text-gray-300'>
                {`Providing comprehensive software, hardware, and tools to
                eliminate client worries.`}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section classes='bg-black gap-x-4 flex my-36 justify-center items-center flex-wrap gap-y-4'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
          <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>
            {`Unleashing Excellence: Experience Customer Service Like Never Before`}
          </h2>
          <p className='text-md mb-8 font-normal text-gray-300 sm:px-16 md:text-lg lg:mb-11 lg:text-xl xl:px-48'>
            {`Experience our unwavering commitment to hiring top talent as well as
            ensuring your customers receive unparalleled support and
            satisfaction.`}
          </p>
          <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
            <Link
              href='#'
              className='md:text-md bg-primary-700 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
            >
              {`Get Started Now`}
            </Link>
          </div>
          <div className='aspect-h-9 aspect-w-16'>
            <iframe
              src='/videos/konsumer-solutions.m4v'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
