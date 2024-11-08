import React, { useState, useEffect } from 'react';
import Stepone from './Components/stepone';
import Steptwo from './Components/steptwo';
import Stepthree from './Components/stepthree';
import Steptfour from './Components/steptfour';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import toast from 'react-hot-toast';

const validationSchemas = [
    Yup.object().shape({
        step1: Yup.object({
            name: Yup.string().required("Name is required"),
            clientname: Yup.string().required("Select Client Name"),
            startDate: Yup.date().required("Start Date is required"),
            endDate: Yup.date().required("End Date is required"),
            notes: Yup.string().required("Enter Notes"),
        }),
    }),
    Yup.object().shape({
        step2: Yup.object({
            hourlyrate: Yup.string().required("Enter Rates"),
            budgetreset: Yup.boolean(),
            mailalert: Yup.boolean(),
            exeedspercentage: Yup.string().when('mailalert', {
                is: (val) => val,
                then: () => Yup.string().required('Enter percentage')
                    .matches(/^\d*\.?\d*$/, 'Must be a valid number')
                    .test('is-valid-percentage', 'Percentage must be between 0 and 100', value => {
                        const num = parseFloat(value);
                        return !isNaN(num) && num > 0 && num <= 100;
                    }),
                otherwise: () => Yup.string(),
            }),
        }),
    }),
    Yup.object().shape({
        step3: Yup.object({
            view: Yup.string().required("Select View Type"),
        }),
    }),
    Yup.object().shape({
        step4: Yup.object({
            permission: Yup.string().required("Select permission"),
        }),
    }),
];


const MultiStepForm = () => {

    const initialStep = JSON.parse(localStorage.getItem("currentStep")) || 0;
    const [currentStep, setCurrentStep] = useState(initialStep);


    const initialValues = JSON.parse(localStorage.getItem("formData")) || {
        step1: {
            name: "", clientname: "", startDate: "", endDate: "", notes: ""
        },
        step2: { hourlyrate: "", budgetreset: false, mailalert: false, exeedspercentage: "" },
        step3: { view: "" },
        step4: { permission: "" },
    };

    useEffect(() => {
        localStorage.setItem("currentStep", JSON.stringify(currentStep));
    }, [currentStep]);

    const handleSave = (values) => {
        localStorage.setItem("formData", JSON.stringify(values));
    };


    const handleBack = (setErrors) => {
        setCurrentStep(currentStep - 1);
        setErrors({})
    };

    const handleFinalSubmit = (values, { resetForm }) => {
        // Get the existing submissions from localStorage
        const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

        // Add the current submission to the array
        const updatedSubmissions = [...submissions, values];

        // Store the updated submissions array in localStorage
        localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));

        // Remove current form data and step from localStorage
        localStorage.removeItem("formData");
        localStorage.removeItem("currentStep");

        // Show success message
        toast("Form submitted successfully", { duration: 2000 });
        resetForm()
        setCurrentStep(0);
    };

    return (
        <>
            <div className="w-full flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-8 max-w-lg w-full bg-white rounded-lg shadow-lg">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchemas[currentStep]}
                        onSubmit={handleFinalSubmit}
                    >
                        {({ values, isValid, errors, validateForm, setErrors }) => (
                            console.log('===========>', errors),

                            <Form>

                                {currentStep === 0 && <Stepone errors={errors} />}
                                {currentStep === 1 && <Steptwo errors={errors} values={values} />}
                                {currentStep === 2 && <Stepthree errors={errors} values={values} />}
                                {currentStep === 3 && <Steptfour errors={errors} values={values} />}

                                <div className="flex justify-start gap-40 w-full mt-4">
                                    {currentStep > 0 && <button type="button" className='text-gray-400' onClick={() => handleBack(setErrors)}>
                                        Back
                                    </button>}
                                    {currentStep < 3 && (
                                        <button
                                            type="button"
                                            className="p-2 bg-blue-500  w-16 rounded text-white hover:bg-blue-600 transition"
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
                                            Next
                                        </button>
                                    )}
                                    {currentStep === 3 && (
                                        <button type="submit" className="p-2 bg-blue-500  w-16 rounded text-white hover:bg-blue-600 transition" onClick={() => handleSave(values)} disabled={!isValid}>
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default MultiStepForm;