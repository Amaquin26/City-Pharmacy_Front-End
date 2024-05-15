import { Button, Pagination, useDisclosure } from '@nextui-org/react';
import SearchInput from '../../components/SearchInput';
import products from '../../data/placeholder/products';
import ProductsTable from './ProductsTable';
import ProductQuickViewModal from './ProductQuickViewModal';
import { useEffect, useState } from 'react';
import { Product } from '../../types/types';


const ProductsPage = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const initialProduct: Product = {
        id: "",
        name: "",
        manufacturer: "",
        category: "",
        description: "",
        directionsForUse: "",
        warningsPrecautions: "",
        packagingSize: "",
        price: 0,
        expirationDate: new Date(),
        barcode: "",
        storageConditions: "",
        image: "",
        promotionalInformation: "",
        nutritionalInformation: "",
        availability: "",
        quantity: 0
    };

    const [product, setProduct] = useState<Product>(initialProduct)


    return (
        <div className="min-h-screen px-4">
            <div className='md:w-4/5 m-auto mt-10'>
                <SearchInput placeholder='Search products...'/>

                <div className='mt-10'>
                    <ProductsTable data={products} onOpen={onOpen} setProduct={setProduct}/>                   
                </div>
                <div className='my-5 flex justify-center'>
                    <Pagination showControls total={10} initialPage={1} />
                </div>
            </div>
            
            <ProductQuickViewModal isOpen={isOpen} onOpenChange={onOpenChange} product={product}/>
        </div>
  )
}

export default ProductsPage