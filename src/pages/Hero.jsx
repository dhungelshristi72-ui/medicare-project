import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-[url('/bg.png')] min-h-screen bg-cover bg-center flex flex-col sm:flex-row items-center justify-start gap-10 sm:gap-20 px-6 sm:mt-4 sm:px-28 py-10 sm:py-20">
      <div className="flex flex-col gap-4 sm:w-1/2 w-full text-4xl sm:text-6xl">
        <p className="text-[#FDA4AF] text-lg mt-20 font-medium tracking-widest hover:text-[#FB7185] transition duration-300 ease-in-out">
          We are here for your care
        </p>
<div className="flex flex-col sm:mt-4 ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-bold tracking-wide">
          Best Care &
        </h1>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#E11D48] font-bold tracking-wide">
          Better Doctor.
        </h2>
</div>
        <p className="text-base sm:text-lg text-gray-700 landing-relaxed max-w-xl">
          Health is wealth, and we are committed to providing the best
          healthcare services to our patients. Our team of experienced doctors
          and medical professionals are here to ensure your well-being and
          provide you with the care you deserve.
        </p>

        <div className="flex mt-4">
          <Link to = "/appointments">
  <button className="flex items-center gap-3 bg-[#E11D48] text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg shadow-red-500/20 hover:bg-[#BE123C] hover:scale-105 transition-all duration-300">

    <span className="bg-white relative top-[-2px] text-[#E11D48] text-3xl font-bold rounded-full w-9 h-9 flex items-center justify-center cursor-pointer leading-none">
      +
    </span>

    Make an Appointment
  </button>
  </Link>
 

        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-lg text-gray-700 font-semibold tracking-wide">
            Connect With Us
          </h1>

          <div className="flex items-center gap-6 mt-2 mr-8">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E11D48]/40 text-[#E11D48] text-xl hover:bg-[#E11D48] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E11D48]/40 text-[#E11D48] text-xl hover:bg-[#E11D48] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="What'sapp"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E11D48]/40 text-[#E11D48] text-xl hover:bg-[#E11D48] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center sm:w-1/2 w-full">
        <img
          src="/doctor.png"
          alt="photo"
          className="sw-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] object-contain transition-transform duration-700 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Hero;
