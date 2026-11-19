import React from "react";
import Hero from "./Hero";
import Hospitals from "./Hospitals"
import Doctors from "./Doctors"
import Appointments from "./Appointments";
import Login from "./Login"
import About from "./About";


function Home() {
  return (
    <div>
      <Hero />
      <Hospitals/>
      <Doctors/>
      <Appointments/>
      <About/>
      <Login/>
      
    </div>
  );
}

export default Home;
