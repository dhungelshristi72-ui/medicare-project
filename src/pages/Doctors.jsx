import { MapPin, Search, Stethoscope } from "lucide-react";
import React from "react";
import { useState } from "react";
import DoctorsData from "../data/DoctorsData";

function Doctors() {
  const [searchDoctor, setSearchDoctor] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  const filteredDoctors = DoctorsData.filter((doctor) => {
    return (
      (doctor.name.toLowerCase().includes(searchDoctor.toLowerCase()) ||
        doctor.specialization
          .toLowerCase()
          .includes(searchDoctor.toLowerCase()) ||
        doctor.condition.toLowerCase().includes(searchDoctor.toLowerCase())) &&
      doctor.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
  });

  return (
    <div className="bg-[#17132B] min-h-screen flex flex-col gap-6 px-4 py-24 text-center">
      <p className="text-gray-600 text-sm sm:text-base font-semibold text-center mb-2">
        8 million+ physician Ratings & Reviews
      </p>
      <h2 className="text-4xl font-bold text-center text-red-500 mb-4">
        Find Doctors Near You
      </h2>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-5 w-full md:w-1/2">
          <Stethoscope size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Doctor or Condition..."
            value={searchDoctor}
            onChange={(e) => setSearchDoctor(e.target.value)}
            className="w-full outline-none text-gray-700 bg-transparent"
          />
        </div>
        <div className="flex items-center gap-3 px-4 py-5 w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-300">
          <MapPin size={22} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full outline-none text-gray-700 bg-transparent"
          />
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white border rounded-lg  font-semibold px-8 py-5 w-full md:w-auto md:flex-1 transition"
        >
          <Search size={21} />
          SEARCH
        </button>
      </div>
      <div>
        {[
          "Cardiologist",
          "Dermatologist",
          "Gynecologist",
          "Neurologist",
          "Pediatrician",
          "Surgeon",
          "Orthopedic",
          "Oncologist",
          "Urologist",
        ].map((item) => (
          <button
            key={item}
            onClick={() => {
              setSearchDoctor(item);
              handleSearch(true);
            }}
            className="inline-block bg-gray-200 text-gray-700 px-4 py-4 rounded-full m-2"
          >
            {item}
          </button>
        ))}
      </div>
      {searchClicked && filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-gray-100 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="text-gray-600">{doctor.location}</p>
              <p className="text-gray-600">{doctor.experience}</p>
            </div>
          ))}
        </div>
      ) : (
        searchClicked && (
          <p className="text-gray-500 text-center py-8">
            No doctors found matching your criteria.
          </p>
        )
      )}
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.CcPQfmKsPSZ4Z_UbsuegygHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=ddfb6a269f1e8988c750d05dee7ac05d556d56b9a7556f559e221f64efb1ad66&ipo=images"
        alt="doctor"
        className="w-full h-[600px] object-cover rounded-3xl shadow-xl shadow-rose-100/60 hover:scale-105 transition-all duration-500"
      ></img>
    </div>
  );
}

export default Doctors;
