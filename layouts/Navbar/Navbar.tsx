import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='sticky top-0 bg-black'>
        <div className='mx-auto flex flex-wrap items-center justify-between p-4'>
          <Link href='/' className='flex items-center'>
            <p className='self-center text-2xl font-bold text-white md:text-3xl lg:text-4xl'>
              Konsumer Solutions
            </p>
          </Link>
        </div>
      </nav>
      <nav className='sticky top-0 bg-black'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <Link
            href='/'
            className='flex items-center md:max-lg:mx-auto md:max-lg:mb-4'
          >
            <p className='self-center whitespace-nowrap text-2xl font-bold text-white md:text-3xl lg:text-4xl'>
              Konsumer Solutions
            </p>
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-white hover:text-black focus:outline-none md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full md:block lg:w-auto' id='navbar-default'>
            <ul className='flex flex-col rounded-lg font-medium md:mt-0 md:flex-row md:items-center md:justify-center md:space-x-8 md:p-0'>
              <li>
                <Link
                  href='/'
                  className='md:text-md block justify-center rounded p-2 align-middle text-sm text-white hover:bg-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-gray-700 lg:text-lg'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='md:text-md block justify-center rounded p-2 align-middle text-sm text-white hover:bg-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-gray-700 lg:text-lg'
                  aria-current='page'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='md:text-md block justify-center rounded p-2 align-middle text-sm text-white hover:bg-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-gray-700 lg:text-lg'
                  aria-current='page'
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href='/careers'
                  className='md:text-md block justify-center rounded p-2 align-middle text-sm text-white hover:bg-white hover:text-black md:border-0 md:hover:bg-transparent md:hover:text-gray-700 lg:text-lg'
                  aria-current='page'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <button
                    type='button'
                    className='md:text-md mt-3 inline-flex items-center rounded-lg bg-white px-2 py-2 text-center text-sm text-sm font-medium text-black hover:bg-gray-700 hover:text-white focus:outline-none sm:mt-0 md:px-3 md:py-3 lg:px-5 lg:py-2.5 lg:text-lg'
                  >
                    Contact Us
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
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
