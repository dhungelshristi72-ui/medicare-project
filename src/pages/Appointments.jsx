import React, { useState } from "react";

import DoctorsData from "../data/DoctorsData";

function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });
  const [success, SetSuccess] = useState("");

  const doctors = [
    {
      name: "Shristi",
      specialization: "Cardiologist",
      hospital: "Bir Hospital",
    },
    {
      name: "Prasansa",
      specialization: "Neurologist",
      hospital: "Patan Hospital",
    },
    {
      name: "Shriya",
      specialization: "Dermatologist",
      hospital: "Grande International Hospital",
    },
    { name: "Astha", specialization: "Orthopedic", hospital: "Bir Hospital" },
    {
      name: "Sooyaa",
      specialization: "Orthopedic",
      hospital: "Patan Hospital",
    },
  ];
  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "04:00 PM",
  ];
  const filteredDoctors = DoctorsData.filter(
    (doctor) =>
      doctor.location.toLowerCase() === formData.hospital.toLowerCase(),
  );
  console.log(formData.hospital);
  console.log(filteredDoctors);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ...(e.target.name === "hospital" ? { doctor: "" } : {}),
    });
    SetSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetSuccess("Your appointment has been bookd Successfully!");
  };
  return (
    <div className="min-h-screen text-white px-5 sm:px-10 lg:px-20 py-28">
      <div className="text-center mb-12">
        <p className="text-[#FB7185] ml-10 font-semibold tracking-widest uppercase">
          Your Health Appointments
        </p>

        <h1 className="text-4xl text-[#211B38] sm:text-5xl font-bold mt-3">
          Book an <span className="text-[#FB7185]">Appointment</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Find the right doctor and schedule your appointment easily. Your
          health deserves the best care.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#211B38] border border-red-900 rounded-2xl p-6 sm:p-10 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Appointment Details</h2>
        <p className="text-gray-400 mb-8">
          Fill in your information to book an appoinment.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-lg font-semibold text-[#FDA4AF]">
            patient Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your name"
                required
                className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185]"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your email"
                required
                className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185]"
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your name"
                required
                className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Select Hospital</label>
              <select
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185]"
                required
              >
                <option value="">Choose City</option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Pokhara">Pokhara</option>
                <option value="Hetauda">Hetauda</option>
                <option value="Biratnagar">Biratnagar</option>
              </select>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-[#FDA4AF] pt-4">
            Doctor Information
          </h3>
          <div>
            <label className="block mb-2 text-sm">Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              disabled={!formData.hospital}
              required
              className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185] disabled:opacity-50"
            >
              <option value="">Choose Doctor</option>
              {filteredDoctors.map((doctor, index) => (
                <option key={index} value={doctor.name}>
                  {doctor.name} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>
          <h3 className="text-lg font-semibold text-[#FDA4AF] pt-4">
            Appointment Schedule
          </h3>
          <div>
            <label className="block mb-2 text-sm">Appointment Date</label>
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185] [color-scheme:dark]"
            ></input>
          </div>
          <div>
            <label className="block mb-3 text-sm">Available Time</label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {times.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setFormData({ ...formData, time })}
                  className={`p-3 rounded-lg border transition ${
                    formData.time === time
                      ? "bg-[#E11D48] border-[#E11D48]"
                      : "bg-[#17132B] border-red-900 hover:border-[#FB7185]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <input
              type="text"
              value={formData.time}
              required
              onChange={() => {}}
              tabIndex={-1}
              className="sr-only"
              aria-label="Selected appointment time"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-[#17132B] border border-red-900 outline-none focus:border-[#FB7185]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#E11D48] hover:bg-[#C11232] py-4 rounded-lg font-semibold transition duration-300 hover:scale-[1.01]"
          >
            Confirm Appointment
          </button>

          {success && (
            <div className="bg-green-900/30 border border-green-500 text-green-300 p-4 rounded-lg text-center">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Appointments;
