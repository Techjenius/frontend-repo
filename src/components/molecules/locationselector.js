import React, { useState } from "react";
import { CountryList } from "react-select-country-list";

const LocationSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState(""); // Reset selected state when country changes
  };

  return (
    <div>
      <p>Country and State Selector</p>
      <CountryList
        onChange={(country) => handleCountryChange(country)}
        value={selectedCountry}
        label="Select Country"
      />
      {selectedCountry && <p>Selected Country: {selectedCountry.label}</p>}
      {selectedCountry && selectedState && (
        <p>Selected State: {selectedState.label}</p>
      )}
    </div>
  );
};
export default LocationSelector;
