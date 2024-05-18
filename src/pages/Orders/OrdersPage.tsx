import React from 'react'
import SearchInput from '../../components/SearchInput'
import { allOrdersColumns } from '../../utils/constants'
import DynamicTable from '../../components/DynamicTable'
import { Pagination } from '@nextui-org/react'
import { allOrders } from '../../data/placeholder/orderProducts'
import { formatDate } from '../../utils/format'

const OrdersPage = () => {
  const allOrdersData = allOrders.map(item => ({
    ...item,
    date: formatDate(item.date)
  }))

  return (
    <div className="min-h-screen px-4">
          <div className='md:w-4/5 m-auto mt-10'>
            <SearchInput placeholder='Search orders...'/>

            <div className='mt-10'>
                <DynamicTable columns={allOrdersColumns} rows={allOrdersData} emptyContentMessage={"No Inventory Data to Show."}/>                   
              </div>
              <div className='my-5 flex justify-center'>
                  <Pagination showControls total={10} initialPage={1} />
              </div>
            
          </div>
    </div>
  )
}

export default OrdersPage