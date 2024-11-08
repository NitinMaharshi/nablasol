import React, { useState } from 'react'
import { addClient } from '../../../Redux/ClientSlice';
import AddClientModal from './AddClientModal';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, Field } from 'formik';

const Stepone = ({ errors }) => {
    const [openModal, setOpenModal] = useState(false);
    const [clientInputValue, setClientInputValue] = useState("");

    const dispatch = useDispatch();
    const Clients = useSelector((state) => state.clientList.clients);

    const handleOpenClientModal = () => {
        setOpenModal(true);
    };

    const handleCloseClientModal = () => {
        setOpenModal(false);
        setClientInputValue("")

    };

    const handleSaveEditedTask = () => {
        if (clientInputValue.trim() !== '') {
            dispatch(
                addClient({
                    id: nanoid(),
                    name: clientInputValue,
                })
            );
            handleCloseClientModal();
        }
    };



    return (
        <>
            <h2 className="text-2xl font-semibold text-center mb-4">Create a Project</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Project Name</label>
                <Field
                    name="step1.name"
                    type="text"
                    placeholder="Enter project name here"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <div className='text-red-600'>{errors?.step1?.name}</div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Client</label>
                <div className="flex items-center md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
                    <Field as="select" name="step1.clientname" className="flex-grow p-2 border bg-white border-gray-300 rounded w-full md:w-1/2">
                        <option>Select a client</option>
                        {Clients?.map((item) => <option key={item.id}>{item.name}</option>)}
                    </Field>
                    <span className="mx-2">or</span>
                    <button className="p-2 border border-gray-300 rounded w-full md:w-32 text-sm" onClick={handleOpenClientModal}>+ New Client</button>
                </div>
                <div className='text-red-600'>{errors?.step1?.clientname}</div>

            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Dates</label>
                <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
                    <div className='w-full'>
                        <Field type="date" name="step1.startDate" className="w-full p-2 border border-gray-300 rounded" placeholder="Start Date" />
                        <div className='text-red-600'>{errors?.step1?.startDate}</div>
                    </div>
                    <div className='w-full'>
                        <Field type="date" name="step1.endDate" className="w-full p-2 border border-gray-300 rounded" placeholder="End Date" />
                        <div className='text-red-600'>{errors?.step1?.endDate}</div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Notes</label>
                <Field as="textarea" name="step1.notes"
                    placeholder="Notes (Optional)"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                />
                <div className='text-red-600'>{errors?.step1?.notes}</div>

            </div>

            {openModal && <AddClientModal
                clientInputValue={clientInputValue}
                setClientInputValue={setClientInputValue}
                handleSaveEditedTask={handleSaveEditedTask}
                handleCloseClientModal={handleCloseClientModal}
            />}
        </>
    )
}

export default Stepone
