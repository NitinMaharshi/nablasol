import { Field } from 'formik'
import React from 'react'
import { PiUsersThin, PiUsersThree, PiUserThin } from 'react-icons/pi'

const Steptfour = ({ values, errors }) => {
    return (
        <>
            {/* <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-16"> */}
            <h2 className="text-2xl font-bold text-center mb-4">Who can manage projects</h2>

            <p className="text-gray-500 text-center mb-6">
                Don’t panic – you can also customize these permissions in settings.
            </p>

            <div className="space-y-4">
                <label className={`cursor-pointer transition block border p-4 rounded-lg ${values?.step4?.permission === "everyone" ? "border-2 text-blue-600 border-blue-500" : "border border-gray-300"}`}
                >
                    <Field
                        type="radio"
                        name="step4.permission"
                        value="everyone"
                        className="hidden"
                    />
                    <div className="flex items-center space-x-4 ">
                        <div className="w-10 h-10 text-gray-500 flex items-center justify-center">
                            <PiUsersThree size={35} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-700 font-medium">Everyone</span>
                            <p className="text-sm text-gray-500 mt-2">All users can now see it, but guests cannot access the project.</p>
                        </div>
                    </div>
                </label>

                {/* Option 2: Only Admins */}
                <label className={`cursor-pointer transition block border p-4 rounded-lg ${values?.step4?.permission === "admins" ? "border-2 text-blue-600 border-blue-500" : "border border-gray-300"}`}
                >
                    <Field
                        type="radio"
                        name="step4.permission"
                        value="admins"
                        className="hidden"
                    />
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 text-gray-500 flex items-center justify-center">
                            <PiUserThin size={35} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-700 font-medium">Only Admins</span>
                            <p className="text-sm text-gray-500 mt-2">Only admins can manage everything.</p>
                        </div>
                    </div>
                </label>

                {/* Option 3: Only Specific People */}
                <label className={`cursor-pointer transition block border p-4 rounded-lg ${values?.step4?.permission === "specific" ? "border-2 text-blue-600 border-blue-500" : "border border-gray-300"}`}
                >
                    <Field
                        type="radio"
                        name="step4.permission"
                        value="specific"
                        className="hidden"
                    />
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 text-gray-500 flex items-center justify-center">
                            <PiUsersThin size={35} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-700 font-medium">Only Specific People</span>
                            <p className="text-sm text-gray-500 mt-2">Only some specific people can see it.</p>
                        </div>
                    </div>
                </label>

                {/* Error Message */}
                <div className="text-red-500 text-center">{errors?.step4?.permission}</div>
            </div>

        </>
    )
}

export default Steptfour
