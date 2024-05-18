import { Button, Card, CardBody, CardFooter, Chip, Image, Link, Tab, Tabs } from '@nextui-org/react';
import { useParams } from 'react-router-dom'
import { formatCurrency, formatDate } from '../../utils/format';
import { colorAvailability } from '../../utils/colorCoding';
import DynamicTable from '../../components/DynamicTable';
import { inventory } from '../../data/placeholder/inventory';
import { inventoryColumns, orderProductColumns } from '../../utils/constants';
import { orderProducts } from '../../data/placeholder/orderProducts';
import medicines from '../../data/placeholder/medicines';

const MedicineViewPage = () => {
  const {id} = useParams<{id:string}>();

  let medicineId = 0;

  
  // Modify When Calling an API
  const inventoryData = inventory.map(item => ({
    ...item,
    date: formatDate(item.date),
  }));
  const orderProductData = orderProducts.map(item => ({
    ...item,
    date: formatDate(item.date)
  }))
  


  try{
    medicineId = parseInt(id || `${id}`);

    if(isNaN(medicineId)){
      throw new Error("Medicine ID is invalid.");
    }

    // Remove this when calling an API
    if(medicines.length < medicineId){
      throw new Error("Medicine dataplaceholder out of bound.");
    }

  }catch(e){
    throw new Error("Medicine ID is invalid.");
  }

  // Modify when calling an API
  let medicine = medicines[medicineId - 1];

  return (
    <div className="min-h-screen px-4">
        <div className='md:w-4/5 m-auto mt-10' id='main-card'>

          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
            fullWidth
          >
            <CardBody>
              <div className="flex gap-2 flex-col md:flex-row">

                <div className="md:w-[40%]">
                  <Image
                    className="object-cover w-full"
                    height={200}
                    shadow="md"
                    src={medicine?.image}
                    width="100%"
                    isZoomed
                  />
                </div>

                <div className='w-full'>
                  <div className='flex justify-between md:items-center flex-col md:flex-row gap-y-2'>
                    <h2 className='text-xl font-medium mt-2'>{medicine?.name}</h2>
                    <div className='flex gap-2 mb-2'>
                      <Chip size="sm" color={colorAvailability(medicine?.availability)} variant="flat">{medicine?.availability}  availability</Chip>
                      <Chip size="sm" color='primary' variant="bordered" >QTY. {medicine?.quantity}</Chip>
                    </div>
                  </div>
                  <Chip size="lg" color="primary" variant="bordered">{formatCurrency(medicine?.price)}</Chip>
                  <div className='mb-5'>
                    <p className="text-base text-default-800 mt-2 my-3">{medicine?.description}</p>
                    <p className="text-small tracking-tight text-default-500">Manufacturer: {medicine?.manufacturer}</p>
                    <p className="text-small tracking-tight text-default-500">Brand Name: {medicine?.brandName}</p>
                    <p className="text-small tracking-tight text-default-500">Generic Name: {medicine?.genericName}</p>
                    <p className="text-small tracking-tight text-default-500">NDC: {medicine?.nationalDrugCode}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging Size: {medicine?.packagingSize}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging Type: {medicine?.packagingType}</p>
                    <p className="text-small tracking-tight text-default-500">Strength: {medicine?.strength}</p>
                    <p className="text-small tracking-tight text-default-500">Dosage Form: {medicine?.dosageForm}</p>
                  </div>
                </div>

              </div>
              <div className="md:mt-4">
                  <p className="text-small tracking-tight text-default-500">Storage Location: {medicine?.storageLocation}</p>
                  <p className="text-base tracking-tight text-default-700 mt-2">Additional Info:</p>
                  <p className="text-small tracking-tight text-default-500">{medicine?.therapeuticIndications}</p>
                  <p className="text-small tracking-tight text-default-500">{medicine?.storageConditions}</p>
                  <p className="text-small tracking-tight text-default-500">{medicine?.intendedUse}</p>
              </div>
            </CardBody>
            <CardFooter>
              <div className='flex justify-between items-center w-full gap-3 flex-col md:flex-row'>
                <div className='border border-green-500 w-full p-3 rounded-lg'>
                  <h3 className='font-medium text-lg tracking-tight text-default-800'>Total Sales: {formatCurrency(1234)}</h3>
                </div>
                <div className='border border-primary w-full p-3 rounded-lg'>
                  <h3 className='font-medium text-lg tracking-tight text-default-800'>Total Sold Products: {32}</h3>
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="flex w-full flex-col mt-5">
            <Tabs 
              aria-label="Options"   
              color='primary'      
            >
              <Tab key="inventory" title="Inventory">
                <Button className='my-2 float-end' color='primary' as={Link} variant='ghost' href='/medicines/inventory'>View All</Button>
                <DynamicTable columns={inventoryColumns} rows={inventoryData} emptyContentMessage={"No Inventory Data to Show."}/> 
              </Tab>
              <Tab key="order" title="Order History">
                <Button className='my-2 float-end' color='primary' as={Link} variant='ghost' href='/orders'>View All</Button>
                <DynamicTable columns={orderProductColumns} rows={orderProductData} emptyContentMessage={"No Inventory Data to Show."}/>  
              </Tab>
            </Tabs>
          </div>  

        </div>
    </div>  
  )
}


export default MedicineViewPage