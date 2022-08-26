import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import IDropzoneProps from "./Dropzone.types";
import styles from "./Dropzone.module.css";

export const Dropzone: React.FC<IDropzoneProps> = ({ saveFiles }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      maxFiles: 1,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ));

  useEffect(() => {
    if (acceptedFiles.length) {
      saveFiles(acceptedFiles);
    } else {
      saveFiles([]);
    }
  }, [acceptedFiles]);

  return (
    <div {...getRootProps({ className: styles.dropzone })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <aside>{files}</aside>
    </div>
  );
};

export default Dropzone;
