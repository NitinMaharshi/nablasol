import React from 'react'
import { Field } from 'formik';

const Stepone = ({ errors }) => {


    return (
        <>

            <div className="text-center mb-8">
                <h2 className='font-bold text-gray-600'>Step 1</h2>
                <h3 className="text-xl font-medium mb-2 text-gray-600">Your Profile</h3>
                <p className="text-gray-500">Enter the login information for your account. <br />You will be able to create additional users after registering.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 px-8 pb-8 mb-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="text"
                        id="firstName"
                        name="step1.firstName"
                        placeholder="Input Your First Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.firstName}</div>
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="text"
                        id="lastName"
                        name="step1.lastName"
                        placeholder="Input Your Last Name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.lastName}</div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="email"
                        id="email"
                        name="step1.email"
                        placeholder="Input Your Email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.email}</div>
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="tel"
                        id="phoneNumber"
                        name="step1.phoneNumber"
                        placeholder="Input Your Phone Number"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.phoneNumber}</div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="password"
                        id="password"
                        name="step1.password"
                        placeholder="Create Password"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.password}</div>
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password<span className="text-red-500">*</span>
                    </label>
                    <Field
                        type="password"
                        id="confirmPassword"
                        name="step1.confirmPassword"
                        placeholder="Confirm Your Password"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <div className='text-red-600'>{errors?.step1?.confirmPassword}</div>
                </div>
            </div>
        </>
    )
}

export default Stepone
