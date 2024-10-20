// import React from 'react'

// import { useState } from 'react'

const TableComponent = () => {
  // const [status, setStatus] = useState('pending')
  return (
    <div className='mt-32 border rounded-md'>
      <div className='flex overflow-x-auto  flex-col bg-white  rounded-lg w-full'>
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
        <div className='overflow-x-auto '>
          <table className='min-w-full border-collapse  border-gray-100 '>
            <thead>
              <tr className='bg-[#fafafa] border-gray-100 text-sm text-[#6b7280] font-bold'>
                <th className='p-2 md:p-4 text-left hidden md:table-cell'>
                  S/N
                </th>
                <th className='p-2 md:p-4 text-left '>Order ID</th>
                <th className='p-2 md:p-4 text-left '>Items</th>
                <th className='p-2 md:p-4 text-left '>Quantity</th>
                <th className='p-2 md:p-4 text-left hidden md:table-cell'>
                  Date
                </th>

                <th className='p-2 md:p-4 text-left '>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' text-sm text-[#6b7280]  hover:bg-[#f3f4f6] '>
                <td className='p-2 md:p-4 hidden md:flex'>1</td>
                <td className='p-2 md:p-4 truncate'>ORD12345</td>
                <td className='p-2 md:p-4 truncate'>Bags of rice and beans</td>
                <td className='p-2 md:p-4'>10</td>
                <td className='p-2 md:p-4 hidden md:flex'>10 Aug 2024</td>

                <td className='p-2 capitalize md:p-4'>view</td>
              </tr>
              <tr className=' text-sm text-[#6b7280] hover:bg-[#60a5fa] hover:text-white'>
                <td className='p-2 md:p-4 hidden md:flex'>1</td>
                <td className='p-2 md:p-4  truncate'>ORD12345</td>
                <td className='p-2 md:p-4 truncate'>Bags</td>
                <td className='p-2 md:p-4'>10</td>
                <td className='p-2 md:p-4 hidden md:flex'>10 Aug 2024</td>

                <td className='p-2 capitalize md:p-4'>view</td>
              </tr>
              <tr className=' text-sm text-[#6b7280] hover:bg-[#60a5fa] hover:text-white'>
                <td className='p-2 md:p-4 hidden md:flex'>1</td>
                <td className='p-2 md:p-4  truncate'>ORD12345</td>
                <td className='p-2 md:p-4 truncate'>Bags</td>
                <td className='p-2 md:p-4'>10</td>
                <td className='p-2 md:p-4 hidden md:flex'>10 Aug 2024</td>

                <td className='p-2 capitalize md:p-4'>view</td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className='flex justify-between  py-4 px-4 border-gray-100 border-t rounded-b-md'>
          <div>
            <p>
              showing <span>10</span> out of <span>256</span>
            </p>
          </div>
          <div className='flex gap-4'>
            <button
              className={`bg-[#3b82f6] text-white rounded-lg w-[40px] h-[40px] p-2 shadow-md  `}
            >
              1
            </button>
            <button
              className={`bg-[#3b82f6] text-white rounded-lg w-[40px] h-[40px] p-2 shadow-md  `}
            >
              2
            </button>
            <button
              className={`bg-[#3b82f6] text-white rounded-lg w-[40px] h-[40px] p-2 shadow-md  `}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
