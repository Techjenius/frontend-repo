import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="bg-slate-300 px-4 py-4 rounded-md flex flex-col items-center justify-center mt-4 cursor-pointer">
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        onChange={handleFileChange}
        className="text-gray-700 self-center bg-transparent border-none"
      />
      <label htmlFor="file-input">
        <IconButton color="primary" aria-label="upload file" component="span">
          <Add />
        </IconButton>
      </label>
      {selectedFile && <h4 className="text-slate-500">{selectedFile.name}</h4>}
    </div>
  );
};

export default FileUpload;
