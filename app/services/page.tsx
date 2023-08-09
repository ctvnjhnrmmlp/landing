'use client';

import Section from '@/containers/Section/Section';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  tab: {
    tabpanel: '',
    tablist: {
      base: 'text-black border-transparent focus:border-transparent focus:ring-0',
      tabitem: {
        base: 'items-center justify-center p-4 text-sm font-medium ml-0 w-full flex bg-white hover:text-white hover:bg-black disabled:hover:text-white disabled:hover:bg-black',
      },
    },
  },
};

export default function Page() {
  return (
    <Section classes='bg-black'>
      <Flowbite theme={{ theme: customTheme }}>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
          <Tabs.Group aria-label='Full width tabs' style='fullWidth'>
            <Tabs.Item active icon={BiSupport} title='Customer Service'>
              <div className='mx-auto mt-10'>
                <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                  {`Customer Service`}
                </h2>
                <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                  {`Ensure customer satisfaction with our dedicated Support
									Specialists who will become experts in your industry,
									protecting your achievements. We adapt alongside you, ready to
									pivot when needed.`}
                </p>
                <div className='mx-auto grid gap-2 sm:flex sm:flex-wrap'>
                  <Link
                    href='/contact'
                    className='md:text-md bg-primary-700 mx-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
                  >
                    {`Take the first step`}
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
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
              </div>
              <div className='mx-auto mt-14'>
                <h6 className='mb-2 text-center text-lg font-bold tracking-tight text-white md:text-xl'>
                  {`Deliver continuous customer satisfaction.`}
                </h6>
                <p className='text-md mx-auto mb-7 max-w-2xl text-center text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                  {`Ensure customer satisfaction with our dedicated Support
                  Specialists who will become experts in your industry,
                  protecting your achievements. We adapt alongside you, ready to
                  pivot when needed.`}
                </p>
                <h6 className='mb-2 text-center text-lg font-bold tracking-tight text-white md:text-xl'>
                  {`Collaborate with a company that upholds your shared values.`}
                </h6>
                <p className='text-md mx-auto mb-7 max-w-2xl text-center text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                  {`Choose a committed partner dedicated to fostering positive
                  change in the communities of its clients and employees.`}
                </p>
              </div>
              <div className='mx-auto mt-20'>
                <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                  {`Outsourcing Benefits`}
                </h2>
                <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                  {`We aim to assist you in becoming the most reliable brand in
                  your industry, ensuring that every customer interaction
                  receives the utmost care and attention it deserves.`}
                </p>
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
                <div className='mx-auto flex w-full flex-col gap-4 md:w-1/2'>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`Customer support teams comprised of highly proficient
                      English-speaking agents.`}
                    </p>
                  </div>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`Offer rapidly scalable support teams that are specialized
                      in providing industry-specific assistance.`}
                    </p>
                  </div>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`A wide range of channels, including calls, texts, emails,
                      social media, and in-app messaging, engaging with
                      customers in multiple ways for their convenience.`}
                    </p>
                  </div>
                </div>
                <div className='mx-auto mt-20'>
                  <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                    {`Questions?`}
                  </h2>
                  <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                    {`We're delighted to help you build your team and address any
										inquiries you may have.`}
                  </p>
                  <div className='mx-auto grid gap-2 sm:flex sm:flex-wrap'>
                    <Link
                      href='/contact'
                      className='md:text-md bg-primary-700 mx-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
                    >
                      {`Take the first step`}
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
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
              </div>
            </Tabs.Item>
            <Tabs.Item active icon={BiSupport} title='Sales'>
              <div className='mx-auto mt-10'>
                <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                  {`Sales`}
                </h2>
                <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                  {`Ensure customer satisfaction with our dedicated Support
									Specialists who will become experts in your industry,
									protecting your achievements. We adapt alongside you, ready to
									pivot when needed.`}
                </p>
                <div className='mx-auto grid gap-2 sm:flex sm:flex-wrap'>
                  <Link
                    href='/contact'
                    className='md:text-md bg-primary-700 mx-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
                  >
                    {`Take the first step`}
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
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
              </div>
              <div className='mx-auto mt-14'>
                <h6 className='mb-2 text-center text-lg font-bold tracking-tight text-white md:text-xl'>
                  {`Deliver continuous customer satisfaction.`}
                </h6>
                <p className='text-md mx-auto mb-7 max-w-2xl text-center text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                  {`Ensure customer satisfaction with our dedicated Support
                  Specialists who will become experts in your industry,
                  protecting your achievements. We adapt alongside you, ready to
                  pivot when needed.`}
                </p>
                <h6 className='mb-2 text-center text-lg font-bold tracking-tight text-white md:text-xl'>
                  {`Collaborate with a company that upholds your shared values.`}
                </h6>
                <p className='text-md mx-auto mb-7 max-w-2xl text-center text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                  {`Choose a committed partner dedicated to fostering positive
                  change in the communities of its clients and employees.`}
                </p>
              </div>
              <div className='mx-auto mt-20'>
                <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                  {`Outsourcing Benefits`}
                </h2>
                <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                  {`We aim to assist you in becoming the most reliable brand in
                  your industry, ensuring that every customer interaction
                  receives the utmost care and attention it deserves.`}
                </p>
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
                <div className='mx-auto flex w-full flex-col gap-4 md:w-1/2'>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`Customer support teams comprised of highly proficient
                      English-speaking agents.`}
                    </p>
                  </div>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`Offer rapidly scalable support teams that are specialized
                      in providing industry-specific assistance.`}
                    </p>
                  </div>
                  <div className='flex flex-row content-center justify-center gap-5'>
                    <div className='flex flex-col justify-center'>
                      <p className=' text-3xl font-normal text-white lg:text-4xl'>
                        <FaCheckCircle />
                      </p>
                    </div>
                    <p className='text-md max-w-2xl text-left text-gray-300 md:text-lg lg:text-xl'>
                      {`A wide range of channels, including calls, texts, emails,
                      social media, and in-app messaging, engaging with
                      customers in multiple ways for their convenience.`}
                    </p>
                  </div>
                </div>
                <div className='mx-auto mt-20'>
                  <h2 className='mb-4 mt-12 text-center text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:mt-8 lg:text-4xl'>
                    {`Questions?`}
                  </h2>
                  <p className='text-md mx-auto mb-5 max-w-2xl text-center text-gray-300 md:mb-7 md:text-lg lg:mb-9 lg:text-xl'>
                    {`We're delighted to help you build your team and address any
										inquiries you may have.`}
                  </p>
                  <div className='mx-auto grid gap-2 sm:flex sm:flex-wrap'>
                    <Link
                      href='/contact'
                      className='md:text-md bg-primary-700 mx-auto inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
                    >
                      {`Take the first step`}
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
                {/* <div>
                  <Image
                    className='mb-10 w-full rounded-lg'
                    src='/images/mission.svg'
                    alt='Collaboration illustration'
                    width={50}
                    height={50}
                  />
                </div> */}
              </div>
            </Tabs.Item>
            <Tabs.Item active icon={MdDashboard} title='Sales'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit consequatur assumenda unde quibusdam at aspernatur
                repellendus ipsa. Dolorum voluptate atque nobis quo quaerat
                consectetur. Dolorum!
              </p>
            </Tabs.Item>
            <Tabs.Item icon={HiAdjustments} title='Lead Generation'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit consequatur assumenda unde quibusdam at aspernatur
                repellendus ipsa. Dolorum voluptate atque nobis quo quaerat
                consectetur. Dolorum!
              </p>
            </Tabs.Item>
            <Tabs.Item icon={HiClipboardList} title='Social Media Management'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit consequatur assumenda unde quibusdam at aspernatur
                repellendus ipsa. Dolorum voluptate atque nobis quo quaerat
                consectetur. Dolorum!
              </p>
            </Tabs.Item>
            <Tabs.Item icon={HiClipboardList} title='Development'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit consequatur assumenda unde quibusdam at aspernatur
                repellendus ipsa. Dolorum voluptate atque nobis quo quaerat
                consectetur. Dolorum!
              </p>
            </Tabs.Item>
            <Tabs.Item icon={HiClipboardList} title='Account Management'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit consequatur assumenda unde quibusdam at aspernatur
                repellendus ipsa. Dolorum voluptate atque nobis quo quaerat
                consectetur. Dolorum!
              </p>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </Flowbite>
    </Section>
  );
}
