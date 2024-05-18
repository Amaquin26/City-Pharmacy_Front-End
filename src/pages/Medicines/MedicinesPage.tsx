import { Pagination, useDisclosure } from '@nextui-org/react';
import SearchInput from '../../components/SearchInput';
import medicines from '../../data/placeholder/medicines';
import MedicineTable from './components/MedicineTable';
import MedicineQuickViewModal from './components/MedicineQuickViewModal';
import { useState } from 'react';
import { Medicine } from '../../types/types';

const MedicinesPage = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const initialItem: Medicine = {
      id: "",
      name: "",
      brandName: "",
      genericName: "",
      manufacturer: "",
      nationalDrugCode:"",
      description: "",
      strength:"", 
      dosageForm: "",
      packagingSize: "",
      packagingType: "",
      therapeuticIndications: "",
      intendedUse: "",
      price:0,
      storageConditions: "",
      storageLocation: "",
      image: "",
      availability: "",
      quantity: 0
  };

  const [medicine, setMedicine] = useState<Medicine>(initialItem)
    
  return (
    <div className="min-h-screen px-4">
          <div className='md:w-4/5 m-auto mt-10'>
              <SearchInput placeholder='Search medicines...'/>

              <div className='mt-10'>
                  <MedicineTable data={medicines} onOpen={onOpen} setMedicine={setMedicine}/>                   
              </div>
              <div className='my-5 flex justify-center'>
                  <Pagination showControls total={10} initialPage={1} />
              </div>
          </div>
          
          <MedicineQuickViewModal isOpen={isOpen} onOpenChange={onOpenChange} medicine={medicine}/>
      </div>
  )
}

export default MedicinesPage