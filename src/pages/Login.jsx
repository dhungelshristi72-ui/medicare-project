import React, { useState } from "react";

function Login() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handlechange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    setSuccess("");
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Login:", JSON.stringify(formdata));

    setSuccess("Message is sent successfully");

    setFormData({
      username: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#FFF1F2] min-h-screen flex flex-col items-center justify-center px-5 py-16">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-xl flex flex-col bg-[#17132B] p-4 gap-4 border border-[#FDA4AF] rounded-2xl p-6 shadow-lg shadow-red-500/5 hover:shadow-red-500/20 sm:p-10"
      >
        <h1 className="text-center font-bold text-2xl text-[#E11D48] mb-4">
          Login Form
        </h1>

        <label className="text-white font-medium">Username:</label>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={handlechange}
          placeholder="Enter your name"
          required
          className="bg-[#FFF1F2] text-[#881337] placeholder:text-[#FB7185] border border-[#FDA4AF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
        />

        <label className="text-white font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
          placeholder="Enter your email"
          required
          className="bg-[#FFF1F2] text-[#881337] placeholder:text-[#FB7185] border border-[#FDA4AF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
        />

        <label className="text-white font-medium">Subject:</label>
        <input
          type="subject"
          name="subject"
          value={formdata.subject}
          onChange={handlechange}
          placeholder="Subject"
          required
          className="bg-[#FFF1F2] text-[#881337] placeholder:text-[#FB7185] border border-[#FDA4AF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
        />
        <label className="text-white font-medium">Message:</label>
        <textarea
          name="message"
          value={formdata.message}
          onChange={handlechange}
          placeholder="Your message"
          required
          className="bg-[#FFF1F2] text-[#881337] placeholder:text-[#FB7185] border border-[#FDA4AF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
        ></textarea>

        <button
          className="bg-[#E11D48] hover:bg-[#BE123C] text-white border border-[#E11D48] py-3 rounded-xl cursor-pointer shadow-lg shadow-red-500/5 hover:shadow-red-500/20 transition-all duration-300 px-20 "
          type="submit"
        >
          Send Message
        </button>
      </form>
      {success && <p className="text-green-500 text-center mt-2">{success}</p>}
    </div>
  );
}

export default Login;