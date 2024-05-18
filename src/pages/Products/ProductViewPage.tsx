import { Button, Card, CardBody, CardFooter, Chip, Image, Link, Tab, Tabs } from '@nextui-org/react';
import { useParams } from 'react-router-dom'
import products from '../../data/placeholder/products';
import { formatCurrency, formatDate } from '../../utils/format';
import { colorAvailability } from '../../utils/colorCoding';
import React from 'react';
import DynamicTable from '../../components/DynamicTable';
import { inventory } from '../../data/placeholder/inventory';
import { inventoryColumns, orderProductColumns } from '../../utils/constants';
import { orderProducts } from '../../data/placeholder/orderProducts';

const ProductViewPage = () => {
    const {id} = useParams<{id:string}>();

    let productId = 0;

    
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
      productId = parseInt(id || `${id}`);

      if(isNaN(productId)){
        throw new Error("Product ID is invalid.");
      }

      // Remove this when calling an API
      if(products.length < productId){
        throw new Error("Product dataplaceholder out of bound.");
      }

    }catch(e){
      throw new Error("Product ID is invalid.");
    }

    // Modify when calling an API
    let product = products[productId - 1];

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
                    src={product?.image}
                    width="100%"
                    isZoomed
                  />
                </div>

                <div className='w-full'>
                  <div className='flex justify-between md:items-center flex-col md:flex-row gap-y-2'>
                    <h2 className='text-xl font-medium mt-2'>{product?.name}</h2>
                    <div className='flex gap-2 mb-2'>
                      <Chip size="sm" color={colorAvailability(product?.availability)} variant="flat">{product?.availability}  availability</Chip>
                      <Chip size="sm" color='primary' variant="bordered" >QTY. {product?.quantity}</Chip>
                    </div>
                  </div>
                  <Chip size="lg" color="primary" variant="bordered">{formatCurrency(product?.price)}</Chip>
                  <div className='mb-5'>
                    <p className="text-base text-default-800 mt-2 my-3">{product?.description}</p>
                    <p className="text-small tracking-tight text-default-500">Manufacturer: {product?.manufacturer}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging: {product?.packagingSize}</p>
                    <p className="text-small tracking-tight text-default-500">Category: {product?.category}</p>
                  </div>
                </div>

              </div>
              <div className="md:mt-4">
                  <p className="text-small tracking-tight text-default-500">Storage Location: {product?.storageLocation}</p>
                  <p className="text-base tracking-tight text-default-700 mt-2">Additional Info:</p>
                  <p className="text-small tracking-tight text-default-500">{product?.directionsForUse}</p>
                  <p className="text-small tracking-tight text-default-500">{product?.storageConditions}</p>
                  <p className="text-small tracking-tight text-red-400">{product?.warningsPrecautions}</p>
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
                <Button className='my-2 float-end' color='primary' as={Link} variant='ghost' href='/products/inventory'>View All</Button>
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

export default ProductViewPage