import { useForm } from "react-hook-form";
import { useCallback } from "react";
// import { useLazyAuthUserQuery } from "../../../../redux/user/userApi.api";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [authUser, {error: requestError }] = useLazyAuthUserQuery();

  const onFormSubmitCB = useCallback(({ email, password }: any) => {
    // authUser({email, password});
  }, []);

  return {
    registerEmail: {
      ...register("email", {
        required: "Required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid Email",
        },
      }),
    },
    registerPassword: {
      ...register("password", {
        required: "Required",
        minLength: {
          value: 4,
          message: "At least 4 digits",
        },
      }),
    },
    errors,
    onSubmit: handleSubmit(onFormSubmitCB),
    // requestError: (requestError as Error)?.message
    requestError: "",
  };
};
