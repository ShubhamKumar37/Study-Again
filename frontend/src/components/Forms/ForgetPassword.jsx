import React from "react";
import { Input, YellowBtn } from "../index.js";
import { FormProvider, useForm } from "react-hook-form";
import { userAuthApis } from "../../services/apis.js";
import { toastHandler } from "../../utils/toastHandler.js";
import { apiCall } from "../../services/apiConnector.js";

const ForgetPassword = () => {
  const methods = useForm();
  const submitHandler = async (data) => {
    const res = apiCall("put", userAuthApis.PASSWORD_TOKEN_USER, data);
    await toastHandler(
      res,
      "Sending Link...",
      "Link send successfully (check inbox or spam folder)",
      "Fail to send Link"
    );
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <Input
            type='email'
            name='email'
            placeholder='Enter your email'
            label='Email'
          />

          <YellowBtn text='Submit' />
        </form>
      </FormProvider>
    </div>
  );
};

export default ForgetPassword;
