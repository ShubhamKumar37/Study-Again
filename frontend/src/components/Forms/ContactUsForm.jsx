import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input, MobileNumberInput, YellowBtn } from "../index.js";

const ContactUsForm = () => {
  const methods = useForm();
  const submitContactForm = (data) => {
    console.log(data);
  };

  return (
    <div className='mx-auto flex max-w-lg flex-col gap-3 py-10 text-white'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitContactForm)}
          className='space-y-6'
        >
          <div className='flex flex-col gap-6 md:flex-row'>
            {/* First Name Field */}
            <Input
              label={"First Name"}
              type={"text"}
              name={"firstName"}
              placeholder={"Enter first name"}
            />
            <Input
              label={"Last Name"}
              type={"text"}
              placeholder={"Enter last name"}
              name={"lastName"}
            />
          </div>

          {/* Email Field */}
          <Input
            label={"Email Address"}
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
          />

          {/* Phone Number Field */}
          <MobileNumberInput />

          <YellowBtn text={"Send message"} />
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactUsForm;
