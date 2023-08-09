import Section from '@/containers/Section/Section';
import Image from 'next/image';
import Link from 'next/link';

import { BsFillCheckCircleFill, BsFillHeartFill } from 'react-icons/bs';
import { GiBiceps } from 'react-icons/gi';
import { RiSparklingFill } from 'react-icons/ri';
import { FaBalanceScale } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
                {`About Konsumer Solutions`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`Konsumer Solutions is a forward-thinking brand founded by [Name or Customer Success Experts] in 2023. We are dedicated to revolutionizing the consumer experience through innovative solutions and exceptional service.`}
              </p>
            </div>
          </div>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/about.svg'
              alt='Teamwork illustration'
              width={50}
              height={50}
            />
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
                {`Our Mission`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`At Konsumer Solutions, our mission is to empower businesses and individuals by providing cutting-edge solutions that meet their unique needs. We strive to create meaningful connections between brands and consumers, fostering long-term relationships built on trust and satisfaction.`}
              </p>
            </div>
          </div>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/mission.svg'
              alt='Collaboration illustration'
              width={50}
              height={50}
            />
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
                {`Our Approach`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`We believe in the power of collaboration and customization. Our team of experts works closely with each client, understanding their goals and challenges to develop tailored strategies that drive success. By combining industry expertise with the latest technologies, we deliver unparalleled outcomes that exceed expectations.`}
              </p>
            </div>
          </div>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/approach.svg'
              alt='Unity illustration'
              width={50}
              height={50}
            />
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
                {`Customer-Centric Philosophy`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`Customer satisfaction is at the heart of everything we do. We are committed to understanding the evolving needs and preferences of consumers, enabling us to provide personalized solutions that resonate with target audiences. Our dedicated KS Specialists immerse themselves in our clients' worlds, becoming experts in their industries to ensure comprehensive support and impeccable service.`}
              </p>
            </div>
          </div>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/customer-centric.svg'
              alt='Happy person illustration'
              width={50}
              height={50}
            />
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl items-center gap-[5vw] p-4 md:grid md:grid-cols-2'>
          <div>
            <div className='mt-4 md:mt-0'>
              <h2 className='mb-3 max-w-2xl text-left text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
                {`Adaptive and Agile`}
              </h2>
              <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
                {`In a rapidly changing business landscape, agility is key. At Konsumer Solutions, we pride ourselves on our ability to adapt and pivot alongside our clients. We stay ahead of industry trends, embracing innovation and staying at the forefront of emerging technologies. Our agile approach allows us to navigate challenges and seize new opportunities, ensuring sustainable growth and continued success.`}
              </p>
            </div>
          </div>
          <div>
            <Image
              className='mb-10 w-full rounded-lg'
              src='/images/adaptive-and-agile.svg'
              alt='Smart working people illustration'
              width={50}
              height={50}
            />
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
          <div className='w-100 mx-auto'>
            <h3 className='mx-auto mb-6 max-w-3xl text-2xl font-extrabold leading-none tracking-tight sm:text-3xl md:mb-10 md:text-4xl'>
              {`Join us on this transformative journey as we redefine the consumer
              experience. Together, we can unlock the full potential of your
              brand and create lasting connections with your customers. Contact
              us today to get started with Konsumer Solutions.`}
            </h3>
          </div>
          <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
            <Link
              href='#'
              className='md:text-md bg-primary-700 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-center text-base text-sm font-medium text-black hover:bg-gray-700 hover:text-white lg:text-lg'
            >
              {`Take the First Step`}
            </Link>
          </div>
        </div>
      </Section>
      <Section classes='bg-black'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
          <div className='mx-auto max-w-screen-sm'>
            <h2 className='mb-3 max-w-2xl text-3xl font-extrabold leading-none tracking-tight sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'>
              Core Values
            </h2>
            <p className='text-md mb-7 max-w-2xl text-gray-300 md:mb-10 md:text-lg lg:mb-11 lg:text-xl'>
              {`These core values reflect our commitment to creating an inclusive
						and empowering workplace where individuals can be their authentic
						selves, freely express their thoughts, and have a positive impact on
						the company's culture and success. Moreover, Konsumer Solutions as a
						business should always be like`}{' '}
              <span className='font-bold text-white'>WATER:</span>{' '}
              {`adaptable, fluid, resilient,
						versatile, customer-centric, collaborative, and in a continuous flow
						of improvement and innovation.`}
              {``}
            </p>
          </div>
          <div className='mb-8 grid lg:mb-12 lg:grid-cols-2 '>
            <figure className='flex flex-col items-center justify-center border-b bg-black p-8 text-center md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
                <h3 className='text-2xl font-bold tracking-tight text-white md:text-3xl'>
                  {`Authenticity`}
                </h3>
                <p className='text-md my-4 text-gray-300 md:text-xl'>
                  {`We value and encourage employees to be their genuine selves, fostering an inclusive and accepting environment where everyone feels comfortable expressing their true thoughts, ideas, and perspectives.`}
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center space-x-3'>
                <p className='mb-3 flex justify-center text-4xl font-normal text-white md:text-7xl'>
                  <BsFillCheckCircleFill />
                </p>
              </figcaption>
            </figure>
            <figure className='flex flex-col items-center justify-center border-b bg-black p-8 text-center md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
                <h3 className='text-2xl font-semibold text-white'>
                  {`Transparency`}
                </h3>
                <p className='text-md my-4 text-gray-300 md:text-xl'>
                  {`We believe in open and honest communication at all levels. Our open door policy ensures that employees can freely approach management, share their concerns, provide feedback, and actively participate in shaping the company's direction.`}
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center space-x-3'>
                <p className='mb-3 flex justify-center text-4xl font-normal text-white md:text-7xl'>
                  <RiSparklingFill />
                </p>
              </figcaption>
            </figure>
            <figure className='flex flex-col items-center justify-center border-b bg-black p-8 text-center md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
                <h3 className='text-2xl font-semibold text-white'>Respect</h3>
                <p className='text-md my-4 text-gray-300 md:text-xl'>
                  {`We respect the individuality and diverse backgrounds of our employees. We foster a culture of mutual respect where everyone's opinions are valued and differences are celebrated. We encourage constructive dialogue and active listening to create a collaborative and supportive workplace.`}
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center space-x-3'>
                <p className='mb-3 flex justify-center text-4xl font-normal text-white md:text-7xl'>
                  <BsFillHeartFill />
                </p>
              </figcaption>
            </figure>
            <figure className='flex flex-col items-center justify-center border-b bg-black p-8 text-center md:p-12'>
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
                <h3 className='text-2xl font-semibold text-white'>
                  {`Empowerment`}
                </h3>
                <p className='text-md my-4 text-gray-300 md:text-xl'>
                  {`We empower our employees to take ownership of their work and contribute to the company's success. We believe in providing opportunities for growth, learning, and personal development, enabling individuals to reach their full potential and make a meaningful impact.`}
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center space-x-3'>
                <p className='mb-3 flex justify-center text-4xl font-normal text-white md:text-7xl'>
                  <GiBiceps />
                </p>
              </figcaption>
            </figure>
          </div>
          <figure className='flex-col items-center justify-center bg-black p-8 text-center md:p-12'>
            <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
              <h3 className='text-2xl font-semibold text-white'>
                {`Work-Life Balance`}
              </h3>
              <p className='text-md my-4 text-gray-300 md:text-xl'>
                {`We recognize the importance of maintaining a healthy work-life balance. We strive to create an environment that supports employees in managing their professional commitments alongside personal and family responsibilities. We encourage a flexible approach to work arrangements and prioritize the well-being of our team members.`}
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center space-x-3'>
              <p className='mb-3 flex justify-center text-4xl font-normal text-white md:text-7xl'>
                <FaBalanceScale />
              </p>
            </figcaption>
          </figure>
        </div>
      </Section>
    </>
  );
}
