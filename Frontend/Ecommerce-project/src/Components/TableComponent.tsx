// import React from 'react'

const TableComponent = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between py-3 px-4 border rounded-t-md'>
        <div className='flex h-[40px] w-[200px] border'>
          <input type='text' className='w-full h-full px-1 rounded-md' />
        </div>
        <div className='flex gap-4 capitalize'>
          <button className='capitalize'>filter</button>
          <button className='capitalize'>sort</button>
        </div>
      </div>
      <table className='w-full border-collapse border'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-4 text-left'>#</th>
            <th className='p-4 text-left'>Order ID</th>
            <th className='p-4 text-left'>Items</th>
            <th className='p-4 text-left'>Quantity</th>
            <th className='p-4 text-left'>Date</th>
            <th className='p-4 text-left'>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-t'>
            <td className='p-4'>1</td>
            <td className='p-4'>ORD12345</td>
            <td className='p-4'>Bags</td>
            <td className='p-4'>10</td>
            <td className='p-4'>10 Aug 2024</td>
            <td className='p-4'>Successful</td>
          </tr>
          <tr className='border-t'>
            <td className='p-4'>1</td>
            <td className='p-4'>ORD12345</td>
            <td className='p-4'>Bags</td>
            <td className='p-4'>10</td>
            <td className='p-4'>10 Aug 2024</td>
            <td className='p-4'>Successful</td>
          </tr>
          <tr className='border-t'>
            <td className='p-4'>1</td>
            <td className='p-4'>ORD12345</td>
            <td className='p-4'>Bags</td>
            <td className='p-4'>10</td>
            <td className='p-4'>10 Aug 2024</td>
            <td className='p-4'>Successful</td>
          </tr>
          <tr className='border-t'>
            <td className='p-4'>1</td>
            <td className='p-4'>ORD12345</td>
            <td className='p-4'>Bags</td>
            <td className='p-4'>10</td>
            <td className='p-4'>10 Aug 2024</td>
            <td className='p-4'>Successful</td>
          </tr>
          <tr className='border-t'>
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
    </div>
  )
}

export default TableComponent
