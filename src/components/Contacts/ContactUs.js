import React, { useState } from "react";
import "./Contact.css";
import { MdLocationPin, MdEmail, MdCall } from "react-icons/md";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import AffiliateImg from "../assets/home-banner-bg.png";
import AboutMainSection from "../assets/about-us.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
const ContactUs = () => {
  const { handleSubmit, control, errors, reset } = useForm();
  const [formErrors, setFormErrors] = useState({});

  // const userText = {
  //   name: data.name,
  //   email: data.email,
  //   subject: data.subject,
  //   message: data.message,
  // };

  const handleResetForm = () => {
    reset({
      name: "", // Replace with the initial values for each field
      email: "",
      subject: "",
      message: "",
    });
  };

  const FormHandle = async (data) => {
    try {
      setFormErrors({});
      const response = await axios.post(
        "https://skycommodity.in/bullsPanel/api/contact-us",
        data
      );

      let { result, message, status } = response.data;

      if (result) {
        toast.success(message);

        // Reset the form and clear input fields when the response is successful
        handleResetForm();
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.data && error.response.data.errors) {
        setFormErrors(error.response.data.errors);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sky Commodity | Contact Us</title>
      </Helmet>

      <section
        id="about_hero"
        className="about_hero"
        style={{ backgroundImage: `url(${AffiliateImg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="flex justify-center items-center">
              <h1 className="text-white text-[40px] pt-3 m d:text-[60px] lg:text-[60px] xl:text-[60px] 2xltext-[60px] font-bold">
                Contact-Us
              </h1>
            </div>
            <div className="  flex justify-center items-center">
              <AnimatePresence>
                <motion.div
                  initial={{ x: -50 }}
                  animate={{ x: 10 }}
                  exit={{ x: 100 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "reverse",
                    type: "tween",
                    bounce: 0.25,
                  }}
                  className="two p-50px"
                >
                  <img
                    src={AboutMainSection}
                    alt="About.png"
                    className="img-fluid"
                  ></img>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="contact"
        style={{ backgroundColor: "#cdd3e1" }}
      >
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title text-center">
            <h2
              style={{
                paddingTop: "46px",
                color: "#059473",
                fontSize: "45px",
                fontWeight: "500",
              }}
            >
              Contact
            </h2>
            <p style={{ paddingBottom: "30px" }}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="infoo">
                <div className="address">
                  <MdLocationPin />
                  <h4>Location:</h4>
                  <p>SKY Broking Ltd., 40-41,first floor
                    visha tower Coimbatore
                    ,641001, Tamilnadu india</p>
                </div>
                {/* <div className="email">
                  <MdEmail />
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div> */}
                {/* <div className="phone">
                  <MdCall />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6586.632859283194!2d76.9521774079552!3d11.005934345004034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590251815095%3A0x7c7f146f65865076!2sSky%20Broking%20(Head%20Office)!5e0!3m2!1sen!2sin!4v1712054884053!5m2!1sen!2sin"

                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit(FormHandle)}
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="text"
                          className={`form-control ${formErrors.name ? " border-red-500 " : ""
                            }`}
                          {...field}
                        />
                      )}
                    />

                    {formErrors.name && (
                      <span className="error">{formErrors.name[0]}</span>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Your Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="email"
                          className={`form-control ${formErrors.email ? " border-red-500 " : ""
                            }`}
                          {...field}
                        />
                      )}
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email[0]}</span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        className={`form-control ${formErrors.subject ? " border-red-500 " : ""
                          }`}
                        {...field}
                      />
                    )}
                  />
                  {formErrors.subject && (
                    <span className="error">{formErrors.subject[0]}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        className={`form-control ${formErrors.message ? " border-red-500 " : ""
                          }`}
                        rows="10"
                        {...field}
                      />
                    )}
                  />
                  {formErrors.message && (
                    <span className="error">{formErrors.message[0]}</span>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
