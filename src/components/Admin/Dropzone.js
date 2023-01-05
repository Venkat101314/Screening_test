import React from "react";
import { useDropzone } from "react-dropzone";
import PersonIcon from "../Merchant/Images/upload.png";
import { Button } from "@mui/material";

export default function Accept() {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>File Selected : {file.path}</li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      <ul>
        {errors.map((e) => (
          <li key={e.code} style={{ color: "red" }}>
            {e.message}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          padding: "2%",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius:"15px",
            padding: "2%",
            width:100,
            height:100
          }}><img style={{width:"100%",height:"100%"}} src ={PersonIcon}></img>
        </div>
        <div className="ms-3">
        <aside className="mt-2">
        <ul>{acceptedFileItems}</ul>
        <ul>{fileRejectionItems}</ul>
      </aside>
          <p>File types: PNG, JPG, JPEG</p>
          <em>(Maximum file size: 2 MB)</em>
          <Button className="mt-2" variant="contained"   sx={{ borderRadius: "22px", paddingBlock:"8px", lineHeight:"1rem" }} type="file">
            UPLOAD <input {...getInputProps()} />
          </Button>
        </div>
      </div>
      
    </section>
  );
}
