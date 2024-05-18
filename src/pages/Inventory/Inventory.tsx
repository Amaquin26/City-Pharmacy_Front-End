import React from 'react'
import DynamicTable from '../../components/DynamicTable'
import { allInventoryColumns } from '../../utils/constants'
import { inventory } from '../../data/placeholder/inventory';
import { formatDate } from '../../utils/format';
import SearchInput from '../../components/SearchInput';
import { Pagination } from '@nextui-org/react';

const Inventory = () => {

  const inventoryData = inventory.map(item => ({
    ...item,
    date: formatDate(item.date),
  }));

  return (
    <div className="min-h-screen px-4">
          <div className='md:w-4/5 m-auto mt-10'>
            <SearchInput placeholder='Search inventories...'/>

            <div className='mt-10'>
                <DynamicTable columns={allInventoryColumns} rows={inventoryData} emptyContentMessage={"No Inventory Data to Show."}/>                   
              </div>
              <div className='my-5 flex justify-center'>
                  <Pagination showControls total={10} initialPage={1} />
              </div>
            
          </div>
    </div>
  )
}

export default Inventory