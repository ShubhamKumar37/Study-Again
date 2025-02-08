import React from 'react'
import { useFormContext } from 'react-hook-form'
import "../../css/allCss.css"

const SelectOption = ({ label, name, css = "", options = [], ...rest }) => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            {label && <label>{label}</label>}
            <select
                {...register(name, { required: true })}
                {...rest}
                className={`w-full p-2 py-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow ${css}`}
            >
                {
                    options.map((item, index) => {
                        return (
                            <option
                                key={index}
                                value={item.value}
                            >{item.name}</option>
                        )
                    })
                }
            </select>
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    )
}

export default SelectOption