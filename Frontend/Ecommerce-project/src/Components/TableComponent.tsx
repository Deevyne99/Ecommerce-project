// import React from 'react'

import { useState } from 'react'

const TableComponent = () => {
  const [status, setStatus] = useState('pending')
  return (
    <div className='flex flex-col bg-white shadow-lg rounded-lg'>
      <div className='flex justify-between py-3 px-4  '>
        <div className='flex h-[40px] w-[200px] '>
          <input
            type='text'
            className='w-full h-full px-1 rounded-md border-gray-100 border'
          />
        </div>
        <div className='flex gap-4 capitalize'>
          <button className='capitalize'>filter</button>
          <button className='capitalize'>sort</button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse  border-gray-100 '>
          <thead>
            <tr className='bg-[#fafafa] border-gray-100 text-sm text-[#6b7280] font-bold'>
              <th className='p-4 text-left '>#</th>
              <th className='p-4 text-left'>Order ID</th>
              <th className='p-4 text-left'>Items</th>
              <th className='p-4 text-left'>Quantity</th>
              <th className='p-4 text-left'>Date</th>
              <th className='p-4 text-left'>Payment Status</th>
              <th className='p-4 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className=' text-sm text-[#6b7280] hover:bg-[#60a5fa] hover:text-white'>
              <td className='p-4'>1</td>
              <td className='p-4'>ORD12345</td>
              <td className='p-4'>Bags</td>
              <td className='p-4'>10</td>
              <td className='p-4'>10 Aug 2024</td>
              <td className={`p-4 `}>
                <p
                  className={` max-w-[100px] p-1 text-center rounded-sm ${
                    status === 'success'
                      ? 'bg-[#dcfce7] text-[#10b981]'
                      : status === 'pending'
                      ? 'bg-[#fef9c3] text-[#facc15]'
                      : 'bg-[#fee2e2] text-[#ef4444]'
                  }`}
                >
                  Successful
                </p>
              </td>
            </tr>
            <tr className='border-t border-gray-100 text-sm text-[#6b7280]'>
              <td className='p-4'>1</td>
              <td className='p-4'>ORD12345</td>
              <td className='p-4'>Bags</td>
              <td className='p-4'>10</td>
              <td className='p-4'>10 Aug 2024</td>
              <td className='p-4'>Successful</td>
            </tr>
            <tr className='border-t border-gray-100 text-sm text-[#6b7280]'>
              <td className='p-4'>1</td>
              <td className='p-4'>ORD12345</td>
              <td className='p-4'>Bags</td>
              <td className='p-4'>10</td>
              <td className='p-4'>10 Aug 2024</td>
              <td className='p-4'>Successful</td>
            </tr>
            <tr className='border-t text-sm border-gray-100 text-[#6b7280]'>
              <td className='p-4'>1</td>
              <td className='p-4'>ORD12345</td>
              <td className='p-4'>Bags</td>
              <td className='p-4'>10</td>
              <td className='p-4'>10 Aug 2024</td>
              <td className='p-4'>Successful</td>
            </tr>
            <tr className='border-t text-sm text-[#6b7280] border-gray-100 '>
              <td className='p-4'>1</td>
              <td className='p-4'>ORD12345</td>
              <td className='p-4'>Bags</td>
              <td className='p-4'>10</td>
              <td className='p-4'>10 Aug 2024</td>
              <td className='p-4'>Successful</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div className='flex justify-between  py-4 px-4 border-gray-100 border rounded-b-md'>
          <div>
            <p>
              showing <span>10</span> out of <span>256</span>
            </p>
          </div>
          <div className='flex gap-4'>
            <button className='p-1 bg-[#3b82f6] text-sm flex text-white h-[30px] w-[30px] justify-center text-center'>
              1
            </button>
            <button className='p-1 bg-[#3b82f6] text-sm flex text-white h-[30px] w-[30px] justify-center text-center'>
              1
            </button>
            <button className='p-1 bg-[#3b82f6] text-sm flex text-white h-[30px] w-[30px] justify-center text-center'>
              10
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
