'use client'
import React from "react";
import { useState } from "react";
import { TextField, styled, Button } from "@mui/material";

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

const EmailSetUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };
  return (
        <CustomTextField
          id="outlined-basic"
          label="Email"
          style={{margin: '5px 0'}}
          className="md:w-[350px] lg:w-[500px] w-[300px]"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={!isValidEmail}
          helperText={!isValidEmail ? "Invalid email address" : ""}
          InputLabelProps={{
            style: {
              color: isValidEmail ? "" : "#f44336", // Label color when valid or invalid
            },
          }}
          inputProps={{
            style: {
              borderColor: isValidEmail ? "#1D1D1D" : "#f44336", // Border color when valid or invalid
            },
          }}
        //   focused={isValidEmail} // Apply focused styles only when the email is valid
        />
  );
};

export default EmailSetUp;
