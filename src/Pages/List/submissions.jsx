import { useMemo, useState } from 'react';

import CustomTable from '../../Components/Table/CustomTable';

const ProductColor = () => {

    // State's for table
    const [tableData, setTableData] = useState({ data: JSON.parse(localStorage.getItem("submissions")) || [], error: '' });

    const Columns = useMemo(() => [
        {
            header: 'Name',
            value: (cell) => (<span className='text-uppercase'>{cell?.step1?.name ? cell?.step1?.name : '--'} </span>)
        },
        {
            header: 'Client',
            value: (cell) => (<span className='text-uppercase'>{cell?.step1?.clientname ? cell?.step1?.clientname : '--'} </span>)
        },
        {
            header: 'Hourly Rate',
            value: (cell) => (<span className='text-uppercase'>{cell?.step2?.hourlyrate ? cell?.step2?.hourlyrate : '--'} </span>)
        },
        {
            header: 'Permissions',
            value: (cell) => (<span className='text-uppercase'>{cell?.step4?.permission ? cell?.step4?.permission : '--'} </span>)
        },
    ], []);


    return (
        <>
            <div className='shadow-lg rounded-md'>
                <div className='p-5 bg-white  rounded-md'>
                    <CustomTable
                        tableData={tableData}
                        headerData={Columns}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductColor;
