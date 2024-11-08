import React from 'react'
import { Field } from 'formik';

const Stepone = ({ errors }) => {
    return (
        <>

            <div className="text-center mb-8">
                <h2 className='font-bold text-gray-600'>Step 3</h2>
                <h3 className="text-xl font-medium mb-2 text-gray-600">About You</h3>
                <p className="text-gray-500">Describe yourself it's optional.</p>
            </div>

            <div className=" px-8 pb-8 mb-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        About
                    </label>
                    <Field
                        as="textarea"
                        id="firstName"
                        name="step3.about"
                        placeholder="Describe yourself here"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.firstName}</div>
                </div>
            </div>
        </>
    )
}

export default Stepone
