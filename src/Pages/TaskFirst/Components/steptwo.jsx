import { Field } from 'formik'
import React from 'react'

const Steptwo = ({ errors, values }) => {
    return (
        <>

            <h2 className="text-2xl font-semibold text-center mb-4">Project Type</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
                Don’t panic — You can also customize this type in settings
            </p>

            <div className="flex mb-3">
                <button className="flex-1 py-2 px-2 bg-blue-500 text-white rounded-l font-semibold text-sm border border-slate-300">
                    Time & Materials
                </button>
                <button className="flex-1 py-2 px-2 bg-white text-gray-500 font-semibold text-sm border border-slate-300">
                    Fixed Fee
                </button>
                <button className="flex-1 py-2 px-2 bg-white text-gray-500 rounded-r font-semibold text-sm border border-slate-300">
                    Non-Billable
                </button>
            </div>

            <h3 className="text-lg font-medium mb-2">Hourly</h3>
            <p className="text-sm text-gray-500 mb-2">
                We need hourly rates to track your project’s billable amount.
            </p>
            <div className="mb-4">
                <div className='flex items-center md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0'>
                    <select className="w-full md:w-3/5 p-2 border border-gray-300 rounded bg-white">
                        <option>Project Hourly Rate</option>
                    </select>
                    <Field
                        name="step2.hourlyrate"
                        type="text"
                        placeholder="₹ 12,678.00"
                        className="w-full md:w-2/5 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className='text-red-600'>{errors?.step2?.hourlyrate}</div>
            </div>

            <h3 className="text-lg font-medium mb-2">Budget</h3>
            <p className="text-sm text-gray-500 mb-2">
                We need hourly rates to track your project’s billable amount.
            </p>
            <div className="flex items-center space-x-2 mb-4">
                <select className="flex-1 p-2 border border-gray-300 rounded bg-white">
                    <option>Hours per Person</option>
                </select>
            </div>
            <div className="mb-4">
                <div className='flex items-center'>
                    <Field type="checkbox" name="step2.budgetreset" className="mr-2" />
                    <span className="text-sm text-gray-500">Budget resets every month</span>
                </div>
                <div className='text-red-600'>{errors?.step2?.budgetreset}</div>
            </div>
            <div className="mb-4">
                <div className='flex flex-wrap items-center '>
                    <Field type="checkbox" name="step2.mailalert" className="mr-2" />
                    <span className="text-sm text-gray-500">Send email alerts if project exceeds</span>
                    <Field
                        name="step2.exeedspercentage"
                        type="number"
                        placeholder="80.0"
                        className="w-16 h-8 ml-2 p-2 border border-gray-300 rounded"
                        disabled={!values.step2.mailalert}
                    />
                    <span className="text-sm text-gray-500 ml-2">% of budget</span>
                </div>
                <div className='text-red-600'>{errors?.step2?.exeedspercentage}</div>

            </div>
        </>

    )
}

export default Steptwo
