import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
                {/* Top area: Blocks */}
                <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>
                    {/* 1st block */}
                    <div className='sm:col-span-12 lg:col-span-3'>
                        <div className='mb-2'>
                            <div className='shrink-0 mr-4'>
                                <Image src={Logo} width={120} height={50} alt='Logo' />
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
                        <h6 className='text-gray-800 font-medium mb-2'>Socials</h6>
                        <ul className='text-sm'>
                            <li className='mb-2'>
                                <a
                                    href='https://www.tiktok.com/@choosecade'
                                    target='_blank'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    TikTok
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a
                                    href='https://www.instagram.com/choosecade/'
                                    target='_blank'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a
                                    href='https://www.facebook.com/choosecade'
                                    target='_blank'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a
                                    href='https://www.linkedin.com/in/cadeboseck/'
                                    target='_blank'
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
                        <h6 className='text-gray-800 font-medium mb-2'>Resources</h6>
                        <ul className='text-sm'>
                            <li className='mb-2'>
                                <a
                                    href='/pdfs/buyers-guide.pdf'
                                    download
                                    className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'
                                >
                                    Buyer's Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 5th block */}
                    <div className='sm:col-span-6 md:col-span-3 lg:col-span-3'>
                        {/* <a
                            href='https://www.google.com/forms/about/'
                            target='_blank'
                            className='btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0'
                        >
                            Get Started
                        </a> */}
                        <Link
                            href='https://www.google.com/forms/about/'
                            target='_blank'
                            className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3'
                        >
                            <span>Contact Me</span>
                            <svg
                                className='w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1'
                                viewBox='0 0 12 12'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                                    fillRule='nonzero'
                                />
                            </svg>
                        </Link>
                        {/* <h6 className='text-gray-800 font-medium mb-2'>Contact Me</h6>
                        <p className='text-sm text-gray-600 mb-4'>Get the latest news and articles to your inbox every month.</p>
                        <form>
                            <div className='flex flex-wrap mb-4'>
                                <div className='w-full'>
                                    <label className='block text-sm sr-only' htmlFor='newsletter'>
                                        Email
                                    </label>
                                    <div className='relative flex items-center max-w-xs'>
                                        <input
                                            id='newsletter'
                                            type='email'
                                            className='form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm'
                                            placeholder='Your email'
                                            required
                                        />
                                        <button type='submit' className='absolute inset-0 left-auto' aria-label='Subscribe'>
                                            <span
                                                className='absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300'
                                                aria-hidden='true'
                                            ></span>
                                            <svg
                                                className='w-3 h-3 fill-current text-blue-600 mx-3 shrink-0'
                                                viewBox='0 0 12 12'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                                                    fillRule='nonzero'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form> */}
                    </div>
                </div>

                {/* Bottom area */}
                <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
                    {/* Social as */}
                    <ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
                        {/* https://icons8.com/icon/set/logos/arcade */}

                        <li className='ml-4'>
                            <a href='https://www.tiktok.com/@choosecade' target='_blank' aria-label='TikTok'>
                                <svg
                                    className='w-8 h-8 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    x='0px'
                                    y='0px'
                                    width='64'
                                    height='64'
                                    viewBox='0 0 64 64'
                                >
                                    <path
                                        fill='#9c34c2'
                                        d='M54,20c0-5.523-4.477-10-10-10H32H20c-5.523,0-10,4.477-10,10v24.008c0,5.523,4.477,10,10,10h12h12 c5.523,0,10-4.477,10-10V20z'
                                    ></path>
                                    <ellipse cx='32' cy='61' opacity='.3' rx='20' ry='3'></ellipse>
                                    <path
                                        fill='#fff'
                                        d='M14.01,12H14c-2.24,1.69-3.75,4.29-3.97,7.25C10.01,19.49,10,19.75,10,20v12 c2.761,0,5-2.239,5-5v-7c0-0.108,0.003-0.221,0.017-0.38c0.102-1.375,0.778-2.65,1.862-3.525c0.048-0.033,0.095-0.068,0.142-0.103 C17.881,15.343,18.911,15,20,15h5c2.761,0,5-2.239,5-5H20C17.75,10,15.68,10.74,14.01,12z'
                                        opacity='.3'
                                    ></path>
                                    <path
                                        d='M54,44V22c-2.761,0-5,2.238-5,5v17c0,2.757-2.243,5-5,5h-5c-2.761,0-5,2.238-5,5h10 C49.523,54,54,49.523,54,44z'
                                        opacity='.15'
                                    ></path>
                                    <path
                                        fill='none'
                                        stroke='#fff'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-miterlimit='10'
                                        stroke-width='3'
                                        d='M13.5,23.5V20c0-0.153,0.005-0.312,0.018-0.459c0.135-1.809,1.003-3.46,2.396-4.594l0.204-0.152'
                                    ></path>
                                    <path
                                        fill='#68e5fd'
                                        d='M41,25c-2.757,0-5-2.243-5-5v-0.5c0-1.381-1.119-2.5-2.5-2.5S31,18.119,31,19.5v17	c0,1.93-1.57,3.5-3.5,3.5S24,38.43,24,36.5c0-1.476,0.933-2.801,2.321-3.297c1.3-0.465,1.978-1.896,1.512-3.196	c-0.465-1.301-1.895-1.979-3.195-1.512C21.266,29.701,19,32.918,19,36.5c0,4.687,3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5v-7.853	C37.473,29.502,39.178,30,41,30c1.381,0,2.5-1.119,2.5-2.5S42.381,25,41,25z'
                                    ></path>
                                    <path
                                        fill='#fd3c4f'
                                        d='M43,27c-2.757,0-5-2.243-5-5v-0.5c0-1.381-1.119-2.5-2.5-2.5S33,20.119,33,21.5v17	c0,1.93-1.57,3.5-3.5,3.5S26,40.43,26,38.5c0-1.476,0.933-2.801,2.321-3.297c1.3-0.465,1.978-1.896,1.512-3.196	c-0.465-1.301-1.895-1.979-3.195-1.512C23.266,31.701,21,34.918,21,38.5c0,4.687,3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5v-7.853	C39.473,31.502,41.178,32,43,32c1.381,0,2.5-1.119,2.5-2.5S44.381,27,43,27z'
                                    ></path>
                                    <path
                                        fill='#fff'
                                        d='M38.627,24.373C37.071,23.525,36,21.894,36,20v-0.5c0-0.156-0.019-0.307-0.046-0.454	C35.807,19.019,35.656,19,35.5,19c-1.381,0-2.5,1.119-2.5,2.5v17c0,1.93-1.57,3.5-3.5,3.5c-1.486,0-2.75-0.934-3.257-2.243	C24.934,39.25,24,37.986,24,36.5c0-1.476,0.933-2.801,2.321-3.297c1.17-0.418,1.828-1.62,1.609-2.803	c-0.419-0.078-0.862-0.059-1.293,0.095C23.266,31.701,21,34.918,21,38.5c0,1.834,0.59,3.529,1.581,4.919	C23.971,44.41,25.666,45,27.5,45c4.687,0,8.5-3.813,8.5-8.5v-7.853C37.473,29.502,39.178,30,41,30c1.381,0,2.5-1.119,2.5-2.5	c0-0.156-0.019-0.307-0.046-0.454C43.307,27.019,43.156,27,43,27C41.106,27,39.475,25.929,38.627,24.373z'
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li className='ml-4'>
                            <a href='https://www.instagram.com/choosecade/' target='_blank' aria-label='Instagram'>
                                <svg
                                    className='w-8 h-8 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    x='0px'
                                    y='0px'
                                    width='64'
                                    height='64'
                                    viewBox='0 0 64 64'
                                >
                                    <path
                                        fill='#9c34c2'
                                        d='M54,20v24c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54H20	c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01c1.67-1.26,3.74-2,5.99-2h24	C49.52,10,54,14.48,54,20z'
                                    ></path>
                                    <path
                                        fill='#bc379c'
                                        d='M54,29.36V44c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97 C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01 c1.67-1.26,3.74-2,5.99-2h14.64C42.93,14.29,49.71,21.07,54,29.36z'
                                    ></path>
                                    <path
                                        fill='#dd3975'
                                        d='M52,49.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10 V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01C34.99,12.01,51.99,29.01,52,49.99z'
                                    ></path>
                                    <path
                                        fill='#fd3c4f'
                                        d='M45,50c0,1.34-0.09,2.67-0.25,3.97C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10V20 c0-0.25,0.01-0.51,0.03-0.75C11.33,19.09,12.66,19,14,19C31.12,19,45,32.88,45,50z'
                                    ></path>
                                    <path
                                        fill='#fe6d42'
                                        d='M38,50c0,1.36-0.11,2.7-0.34,4H20c-5.52,0-10-4.48-10-10V26.34c1.3-0.23,2.64-0.34,4-0.34 C27.25,26,38,36.75,38,50z'
                                    ></path>
                                    <path
                                        fill='#fe9d36'
                                        d='M32,50c0,1.37-0.15,2.71-0.46,4H20c-5.52,0-10-4.48-10-10V32.46c1.29-0.31,2.63-0.46,4-0.46 C23.94,32,32,40.06,32,50z'
                                    ></path>
                                    <path
                                        fill='#ffce29'
                                        d='M25,50c0,1.41-0.27,2.76-0.75,4H20c-5.52,0-10-4.48-10-10v-4.25c1.24-0.48,2.59-0.75,4-0.75 C20.08,39,25,43.92,25,50z'
                                    ></path>
                                    <ellipse cx='32' cy='61' opacity='.3' rx='20' ry='3'></ellipse>
                                    <g>
                                        <path
                                            fill='#fff'
                                            d='M31,15c2.761,0,5-2.238,5-5H20c-5.523,0-10,4.477-10,10v22c2.761,0,5-2.238,5-5V20 c0-2.757,2.243-5,5-5H31z'
                                            opacity='.3'
                                        ></path>
                                        <path
                                            d='M54,44V22c-2.761,0-5,2.238-5,5v17c0,2.757-2.243,5-5,5H33c-2.761,0-5,2.238-5,5h16 C49.523,54,54,49.523,54,44z'
                                            opacity='.15'
                                        ></path>
                                    </g>
                                    <path
                                        fill='#fff'
                                        d='M14,21.5c-0.829,0-1.5-0.671-1.5-1.5c0-4.136,3.364-7.5,7.5-7.5c0.829,0,1.5,0.671,1.5,1.5	s-0.671,1.5-1.5,1.5c-2.481,0-4.5,2.019-4.5,4.5C15.5,20.829,14.829,21.5,14,21.5z'
                                    ></path>
                                    <path
                                        fill='#fff'
                                        d='M39.5,48h-15c-4.687,0-8.5-3.813-8.5-8.5v-15c0-4.687,3.813-8.5,8.5-8.5h15	c4.687,0,8.5,3.813,8.5,8.5v15C48,44.187,44.187,48,39.5,48z M24.5,19c-3.033,0-5.5,2.467-5.5,5.5v15c0,3.033,2.467,5.5,5.5,5.5h15	c3.033,0,5.5-2.467,5.5-5.5v-15c0-3.033-2.467-5.5-5.5-5.5H24.5z'
                                    ></path>
                                    <path
                                        fill='#fff'
                                        d='M32,40c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S36.411,40,32,40z M32,27c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S34.757,27,32,27z'
                                    ></path>
                                    <circle cx='40.5' cy='23.5' r='2' fill='#fff'></circle>
                                </svg>
                            </a>
                        </li>
                        <li className='ml-4'>
                            <a href='https://www.facebook.com/choosecade' target='_blank' aria-label='Facebook'>
                                <svg
                                    className='w-8 h-8 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    x='0px'
                                    y='0px'
                                    width='64'
                                    height='64'
                                    viewBox='0 0 64 64'
                                >
                                    <path
                                        fill='#008aa9'
                                        d='M48.26,48.26c-3.47,3.48-7.77,5.6-12.26,6.38c-2.64,0.48-5.36,0.48-8,0	c-4.49-0.78-8.79-2.9-12.26-6.38c-8.99-8.98-8.99-23.54,0-32.52c8.98-8.99,23.54-8.99,32.52,0C57.25,24.72,57.25,39.28,48.26,48.26z'
                                    ></path>
                                    <ellipse cx='32' cy='61' opacity='.3' rx='19' ry='3'></ellipse>
                                    <path
                                        fill='#fff'
                                        d='M36,28v4h4.847c0.609,0,1.076,0.539,0.99,1.141l-0.592,4.141C41.105,38.268,40.261,39,39.265,39H36	v15.64c-2.64,0.48-5.36,0.48-8,0V39h-4c-1.105,0-2-0.895-2-2v-3c0-1.105,0.895-2,2-2h4v-4c0-6.603,3.559-11.426,12.354-9.854	C41.305,18.316,42,19.154,42,20.12v1.979c0,1.014-0.762,1.879-1.77,1.983C37.41,24.372,36,25.481,36,28z'
                                    ></path>
                                    <path
                                        fill='#fff'
                                        d='M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9 C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z'
                                        opacity='.3'
                                    ></path>
                                    <path
                                        d='M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18 c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z'
                                        opacity='.15'
                                    ></path>
                                    <path
                                        fill='#fff'
                                        d='M15.045,24.927c-0.229,0-0.46-0.053-0.678-0.163c-0.739-0.375-1.033-1.278-0.658-2.017	c2.019-3.977,5.339-7.241,9.347-9.192c0.743-0.364,1.642-0.053,2.005,0.692c0.363,0.745,0.053,1.643-0.692,2.005	c-3.424,1.667-6.26,4.456-7.985,7.853C16.119,24.627,15.592,24.927,15.045,24.927z'
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li className='ml-4'>
                            <a href='https://www.linkedin.com/in/cadeboseck/' target='_blank' aria-label='LinkedIn'>
                                <svg
                                    className='w-8 h-8 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    x='0px'
                                    y='0px'
                                    width='64'
                                    height='64'
                                    viewBox='0 0 64 64'
                                >
                                    <path
                                        fill='#9c34c2'
                                        d='M54,20c0-5.523-4.477-10-10-10H32H20c-5.523,0-10,4.477-10,10v24.008c0,5.523,4.477,10,10,10h12h12	c5.523,0,10-4.477,10-10V20z'
                                    ></path>
                                    <ellipse cx='32' cy='61' opacity='.3' rx='20' ry='3'></ellipse>
                                    <path
                                        fill='#fff'
                                        d='M14.01,12H14c-2.24,1.69-3.75,4.29-3.97,7.25C10.01,19.49,10,19.75,10,20v12	c2.761,0,5-2.239,5-5v-7c0-0.108,0.003-0.221,0.017-0.38c0.102-1.375,0.778-2.65,1.862-3.525c0.048-0.033,0.095-0.068,0.142-0.103	C17.881,15.343,18.911,15,20,15h5c2.761,0,5-2.239,5-5H20C17.75,10,15.68,10.74,14.01,12z'
                                        opacity='.3'
                                    ></path>
                                    <path
                                        d='M54,44V22c-2.761,0-5,2.238-5,5v17c0,2.757-2.243,5-5,5h-5c-2.761,0-5,2.238-5,5h10 C49.523,54,54,49.523,54,44z'
                                        opacity='.15'
                                    ></path>
                                    <path
                                        fill='none'
                                        stroke='#fff'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-miterlimit='10'
                                        stroke-width='3'
                                        d='M13.5,23.5V20c0-0.153,0.005-0.312,0.018-0.459c0.135-1.809,1.003-3.46,2.396-4.594l0.204-0.152'
                                    ></path>
                                    <path
                                        fill='#a0effe'
                                        d='M19,26h4c0.552,0,1,0.448,1,1v18c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1V27	C18,26.448,18.448,26,19,26z'
                                    ></path>
                                    <path
                                        fill='#a0effe'
                                        d='M20.982,24h-0.034C19.158,24,18,22.666,18,20.999C18,19.296,19.194,18,21.017,18	c1.825,0,2.95,1.296,2.983,2.999C24,22.664,22.842,24,20.982,24z'
                                    ></path>
                                    <path
                                        fill='#a0effe'
                                        d='M41,46c-0.552,0-1-0.448-1-1v-9.615c0-2.564-1.429-4.314-3.724-4.314	c-1.751,0-2.699,1.181-3.158,2.322C32.95,33.8,33,34.93,33,35.5V45c0,0.552-0.448,1-1,1h-4c-0.552,0-1-0.448-1-1V27	c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v2c0.841-1.302,2.325-3.006,5.694-3.006c4.174,0,7.304,2.797,7.304,8.659L46,45	c0,0.552-0.448,1-1,1H41z'
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    {/* Copyrights note */}
                    <div className='text-sm text-gray-600 mr-4'>&copy; ChooseCade.com. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
