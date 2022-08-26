import React from "react";
import { CircularProgress } from "@mui/material";
import ILoaderHOCProps from "./LoaderHOC.types";

export const LoaderHOC: React.FC<ILoaderHOCProps> = ({
  isLoading,
  children,
}: ILoaderHOCProps) => {
  if (isLoading) {
    return (
      <CircularProgress
        sx={{ position: "absolute", textAlign: "center", left: "50%" }}
      />
    );
  }
  return children;
};

export default LoaderHOC;
