import React from 'react';
import { BsSortDownAlt, BsSortUpAlt, BsPlus, BsSearch } from 'react-icons/bs';


const CustomTable = ({ headerData, tableData, addMoreButtonFunc, addMoreBtnText, }) => {

  //states
  const { error, data } = tableData;

  if (error) {
    return <p>Error</p>;
  }


  return <React.Fragment>
    <div>
      <div className='overflow-x-scroll '>
        <table className='table border border-slate-200 w-full'>
          <thead className='text-black-600  text-sm border border-slate-200 bg-neutral-100'>
            <tr className='w-full bg-neutral-100'>
              {headerData?.map((item, i) =>
                <th className=' border-gray-300 px-3 py-2 bg-neutral-100 text-black font-medium text-left'
                  width={item?.width} key={`${item?.name}+${i}`} onClick={() => item?.filterable === true && onSortData(item?.name)}>
                  {item?.header}
                </th>
              )}
            </tr>
          </thead>
          <tbody className='text-sm'>
            {data?.length > 0
              ? (
                data?.map((item, id) => (<tr key={item?.id}>{headerData?.map((dataitem, i) =>
                  <td className='px-3 py-2 w-auto border border-x-0 border-slate-200 text-black' key={i}>
                    {dataitem.value(item, id)}
                  </td>)}
                </tr>))
              )
              : (
                <tr>
                  <td colSpan={headerData?.length} className="px-3 py-2 text-center text-black"> No Records Found </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>

    </div>

  </React.Fragment>;
};

export default CustomTable;