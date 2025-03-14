import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill styles
import "../../css/allCss.css";
import { useFormContext, Controller } from "react-hook-form";

const RichTextEditor = ({ name, label = "", divCss = "", required = true }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div className={`${divCss} flex !text-white flex-col space-y-2`}>
            {label && <label className="mb-1 text-lg">{label}</label>}
            <Controller
                name={name}
                control={control}
                rules={{ required: required }}
                render={({ field }) => (
                    <ReactQuill
                        {...field}
                        theme="snow"
                        className="bg-richblack-800 input-field-shadow text-white rounded-lg min-h-[100px]" // Fixed height issue
                    />
                )}
            />
            {errors[name] && (
                <p className="text-[13px] text-[#d72222]">
                    *This field is required
                </p>
            )}
        </div>
    );
};

export default RichTextEditor;
