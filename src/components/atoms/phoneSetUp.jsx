'use client'
import React from "react";
import { useState } from "react";
import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007BFF", // Border color when focused
    },
  },
});

const PhoneSetUp = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  return (
        <CustomTextField
          id="outlined-basic"
          label="Phone"
          style={{margin: '5px 0'}}
          className="md:w-[350px] lg:w-[500px] w-[300px]"
          variant="outlined"
          value={name}
          onChange={() => handleNameChange(event)}

        //   focused={isValidEmail} // Apply focused styles only when the email is valid
        />
  );
};

export default PhoneSetUp;
