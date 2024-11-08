import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import Stepone from "./Components/stepone"
import Steptwo from "./Components/steptwo"
import Stepthree from "./Components/stepthree"


const validationSchemas = [
    Yup.object().shape({
        step1: Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phoneNumber: Yup.string()
                .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
                .min(10, 'Phone Number must be at least 10 digits')
                .required('Phone Number is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        })
    }),
    Yup.object().shape({
        step2: Yup.object().shape({
            brandName: Yup.string().required('Brand Name is required'),
            brandType: Yup.string().required('Brand Type is required'),
            streetAddress: Yup.string().required('Street Address is required'),
            city: Yup.string().required('City is required'),
            zipCode: Yup.string()
                .matches(/^[0-9]{6}$/, 'Zip Code must be exactly 6 digits')
                .required('Zip Code is required'),
            taxID: Yup.string()
                .matches(/^[0-9]{9}$/, 'Tax ID must be exactly 9 digits')
                .required('Tax ID is required'),
        })
    }),
];


const MultiStepFormSecond = () => {

    const navigate = useNavigate()

    const initialStep = JSON.parse(localStorage.getItem("currentStepSecondForm")) || 0;
    const [currentStep, setCurrentStep] = useState(initialStep);


    const initialValues = JSON.parse(localStorage.getItem("secondFormData")) || {
        step1: {
            firstName: "", lastName: "", email: "", phoneNumber: "", password: "", confirmPassword: ""
        },
        step2: { brandName: "", brandType: "", streetAddress: "", city: "", zipCode: "", taxID: "" },
        step2: { about: "" },
    };

    useEffect(() => {
        localStorage.setItem("currentStepSecondForm", JSON.stringify(currentStep));
    }, [currentStep]);

    const handleSave = (values) => {
        localStorage.setItem("secondFormData", JSON.stringify(values));
    };


    const handleBack = (setErrors) => {
        setCurrentStep(currentStep - 1);
        setErrors({})
    };

    const handleFinalSubmit = (values, { resetForm }) => {
        // Get the existing submissions from localStorage
        const submissions = JSON.parse(localStorage.getItem("secondFormSubmissions")) || [];

        // Add the current submission to the array
        const updatedSubmissions = [...submissions, values];

        // Store the updated submissions array in localStorage
        localStorage.setItem("secondFormSubmissions", JSON.stringify(updatedSubmissions));

        // Remove current form data and step from localStorage
        localStorage.removeItem("secondFormData");
        localStorage.removeItem("currentStepSecondForm");

        // Show success message
        toast("Form submitted successfully", { duration: 2000 });
        resetForm()
        setCurrentStep(0);
    };

    return (
        <>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[currentStep]}
                onSubmit={handleFinalSubmit}
                enableReinitialize
            >
                {({ values, isValid, errors, validateForm, setErrors }) => (
                    <Form>
                        <div className="w-full flex items-center justify-center h-auto">
                            <div className="w-full bg-white rounded-lg shadow-lg">
                                <div className="mx-auto w-full">
                                    <div className="flex justify-between items-center bg-gray-200 mb-8 rounded-t-lg">
                                        <div className={`py-3 flex justify-center items-center w-1/3 text-white ${currentStep === 0 ? "bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] rounded-r-full" : "text-gray-500 bg-blue-300"}`}>
                                            <span className={`w-5 h-5 mr-2 flex justify-center items-center rounded-full text-white ${currentStep >= 0 ? "bg-white text-blue-400" : "bg-gray-500"}`}>1</span>
                                            <span className="text-xs sm:text-sm md:text-lg font-semibold">Profile</span>
                                        </div>

                                        <div className={`py-3 flex justify-center items-center w-1/3 ${currentStep === 1 ? "bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] text-white rounded-r-full" : currentStep > 1 ? "bg-blue-300 text-white" : "text-gray-500"}`}>

                                            <span className={`w-5 h-5 mr-2 flex justify-center items-center rounded-full text-white ${currentStep >= 1 ? "bg-white text-blue-400" : "bg-gray-500"}`}>2</span>
                                            <span className="text-xs sm:text-sm md:text-lg font-semibold">Business Information</span>

                                        </div>

                                        <div className={`py-3 flex justify-center items-center w-1/3 ${currentStep === 2 ? "bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] text-white" : "text-gray-500"}`}>
                                            <span className={`w-5 h-5 mr-2 flex justify-center items-center rounded-full text-white ${currentStep === 2 ? "bg-white text-blue-400" : "bg-gray-500"}`}>3</span>
                                            <span className="text-xs sm:text-sm md:text-lg font-semibold">Additional Users</span>
                                        </div>
                                    </div>

                                    {currentStep === 0 && <Stepone errors={errors} />}
                                    {currentStep === 1 && <Steptwo errors={errors} values={values} />}
                                    {currentStep === 2 && <Stepthree errors={errors} values={values} />}
                                </div >
                            </div >
                        </div >
                        <div className="flex justify-between items-center w-full my-8">
                            <button type="button" className='text-blue-500 hover:underline' onClick={() => navigate("/")}>
                                {"< Back to Login"}
                            </button>
                            <div>
                                {currentStep > 0 && <button type="button" className='mr-3 text-blue-500 border border-blue-500 px-6 py-2 rounded-md hover:bg-purple-600"' onClick={() => handleBack(setErrors)}>
                                    {"< Previous Step"}
                                </button>}
                                {currentStep < 2 && (
                                    <button
                                        type="button"
                                        className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
                                        onClick={() => {
                                            validateForm().then((errors) => {
                                                if (Object.keys(errors).length === 0) {
                                                    handleSave(values);
                                                    setCurrentStep(currentStep + 1);
                                                }
                                            });
                                        }}
                                        disabled={!isValid}
                                    >
                                        {"Next Step >"}
                                    </button>
                                )}
                                {currentStep === 2 && (
                                    <button type="submit" className="p-2 bg-blue-500  w-16 rounded text-white hover:bg-blue-600 transition" onClick={() => handleSave(values)} disabled={!isValid}>
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik >

        </>
    );
};

export default MultiStepFormSecond;