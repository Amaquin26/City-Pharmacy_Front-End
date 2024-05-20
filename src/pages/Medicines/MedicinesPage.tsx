import { Pagination, Spinner, useDisclosure } from '@nextui-org/react';
import SearchInput from '../../components/SearchInput';
import medicines from '../../data/placeholder/medicines';
import MedicineTable from './components/MedicineTable';
import MedicineQuickViewModal from './components/MedicineQuickViewModal';
import { useEffect, useState } from 'react';
import { Medicine } from '../../types/types';
import { MedicineDTO } from './type';
import { getAllMedicines } from './repo';

const MedicinesPage = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const initialItem: MedicineDTO = {
      id: 0,
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

  const [medicine, setMedicine] = useState<MedicineDTO>(initialItem);
  const [medicineList,setMedicineList] = useState<MedicineDTO[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const onLoadPage = async () => {
        const response = await getAllMedicines();
        setMedicineList(response);
        setIsLoading(false);
    }

    onLoadPage();
  }, [])
    
  return (
    <div className="min-h-screen px-4">
        <div className='md:w-4/5 m-auto mt-10'>
            <SearchInput placeholder='Search medicines...'/>

            <div className='mt-10'>
                {isLoading ? 
                    (<div className='w-full flex justify-center items-center'>
                        <Spinner size="lg"/>
                    </div>) 
                    : 
                    (<MedicineTable data={medicineList} onOpen={onOpen} setMedicine={setMedicine} isLoading={isLoading}/>)
                }
                                
            </div>
            {!isLoading && (
                <div className='my-5 flex justify-center'>
                    <Pagination showControls total={10} initialPage={1} />
                </div>
            )}
        </div>     
        <MedicineQuickViewModal isOpen={isOpen} onOpenChange={onOpenChange} medicine={medicine}/>
    </div>
  )
}

export default MedicinesPage