import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import history from "../../router/history";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../redux/products/products.api";
import { FormType, ProductFormType } from "./AddUpdateProductForm.types";

const FactoryRequest = {
  [FormType.Add]: useAddProductMutation,
  [FormType.Update]: useUpdateProductMutation,
};

export const useAddUpdateProductForm = ({
  type,
}: {
  type: ProductFormType;
}) => {
  const currentId = useParams()?.id;
  console.log("currentId", currentId);
  const [
    addProduct, // This is the mutation trigger
    { isLoading: isUpdating, isSuccess: isFileSavedSuccessfully }, // This is the destructured mutation result
  ] = FactoryRequest[type]();

  const { data: allProducts } = useGetAllProductsQuery();
  const defaultInputValue =
    allProducts && currentId
      ? allProducts.find((item) => item._id === currentId)
      : undefined;
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [filesArray, setFilesArray] = useState<File[]>([]);

  const onFormSubmitCB = useCallback(
    ({ title, description, price }: any) => {
      if (!filesArray.length) {
        return setError("file", { message: "File is required" });
      }
      if (type === FormType.Add) {
        addProduct({ title, description, price, file: filesArray });
      }
      if (type === FormType.Update) {
        addProduct({
          title,
          description,
          price,
          file: filesArray,
          id: currentId,
        });
      }
    },
    [filesArray, clearErrors, setError, type]
  );

  const onSetFilesArray = (file: File[]) => {
    if (file.length) {
      clearErrors();
    }
    setFilesArray(file);
  };

  useEffect(() => {
    if (isFileSavedSuccessfully) {
      history.push("/");
    }
  }, [isFileSavedSuccessfully]);

  return {
    registerTitle: {
      ...register("title", {
        required: "Required",
        minLength: {
          value: 5,
          message: "At least 5 digits",
        },
      }),
    },
    registerDescription: {
      ...register("description", {
        required: "Required",
        minLength: {
          value: 10,
          message: "At least 10 digits",
        },
      }),
    },
    registerPrice: {
      ...register("price", {
        required: "Required",
        valueAsNumber: true,
        min: 0.1,
      }),
    },
    errors,
    onSubmit: handleSubmit(onFormSubmitCB),
    requestError: "",
    setFilesArray: onSetFilesArray,
    filesArray,
    isFileSavedSuccessfully,
    isUpdating,
    defaultInputValue,
  };
};
