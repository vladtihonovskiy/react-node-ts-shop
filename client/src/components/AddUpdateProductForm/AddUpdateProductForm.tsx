import React from "react";
import { Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAddUpdateProductForm } from "./useAddUpdateProductForm";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import Dropzone from "../Dropzone/Dropzone";
import IAddUpdateProductFormProps, {
  FormType,
} from "./AddUpdateProductForm.types";

export const AddUpdateProductForm: React.FC<IAddUpdateProductFormProps> = ({
  type,
}: IAddUpdateProductFormProps) => {
  const {
    registerTitle,
    registerDescription,
    registerPrice,
    errors,
    onSubmit,
    setFilesArray,
    requestError,
    isUpdating,
    defaultInputValue,
  } = useAddUpdateProductForm({ type });

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          {...registerTitle}
          error={!!errors.title}
          sx={{ width: "100%", marginBottom: 2 }}
          label="Title"
          type={"Title"}
          defaultValue={defaultInputValue?.title}
        />
        <FormErrorMessage text={errors.title?.message as unknown as string} />
        <TextField
          {...registerDescription}
          error={!!errors.description}
          sx={{ width: "100%", marginBottom: 2 }}
          label="Description"
          defaultValue={defaultInputValue?.description}
          type={"text"}
        />
        <FormErrorMessage
          text={errors.description?.message as unknown as string}
        />
        <TextField
          {...registerPrice}
          error={!!errors.price}
          sx={{ width: "100%", marginBottom: 2 }}
          label="Price"
          defaultValue={defaultInputValue?.price}
          type={"number"}
        />
        <FormErrorMessage text={errors.price?.message as unknown as string} />
        <FormErrorMessage text={requestError} />
        <Dropzone saveFiles={setFilesArray} />
        <FormErrorMessage text={errors.file?.message as unknown as string} />
        <LoadingButton
          loading={isUpdating}
          sx={{ marginTop: 2 }}
          type={"submit"}
        >
          Add
        </LoadingButton>
      </Grid>
    </form>
  );
};

export default React.memo(AddUpdateProductForm);
