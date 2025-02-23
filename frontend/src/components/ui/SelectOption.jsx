import React from "react";
import { useFormContext } from "react-hook-form";
import "../../css/allCss.css";

const SelectOption = ({
  label,
  name,
  divCss = "",
  css = "",
  options = [],
  required = true,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${divCss}`}>
      {label && <label>{label}</label>}
      <select
        {...register(name, { required: required })}
        {...rest}
        className={`input-field-shadow w-full rounded-lg border-none bg-richblack-800 p-2 py-2 focus:outline-none ${css}`}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value} className={``}>
            {item.label}
          </option>
        ))}
      </select>
      {errors[name] && <p className='text-red-500'>{errors[name].message}</p>}
    </div>
  );
};

export default SelectOption;
