import React from "react";
import { useFormContext } from "react-hook-form";
import "../../css/allCss.css";

const TextArea = ({
  label,
  name,
  divCss = "",
  css = "",
  rows = 4,
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
      <textarea
        {...register(name, { required: required })}
        rows={rows}
        {...rest}
        className={`input-field-shadow w-full rounded-lg border-none bg-richblack-800 p-2 py-2 focus:outline-none ${css}`}
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default TextArea;
