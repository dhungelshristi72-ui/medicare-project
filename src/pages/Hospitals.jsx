import React, { useState } from "react";
import { Search } from "lucide-react";

import HospitalsData from "../data/HospitalsData";
import Cities from "../data/Cities";


function Hospitals() {

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("city") || "";
  //   const handleCitySelect = (city) => {
  //     setSearchParams({ city: city});
  //   };
    


const [selectedCity, setSelectedCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  

  const filteredCities = Cities.filter((city) =>
    city.toLowerCase().includes(searchCity.toLowerCase()),
  );

  const filteredHospitals = HospitalsData.filter(
    (hospital) => hospital.location === selectedCity,
  );

  return (
    <div className="bg-white min-h-screen flex flex-col gap-6 px-4 py-24">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-black font-bold tracking-wide">
          Explore Hospitals
        </h1>

        <span className="text-3xl sm:text-5xl lg:text-6xl text-red-500 font-bold tracking-wide">
          Across Nepal
        </span>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Select a city to discover hospitals and healthcare facilities near
          you.
        </p>

        <div
          className="flex items-center gap-3 w-full max-w-xl
          border border-gray-300 rounded-xl px-4 py-3
          shadow-sm focus-within:border-[#FB7185]
          focus-within:ring-2 focus-within:ring-[#FB7185]/20
          transition-all duration-300"
        >
          <Search size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search city name..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="w-full outline-none text-gray-700 bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 mt-8 text-center">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full text-sm sm:text-base font-semibold">
          {filteredCities.map((city) => (
            <li
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`cursor-pointer border p-3 rounded-xl text-center transition-all duration-300
                ${
                  selectedCity === city
                    ? "bg-[#FB7185] text-white border-[#FB7185]"
                    : "bg-[#241D3B] text-white border-[#8B5CF6]/20 hover:border-[#8B5CF6] hover:bg-red-500"
                }`}
            >
              {city}
            </li>
          ))}
        </ul>

        {selectedCity && (
          <div className="w-full mt-10">
            <h2 className="text-3xl font-bold text-[#241D3B] mb-8">
              Hospitals in {selectedCity}
            </h2>

            {filteredHospitals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 text-left"
                  >
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-[#241D3B]">
                        {hospital.name}
                      </h3>

                      <p className="text-gray-500 mt-2">{hospital.Address}</p>

                      <p className="text-gray-600 mt-2">
                        {hospital.description}
                      </p>

                      <p className="text-sm font-semibold text-[#FB7185] mt-3">
                        {hospital.Type} Hospital
                      </p>

                      <p className="text-gray-600 mt-2">
                        Contact: {hospital.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-lg">
                No hospitals available in {selectedCity} yet.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hospitals;
