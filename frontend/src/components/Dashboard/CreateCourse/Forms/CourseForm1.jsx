import React from 'react'
import ChipInput from '../../../ui/ChipInput.jsx'
import { FormProvider, useForm } from 'react-hook-form'
import { nextStep, prevStep } from '../../../../redux/slices';
import { useDispatch, useSelector } from 'react-redux';
import YellowBtn from '../../../ui/YellowBtn';
import { Input, RichTextEditor } from '../../../index.js';

const CourseForm1 = () => {
    const methods = useForm();
    const { setValue, handleSubmit } = methods;
    const dispatch = useDispatch();
    const ActiveStep = useSelector((state) => state.courseStep.step);

    const createCourseHandler = async (data) => {
        console.log(data);
    }



    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(createCourseHandler)}
                    className='flex flex-col gap-[1rem]'
                >
                    <Input
                        type={"text"}
                        name={"title"}
                        placeholder={"title"}
                        label={"Enter course title"}
                    />
                    <Input
                        type={"number"}
                        name={"price"}
                        placeholder={"price"}
                        label={"Enter course price"}
                    />

                    <Input
                        type={"file"}
                        name={"thumbnail"}
                        placeholder={"thubmail"}
                        label={"Enter course thumbnail"}
                    />

                    <RichTextEditor
                        name={"description"}
                        label={"Enter course description"}
                        required
                    />
                    <ChipInput setValue={setValue} name='tags' label={"tags"} />

                    <RichTextEditor
                        name={"whatWillYouLearn"}
                        label={"Enter what you will learn"}
                        required
                    />


                    <ChipInput setValue={setValue} name='Instructions' label={"Instructions"} />

                    <div className='flex justify-between'>
                        {ActiveStep !== 0 &&
                            <div onClick={() => dispatch(prevStep())}>
                                <YellowBtn text={"Prev"} />
                            </div>
                        }
                        {ActiveStep !== 3 &&
                            <div >
                                <YellowBtn text={"Save & Next"} />
                            </div>
                        }
                    </div>
                </form>


            </FormProvider>
        </div>
    )
}

export default CourseForm1