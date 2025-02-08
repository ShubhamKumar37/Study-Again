import React from 'react'
import { useFormContext } from 'react-hook-form'
import "../../css/allCss.css"

const TextArea = ({ label, name, css = "", rows = 4, ...rest }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            {label && <label>{label}</label>}
            <textarea
                {...register(name, { required: true })}
                rows={rows}
                {...rest}
                className={`w-full p-2 py-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow ${css}`}
            />
            {errors[name] && <p>{errors[name].message}</p>}

        </div>
    )
}

export default TextArea