import React from 'react';
import visioImage from "../components/Iconaasets/Our-Vision1-png.png";
import valueImage from "../components/Iconaasets/our-value1-png.png";
import missioImage from "../components/Iconaasets/Our-Mission1-png.png";
import { Helmet } from 'react-helmet';
const MissionAndPromise = () => {
  return ( 



    <>
       <Helmet>
                <title>Sky Commodity | Mission</title>
            </Helmet>

        <section className=''>


      <section className='bg-[#e4dddd] padding-wrap ' >
        <div className=' container grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-5'>
          <div className='flex flex-col '>
            <h1 className=' text-[#ff5e14] text-5xl font-popin font-bold'>01</h1>
            <h3 class=" text-[#059573] underline underline-offset-4  text-2xl md:text-3xl font-bold font-jost">Vision</h3>
            {/* <div className='w-32 bg-orange-500 h-1 rounded-full'></div> */}
            <div className='py-2 md:py-4 px-2'>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                Our vision is to provide leadership for the growth and prosperity of businesses in Ghana.
              </p>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                To become the most trusted Savings and Investments Partner for our Clients and to provide investors with the best value through innovative products, investment strategies, and advanced technology.
              </p>
            </div>
          </div>
          <div className='  p-2.5  md:ml-12   overflow-hidden '>
            <img class="  md:h-[350px]  object-cover w-full  hover:scale-[1.1] transform transition duration-1000 ease-in-out"
              src={visioImage}
              alt="Who We Are Image"

            />

          </div>
        </div>

      </section>

      <section className='bg-[#f8f8f8] padding-wrap'>
        <div className='container grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-5  '>
          <div className='  p-2.5   order_change  overflow-hidden '>
            <img class="  md:h-[350px]  object-cover w-full  hover:scale-[1.1] transform transition duration-1000 ease-in-out"
              src={missioImage}
              alt="Who We Are Image"

            />
          </div>
          <div className='mt-3 ml-3 order_change2   '>
            <h1 className=' text-[#ff5e14] text-5xl font-popin font-bold'>02</h1>

            <h3 class=" text-[#059573] underline underline-offset-4 font-jost text-2xl md:text-3xl font-bold">Mision</h3>
            <div className='py-2 md:py-4  px-2'>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                The GNCCI serves as the representative voice of the business community. Promotes and protects the interest of members by fostering ethical practices in commerce, trade, and services through advocacy, training, education, and ensuring adherence to quality.
              </p>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                To become the most trusted Savings and Investments Partner for
                To build value for Customers, Employees, and other Stakeholders by creating new industry benchmarks in Financial Product Solutions and Services in the most innovative and cost-effective ways.
              </p>
            </div>

          </div>


        </div>
      </section>


      <section className='bg-[#e4dddd] padding-wrap'>
        <div className=' container grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-5'>
          <div className='flex flex-col '>
            <h1 className=' text-[#ff5e14] text-5xl font-popin font-bold'>03</h1>

            <h3 class=" text-[#059573] underline underline-offset-4 font-jost text-2xl md:text-3xl font-bold">Our Values</h3>

            <div className='py-2 md:py-4  px-2'>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                Our vision is to provide leadership for the growth and prosperity of businesses in Ghana.
              </p>
              <p className=' text-[1rem] md:text-[1.2rem] text-black leading-[1.6rem]  font-jost'>
                To become the most trusted Savings and Investments Partner for our Clients and to provide investors with the best value through innovative products, investment strategies, and advanced technology.
              </p>
            </div>
          </div>
          <div className='  p-2.5  md:ml-12 order_change2  overflow-hidden '>
            <img class="   md:h-[350px]  w-full  hover:scale-[1.1] transform transition duration-1000 ease-in-out "
              src={valueImage}
              alt="Who We Are Image"

            />
          </div>
        </div>
      </section>

    </section>

    </>



  );
}

export default MissionAndPromise;
