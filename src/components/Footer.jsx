
import React from 'react'
import { HeartPlus, ArrowUpRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {

  const links = [
    { name: "Home", path: "/" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointments", path: "/appointments" },
    { name: "About Us", path: "/about" },
    { name: "Login", path: "/login" },
  ]

  return (
    <footer className="bg-[#100D20] text-gray-400 border-t border-red-500/20">

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="bg-red-500/15 p-2 rounded-xl">
                <HeartPlus size={28} className="text-[#FB7185]" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Medi<span className="text-[#FB7185]">Care</span>
              </h2>
            </Link>

            <p className="text-sm leading-7 mt-5 max-w-sm">
              Your health, our priority. Making healthcare
              accessible and convenient for everyone.
              Discover hospitals, connect with doctors,
              and take care of your health with MediCare.
            </p>

           
            <div className="flex items-center gap-3 mt-6">

              <a href="#" aria-label="Facebook"
                className="bg-[#211B38] p-3 rounded-lg text-gray-300
                hover:bg-red-500 hover:text-white transition duration-300">
                <FaFacebook size={18} />
              </a>

              <a href="#" aria-label="Instagram"
                className="bg-[#211B38] p-3 rounded-lg text-gray-300
                hover:bg-red-500 hover:text-white transition duration-300">
                <FaInstagram size={18} />
              </a>

              <a href="#" aria-label="WhatsApp"
                className="bg-[#211B38] p-3 rounded-lg text-gray-300
                hover:bg-red-500 hover:text-white transition duration-300">
                <FaWhatsapp size={18} />
              </a>

            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center justify-between max-w-[180px]
                  text-sm hover:text-[#FB7185] transition duration-300 group"
                >
                  {link.name}
                  <ArrowUpRight size={15}
                    className="opacity-0 group-hover:opacity-100
                    group-hover:translate-x-1 transition duration-300" />
                </Link>
              ))}

            </div>
          </div>

         
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Get In Touch
            </h3>

            <p className="text-sm leading-7 mb-5">
              Have questions or need help? We are here to make
              your healthcare experience easier.
            </p>

            <div className="bg-[#211B38] border border-purple-500/20
              rounded-xl p-5">

              <p className="text-white font-medium mb-2">
                Need Healthcare Assistance?
              </p>

              <Link to="/about"
                className="text-[#FB7185] text-sm font-semibold
                inline-flex items-center gap-2 hover:text-white transition">
                Learn More <ArrowUpRight size={16} />
              </Link>

            </div>
          </div>

        </div>

        
        <div className="border-t border-red-500/20 mt-12 pt-7
          flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} MediCare. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Made with <span className="text-red-500">♥</span> for Better Healthcare
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
