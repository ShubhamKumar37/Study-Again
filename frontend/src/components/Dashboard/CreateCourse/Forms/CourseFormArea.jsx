import React from 'react'
import StepperProgress from './CustomStepper'
import { useDispatch, useSelector } from "react-redux";
import YellowBtn from '../../../ui/YellowBtn';
import { nextStep, prevStep } from '../../../../redux/slices';
import CourseForm1 from './CourseForm1';

const CourseFormArea = () => {

    const dispatch = useDispatch();
    const ActiveStep = useSelector((state) => state.courseStep.step);
    console.log("This is the active step right now = ", ActiveStep);



    return (
        <div className='flex flex-col w-full'>
            <div className='w-[80%] mx-auto'><StepperProgress ActiveStep={ActiveStep} /></div>

            <div className='mt-10'>
                {ActiveStep === 0 && <CourseForm1 />}
            </div>
        </div>
    )
}

export default CourseFormArea