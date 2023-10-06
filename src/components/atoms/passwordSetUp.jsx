import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';

const CustomTextField = styled(OutlinedInput)({
  "& .MuiOutlinedInput-root": {
    color: "#000", // Text color
    "& fieldset": {
      borderColor: "#dbecf1", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#c8e2e9", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#007BFF", // Border color when focused
    },
  },
});

export default function PasswordSetUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap" }}
      style={{ width: "300px", margin: "5px 0" }}
    >
      <FormControl sx={{ width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <CustomTextField
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          style={{  color: '#000'}}
          className="md:w-[350px] lg:w-[500px] w-[300px]"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Box>
  );
}
