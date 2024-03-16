import React from 'react';
import globe from "../../src/components/Iconaasets/globe.png";
import smartphone from "../../src/components/Iconaasets/smartphone.png";
import resposive from "../../src/components/Iconaasets/resposive.png";
import activebg from "../../src/components/Iconaasets/active-bg.avif";

const Activity = () => {
    return (
        //  <section
        //      id="servies-section"
        //      className='servies-section-active pb-[30px]  md:pb-[70px] bg-no-repeat bg-cover bg-gradient-to-t from-blue-300 to-purple-300'
        //  >
        //      <div className='container'>
        //          <h2 className='text-center capitalize text-[#059473] text-[32px] font-medium pt-[46px] pb-[10px] leading-[48px] md:text-[45px] md:leading-[55px]'>Advanced technology Experience</h2>
        //          <div className="col flex justify-center items-center text-center flex-row gap-1">
        //              <div className="color1"></div>
        //              <div className="color2"></div>
        //              <div className="color3"></div>
        //              <div className="color4"></div>
        //              <div className="color5"></div>
        //              <div className="color6"></div>
        //          </div>

        //          <div className='row gy-4 my-4'>
        //              <div className='col-lg-4'>
        //                  <div className='servi'>
        //                      <div>
        //                          <img src={smartphone} alt="Smartphone" style={{ margin: "auto", width: "50px", height: "50px" }} />
        //                      </div>
        //                      <div>
        //                          <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity App</h6>
        //                      </div>
        //                      <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
        //                          <p>Advanced features, easy-to-operate, user-friendly, and secure trading and investing app for Android mobile</p>
        //                      </div>
        //                  </div>
        //              </div>
        //              <div className='col-lg-4'>
        //                  <div className='servi'>
        //                      <div>
        //                          <img src={globe} alt="Globe" style={{ margin: "auto", width: "50px", height: "50px" }} />
        //                      </div>
        //                      <div>
        //                          <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity Web</h6>
        //                      </div>
        //                      <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
        //                          <p>Bigger Screen for Trading & Investing on the Web with Advanced charting tools, secure and intuitive interface.</p>
        //                      </div>
        //                  </div>
        //              </div>
        //              <div className='col-lg-4'>
        //                  <div className='servi'>
        //                      <div>
        //                          <img src={resposive} alt="Responsive" style={{ margin: "auto", width: "50px", height: "50px" }} />
        //                      </div>
        //                      <div>
        //                          <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity EXE</h6>
        //                      </div>
        //                      <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
        //                          <p>The most dynamic and advanced desktop trading and investing platform for a smart investor.</p>
        //                      </div>
        //                  </div>
        //              </div>
        //          </div>

        //      </div>

        //          {/* <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //              <path fill="#00cba9" fillOpacity="0.5" d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        //          </svg> */}

        //  </section>



        <>

            <div
                class="mx-auto  w-full bg-cover  pb-[30px]  md:pb-[70px]  bg-bottom bg-no-repeat shadow-lg"
                style={{ "background-image": `url(${activebg})` }}>

                <div className='container'>
                    <h2 className='text-center capitalize text-white text-[28px] font-medium font-jost pt-[46px] pb-[10px] leading-[48px] md:text-[38px] md:leading-[55px]'>Advanced technology Experience</h2>
                    <div className="col flex justify-center items-center text-center flex-row gap-1">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                        <div className="color4"></div>
                        <div className="color5"></div>
                        <div className="color6"></div>
                    </div>

                    <div className='row max-w-[910px]  mx-auto mt-4 gap-2 deva'>
                        <div className='col-12 col-sm-12 col-md-4   shadow-md  px-3 py-5 text-center servi  bg-blue-300  '>
                            <div className='hover-effect-content'>
                                <div>
                                    <img src={smartphone} alt="Smartphone" style={{ margin: "auto", width: "50px", height: "50px" }} />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity App</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
                                    <p className=''>Advanced features, easy-to-operate, user-friendly, and secure trading and investing app for Android mobile</p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-sm-12 col-md-4  servi shadow-md px-3 py-5 text-center  bg-blue-300  '>
                            <div className=''>
                                <div>
                                    <img src={globe} alt="Globe" style={{ margin: "auto", width: "50px", height: "50px" }} />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity Web</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
                                    <p>Bigger Screen for Trading & Investing on the Web with Advanced charting tools, secure and intuitive interface.</p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-12 col-sm-12 col-md-4  servi  shadow-md px-3 py-5 text-center  bg-blue-300  '>
                            <div className=''>
                                <div>
                                    <img src={resposive} alt="Responsive" style={{ margin: "auto", width: "50px", height: "50px" }} />
                                </div>
                                <div>
                                    <h6 className='text-center' style={{ fontSize: "20px", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Sky Commodity EXE</h6>
                                </div>
                                <div style={{ paddingTop: "15px", fontSize: "16px", fontWeight: 500, }}>
                                    <p>The most dynamic and advanced desktop trading and investing platform for a smart investor.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Activity;
