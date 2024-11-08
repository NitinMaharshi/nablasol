import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { GoColumns } from 'react-icons/go'

const Stepthree = ({ values, errors }) => {
    return (
        <>
            <div className="h-[400px]">

                <h2 className="text-xl font-semibold text-center mb-4">Select a view</h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    You can also customize this view in settings
                </p>

                {/* <div className="flex justify-center mb-8 gap-8">
                    <div className="flex flex-col items-center w-[180px]">
                        <div className="flex items-center justify-center p-6 rounded-lg transition h-[150px] w-full border-2 border-blue-500 bg-blue-50 text-blue-600">
                            <div className="w-14 h-12 rounded mb-2 bg-blue-500"></div>
                        </div>
                        <span className="mt-2">List</span>
                    </div>

                    <div className="flex flex-col items-center w-[180px]">
                        <div className="flex items-center justify-center p-6 rounded-lg transition h-[150px] w-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100">
                            <div className="w-14 h-12 rounded mb-2 bg-gray-200"></div>
                        </div>
                        <span className="mt-2">Board</span>
                    </div>
                </div> */}
                <div className="flex justify-center mb-8 gap-8">
                    {/* Option 1: List */}
                    <label className="flex flex-col items-center w-[180px] cursor-pointer">
                        <Field
                            type="radio"
                            name="step3.view"
                            value="list"
                            className="hidden"
                        />
                        <div
                            className={`flex items-center justify-center p-6 rounded-lg transition h-[150px] w-full 
                            bg-white  ${values?.step3?.view === "list" ? "border-2 text-blue-600 border-blue-500" : "border border-gray-300"}`}
                        >
                            {/* <div className="w-14 h-12 rounded mb-2"></div> */}
                            <CiViewList size={70} color={`${values?.step3?.view === "list" ? "#2563eb" : "gray"}`} />
                        </div>
                        <span className="mt-2">List</span>
                    </label>

                    {/* Option 2: Board */}
                    <label className="flex flex-col items-center w-[180px] cursor-pointer">
                        <Field
                            type="radio"
                            name="step3.view"
                            value="board"
                            className="hidden"
                        />
                        <div
                            className={`flex items-center justify-center p-6 rounded-lg transition h-[150px] w-full 
                                bg-white  ${values?.step3?.view === "board" ? "border-2 text-blue-600 border-blue-500" : "border border-gray-300"}`}
                        >
                            <GoColumns size={60} color={`${values?.step3?.view === "board" ? "#2563eb" : "gray"}`} />
                        </div>
                        <span className="mt-2">Board</span>
                    </label>
                </div>

                {/* Error Message */}
                <div className="text-red-500 text-center">{errors?.step3?.view}</div>

            </div >
        </>
    )
}

export default Stepthree
