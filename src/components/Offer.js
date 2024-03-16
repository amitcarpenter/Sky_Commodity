import { hover } from '@testing-library/user-event/dist/hover';
import React, { useRef, useEffect, useState } from 'react'
import Typed from 'react-typed';

const Offer = () => {


    const steps = [
        "Stocks are certificates that represent part ownership of a company. Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.",
        "Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.",
        "By holding stock, you can grow financial benefits and also..."
    ];


    const [currentStep, setCurrentStep] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleStepComplete = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prevStep => prevStep + 1);
        } else {
            clearInterval(intervalId);
            console.log("Array printing complete.");
        }
    };

    const handleMouseEnter = () => {
        if (!intervalId) {
            const newIntervalId = setInterval(handleStepComplete, 60000);
            setIntervalId(newIntervalId);
        }
    };

    const handleMouseLeave = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    return (
        <>


            <section className=' py-[35px] sm:py-[70px] '>
                <div className='container mx-auto'>
                    <h2 className=' text-[30px] md:text-[40px] text-center font-open font-medium capitalize'>what we offer</h2>
                    <div className='w-60  mx-auto flex justify-center gap-2'>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-[#059473]'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-[#059473]'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                    </div>


                    <p className='font-popin my-[20px]'>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>

                    <div className='flex  flex-col md:flex-row justify-center items-center gap-4  my-[50px] '>

                        <div class="lg:max-w-[300px]  rounded-lg shadow ">

                            <img class=" w-full h-32   lg:h-48   object-cover rounded-t-lg" src="https://th.bing.com/th?id=OIP.V3KJJLjajYw5V8T3t1Ll7AHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />

                            <div class="p-3">
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize">Research team</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div class="lg:max-w-[300px]  rounded-lg shadow overflow-hidden">

                            <img class=" w-full  h-32 lg:h-48 object-cover  rounded-t-lg" src="https://th.bing.com/th?id=OIP.V3KJJLjajYw5V8T3t1Ll7AHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />

                            <div class="p-3">
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize">Trading platform  team</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>
                        <div class="lg:max-w-[300px]  rounded-lg shadow overflow-hidden">

                            <img class=" w-full  h-32 lg:h-48  object-cover rounded-t-lg" src="https://th.bing.com/th?id=OIP.V3KJJLjajYw5V8T3t1Ll7AHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />

                            <div class="p-3">
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize">Research team</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            </div>
                        </div>



                    </div>
                </div>


            </section>


            <section className='mb-8 '>
                <div className='max-w-[1100px]'>
                    <div className='grid grid-cols-1  sm:grid-cols-[60%_auto] gap-2'>

                        <img className=' w-full  rounded-tr-[150px] rounded-md'
                            src="https://images.pexels.com/photos/8815838/pexels-photo-8815838.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' />

                        <div className='md:ml-10 px-5 flex justify-center items-center'>
                            <div>
                                <h2 className='text-2xl font-medium  '>Meet and learn together with  others like you virtually</h2>
                                <p class=" leading-[24px] py-2">Liquid shares are shares that are traded in high volumes on a daily basis and hence can be easily bought or sold without significantly impacting their price. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className='mb-[50px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='container mx-auto '>
                    <h2 className='text-[30px] md:text-[40px] text-center font-open font-medium capitalize'>How does this work</h2>
                    <div className='w-60  mx-auto flex justify-center gap-2'>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-[#059473]'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-[#059473]'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                        <div className='w-3 h-3 rounded-full p-1 bg-orange-500'></div>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5  mt-[50px] px-2'>


                        <ol className=' h-fit relative text-gray-500 border-l-[1px] border-[#059473] dark:border-gray-700 dark:text-gray-400'>



                            {steps.map((step, index) => (
                                <li
                                    key={index}
                                    className={`mb-8 ml-6 ${index <= currentStep ? 'visible' : 'invisible'}`}
                                >
                                    <span
                                        className={`absolute flex items-center justify-center w-8 h-8 ${index === currentStep ? 'bg-green-300' : 'bg-gray-100'
                                            } rounded-full -left-4 ring-4 ring-white ${index === currentStep ? 'dark:ring-gray-900 dark:bg-green-900' : 'dark:ring-gray-900 dark:bg-gray-700'
                                            }`}
                                    >
                                        {index + 1}
                                    </span>
                                    {index <= currentStep && (
                                        <Typed
                                            strings={[step]}
                                            typeSpeed={40}
                                            backSpeed={20}
                                            startDelay={500}
                                            showCursor={false}
                                            loop={false}
                                            onComplete={handleStepComplete}
                                            className='font-medium leading-tight'
                                        />
                                    )}
                                </li>
                            ))}



                        </ol>

                        <img className=' rounded-lg' src='https://images.pexels.com/photos/8112174/pexels-photo-8112174.jpeg?auto=compress&cs=tinysrgb&w=600' alt='lo' />


                    </div>
                </div>
            </section>


















            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-5  mt-[50px]'>

                        <div>

                            <ol class="relative text-gray-500 border-l-[1px]  border-[#059473] dark:border-gray-700 dark:text-gray-400">
                                {steps.map((step, index) => (
                                    <li
                                        key={index}
                                        className={`mb-8 ml-6 ${index <= currentStep ? 'visible' : 'invisible'}`}
                                    >
                                        <span className={`absolute flex items-center justify-center w-8 h-8 ${index === 0 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -left-4 ring-4 ring-white ${index === 0 ? 'dark:ring-gray-900 dark:bg-green-900' : 'dark:ring-gray-900 dark:bg-gray-700'}`}>
                                            {index + 1}
                                        </span>
                                        <Typed
                                            strings={[step]}
                                            typeSpeed={50}
                                            backSpeed={20}
                                            startDelay={500}
                                            backDelay={1500}
                                            showCursor={false}
                                            loop={false}
                                            onComplete={() => setCurrentStep(index + 1)}
                                            className="font-medium leading-tight"
                                        />
                                    </li>
                                ))}




                                <li class="mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                        1
                                    </span>
                                    <p class="font-medium leading-tight">Stocks are certificates that represent part ownership of a company. Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.</p>


                                </li>
                                <li class="mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        2
                                    </span>

                                    <p class="font-medium leading-tight">Stocks are certificates that represent part ownership of a company. Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.</p>
                                </li>
                                <li class="mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        3
                                    </span>

                                    <p class="font-medium leading-tight">Stocks are certificates that represent part ownership of a company. Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.</p>
                                </li>
                                <li class=" mb-8 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        4
                                    </span>

                                    <p class="font-medium leading-tight">Stocks are certificates that represent part ownership of a company. Stock holdings point out the number of stocks or shares, that a client or institution owns in a company. By holding stock, you can grow financial benefits and also have a say in how the company is run.</p>
                                </li>
                            </ol>

                        </div>

                        <img className=' rounded-lg'
                            src='https://images.pexels.com/photos/8112174/pexels-photo-8112174.jpeg?auto=compress&cs=tinysrgb&w=600' alt='lo' />


                    </div> */}


        </>
    )
}

export default Offer