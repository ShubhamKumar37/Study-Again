import React from "react";
import { Input, SelectOption } from "../index.js";
import countryData from "../../data/countrycode.json";

const MobileNumberInput = ({ required = true }) => {
  return (
    <div className='flex flex-row items-center gap-3'>
      <SelectOption
        name={"countryCode"}
        label={
          <>
            <div className='mb-1 text-sm'>
              Phone Number <sup className='text-[#F5004F]'>*</sup>
            </div>
          </>
        }
        options={(() =>
          countryData.map((item) => {
            return {
              value: item.code,
              label: item.country,
            };
          }))()}
        divCss='w-[25%]'
      />
      <Input
        label={<p>Here </p>}
        name={"contactNumber"}
        type={"tel"}
        placeholder={"Enter your mobile number"}
        divCss='w-[75%]'
        required={required}
      />
    </div>
  );
};

export default MobileNumberInput;
