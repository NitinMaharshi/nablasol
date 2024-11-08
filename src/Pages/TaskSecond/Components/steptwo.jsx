import { Field } from 'formik'
import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const Steptwo = ({ errors, values }) => {
    return (
        <>
            <div className="text-center mb-8">
                <h2 className='font-bold text-gray-600'>Step 2</h2>
                <h3 className="text-xl font-medium mb-2 text-gray-600">Business Information</h3>
                <p className="text-gray-500">Please, enter information about your company.</p>
            </div>

            <div className="px-8 mb-6">
                <h2 className='text-blue-500 uppercase'>General information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                    <div>
                        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                            Brand Name<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="brandName"
                            name="step2.brandName"
                            placeholder="Enter Brand Name"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.brandName}</div>
                    </div>
                    <div>
                        <label htmlFor="brandType" className="block text-sm font-medium text-gray-700">
                            Brand Type<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="brandType"
                            name="step2.brandType"
                            placeholder="Enter Brand Type"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.brandType}</div>
                    </div>
                    <div>
                        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                            Street Address<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="streetAddress"
                            name="step2.streetAddress"
                            placeholder="Enter Street Address"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.streetAddress}</div>
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="city"
                            name="step2.city"
                            placeholder="Enter City"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.city}</div>
                    </div>
                    <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                            Zip Code<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="zipCode"
                            name="step2.zipCode"
                            placeholder="Enter Zip Code"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.zipCode}</div>
                    </div>
                    <div>
                        <label htmlFor="taxID" className="block text-sm font-medium text-gray-700">
                            Tax ID<span className="text-red-500">*</span>
                        </label>
                        <Field
                            type="text"
                            id="taxID"
                            name="step2.taxID"
                            placeholder="Enter Tax ID"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <div className='text-red-600'>{errors?.step2?.taxID}</div>
                    </div>

                </div>
            </div>
            <div className="px-8 mb-6">
                <h2 className='text-blue-500 uppercase mb-2'>Documents</h2>
                <p>Once the following documents are signed, you'll be ready to get started</p>
                <div className="mt-3 flex justify-between items-center gap-x-5">
                    <div className="flex justify-between items-center px-4 py-2 border rounded-lg w-full">
                        <p>Electroniclly sign the agreement(s)</p>
                        <FaCheck size={20} color='green' />
                    </div>
                    <button className='bg-blue-400 text-white px-3 py-2.5 rounded-md'><IoIosArrowForward size={20} /></button>
                </div>
                <div className="mt-3 flex justify-between items-center gap-x-5">
                    <div className="flex justify-between items-center px-4 py-2 border rounded-lg w-full">
                        <p>Non adult beverage Kroger market supplier waiver and relese</p>
                        <FaTimes size={20} color='red' />
                    </div>
                    <button className='bg-blue-400 text-white px-3 py-2.5 rounded-md'><IoIosArrowForward size={20} /></button>
                </div>
            </div>

            <div className="px-8 pb-8 mb-6">
                <h2 className='text-blue-500 uppercase mb-2'>coi pdf upload</h2>
                <p>Once the following documents are signed, you'll be ready to get started</p>
                <div className="mt-3 flex justify-between items-center gap-x-5">
                    <div className="flex justify-between items-center px-4 py-2 border rounded-lg w-full">
                        <p>Electroniclly sign the agreement(s)</p>
                        <FaCheck size={20} color='green' />
                    </div>
                    <button className='bg-blue-400 text-white px-3 py-2.5 rounded-md'><IoIosArrowForward size={20} /></button>
                </div>

            </div>

        </>

    )
}

export default Steptwo
