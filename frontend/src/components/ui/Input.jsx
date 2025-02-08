import React from 'react'
import "../../css/allCss.css"
import { useFormContext } from "react-hook-form";

const Input = ({ name, label, css = "", type = "text", ...rest }) => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            {label && <label>{label}</label>}
            <input
                {...register(name, { required: true })}
                type={type}
                {...rest}
                className={`w-full p-2 py-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow ${css}`}
            />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    )
}

export default Input