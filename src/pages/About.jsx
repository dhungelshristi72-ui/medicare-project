import React from "react";

import {
  HeartPulse,
  Target,
  Eye,
  ShieldCheck,
  Accessibility,
  Lightbulb,
  Hospital,
  Stethoscope,
  CalendarCheck,
  MessageCircle,
  LayoutDashboard,
  Search,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
} from "lucide-react";

function About() {
  const services = [
    {
      icon: Hospital,
      title: "Hospital Discovery",
      description:
        "Explore hospitals across Nepal and find healthcare facilities based on your preferred city. Discover hospital details and available healthcare options.",
    },
    {
      icon: Stethoscope,
      title: "Doctor Discovery",
      description:
        "Find doctors according to their medical specialization, experience, and location to explore suitable healthcare professionals.",
    },
    {
      icon: CalendarCheck,
      title: "Online Appointment Booking",
      description:
        "Make the appointment process easier by selecting doctors, choosing hospitals, and submitting appointment requests.",
    },
    {
      icon: MessageCircle,
      title: "Healthcare Information Assistant",
      description:
        "Access general health information and basic guidance through an interactive chatbot interface.",
    },
    {
      icon: LayoutDashboard,
      title: "Patient Dashboard",
      description:
        "Keep track of appointment details and manage your healthcare interactions in one convenient place.",
    },
  ];

  const values = [
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Making healthcare information easier to access.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description: "Providing clear and useful platform information.",
    },
    {
      icon: Clock,
      title: "Convenience",
      description: "Making healthcare discovery simpler.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using technology to improve healthcare experiences.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Explore Hospitals",
      description: "Search hospitals based on your preferred city.",
    },
    {
      number: "02",
      title: "Find Your Doctor",
      description: "Browse doctors according to their specialization.",
    },
    {
      number: "03",
      title: "Book Appointment",
      description:
        "Select a suitable doctor and submit your appointment request.",
    },
    {
      number: "04",
      title: "Manage Healthcare",
      description:
        "Access your appointment information through your dashboard.",
    },
  ];

  return (
    <div className="bg-white text-[#17132B] mt-10 overflow-hidden">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#E11D48] font-semibold tracking-widest mb-4">
            ABOUT MEDICARE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Making Healthcare
            <span className="text-[#E11D48]"> Accessible </span>
            for Everyone.
          </h1>

          <p className="text-gray-400 mt-6 leading-8">
            MediCare is a smart healthcare platform designed to make finding
            healthcare services easier, faster, and more convenient. We connect
            patients with hospitals, doctors, and essential healthcare
            information through one simple platform.
          </p>

          <p className="text-gray-400 mt-4 leading-7">
            Our goal is to simplify the healthcare journey by bringing important
            healthcare services together in one place.
          </p>

          <a
            href="/hospitals"
            className="inline-flex items-center gap-2 mt-8 bg-[#E11D48]
            hover:bg-[#C11232] px-7 py-3 rounded-lg font-semibold transition"
          >
            Explore Hospitals <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#E11D48] blur-[120px] opacity-20"></div>

          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.gQ-HyKy3djvkatfa19-0DgHaEz%3Fpid%3DApi&f=1&ipt=1230bd0e6f7cbd31838721780264a78c1f235503bf93a77984da21b610b64615&ipo=images"
            alt="Healthcare professional"
            className="relative w-full max-h-[480px] object-contain"
          />

          <div
            className="absolute bottom-5 left-0 bg-white
            border border-slate-200 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <HeartPulse className="text-[#E11D48]" size={30} />
              <div>
                <p className="font-bold text-[#17132B]">Your Health</p>
                <p className="text-sm text-slate-500">Our Priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.EAYqJs7HJob0KObSuIf8GAHaG9%3Fpid%3DApi&f=1&ipt=9be151f2229d3b19e05fd50de07477642669c120ca15a780321c9a773940d85a&ipo=images"
              alt="Healthcare environment"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>

          <div>
            <p className="text-[#E11D48] font-semibold mb-3">WHO WE ARE</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Healthcare Made Simple Through Technology
            </h2>

            <p className="text-slate-600 leading-8 mb-4">
              MediCare is a digital healthcare platform created to bring
              patients and healthcare services closer together. We understand
              that finding the right hospital, choosing a qualified doctor, and
              managing appointments can sometimes be challenging.
            </p>

            <p className="text-slate-500 leading-8">
              Through a user-friendly interface, MediCare helps users explore
              hospitals across Nepal, discover doctors by specialization, book
              appointments, and access helpful health information.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE CREATED MEDICARE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#E11D48] font-semibold mb-3">OUR PURPOSE</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why We Created MediCare
          </h2>

          <p className="text-slate-500 leading-8">
            Finding healthcare information should not be complicated. Patients
            may struggle to identify suitable hospitals, find doctors, and
            understand available medical services. MediCare aims to make this
            process easier through a centralized digital platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            "Find hospitals based on city and location.",
            "Discover doctors by medical specialization.",
            "Explore hospital and doctor information.",
            "Submit appointment requests conveniently.",
            "Access general health information.",
            "Manage healthcare interactions in one place.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-purple-500/20
              p-6 rounded-xl flex gap-3 items-start
              hover:border-[#E11D48] transition"
            >
              <CheckCircle className="text-[#E11D48] shrink-0" size={22} />
              <p className="text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E11D48] font-semibold mb-3">OUR SERVICES</p>

            <h2 className="text-3xl md:text-4xl font-bold">
              What MediCare Offers
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Everything you need to explore healthcare services through one
              convenient digital platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200
                  p-7 rounded-2xl hover:-translate-y-2
                  hover:border-[#E11D48] transition duration-300"
                >
                  <div
                    className="bg-rose-50 w-14 h-14
                    rounded-xl flex items-center justify-center mb-6"
                  >
                    <Icon className="text-[#E11D48]" size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                  <p className="text-slate-500 leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

     
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#E11D48] font-semibold mb-3">SIMPLE PROCESS</p>

            <h2 className="text-3xl md:text-4xl font-bold">
              How MediCare Works
            </h2>

            <p className="text-slate-500 mt-4">
              Start your healthcare journey in four simple steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-xl
                border border-slate-200 relative"
              >
                <span className="text-4xl font-bold text-[#E11D48]">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold mt-5 mb-3">{step.title}</h3>

                <p className="text-slate-500 leading-7 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div
          className="max-w-5xl mx-auto bg-gradient-to-r
          from-[#8B123D] to-[#4A245D] rounded-3xl
          text-center p-10 md:p-16"
        >
          <HeartPulse size={45} className="mx-auto mb-6 text-white" />

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Your Health Deserves Better Care.
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto leading-8">
            Discover hospitals, connect with doctors, and make your healthcare
            journey simpler with MediCare.
          </p>

          <a
            href="/hospitals"
            className="inline-flex items-center gap-2 mt-8
            bg-white text-[#C11232] px-8 py-3 rounded-lg
            font-bold hover:bg-gray-100 transition"
          >
            Explore Hospitals <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
