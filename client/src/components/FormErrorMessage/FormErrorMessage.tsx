import React from "react";
import IFormErrorMessageProps from "./FormErrorMessage.types";
import styles from "./FormErrorMessage.module.css";

const FormErrorMessage: React.FC<IFormErrorMessageProps> = ({
  text,
}: IFormErrorMessageProps) => {
  if (text) {
    return <p className={styles.errorMessage}>{text}</p>;
  }
  return null;
};

export default FormErrorMessage;
