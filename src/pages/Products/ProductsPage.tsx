import { Pagination, Spinner, useDisclosure } from '@nextui-org/react';
import SearchInput from '../../components/SearchInput';
import ProductsTable from './components/ProductsTable';
import ProductQuickViewModal from './components/ProductQuickViewModal';
import { useEffect, useState } from 'react';
import { ProductDto } from './type';
import { getAllProducts } from './repo';


const ProductsPage = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const initialProduct: ProductDto = {
        id: 0,
        name: "",
        manufacturer: "",
        category: "",
        description: "",
        directionsForUse: "",
        warningsPrecautions: "",
        packagingSize: "",
        price: 0,
        storageConditions: "",
        image: "",
        storageLocation: "",
        availability: "",
        quantity: 0
    };

    const [product, setProduct] = useState<ProductDto>(initialProduct);
    const [productList,setProductList] = useState<ProductDto[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const onLoadPage = async () => {
        const response = await getAllProducts();
        setProductList(response);
        setIsLoading(false);
    }

    onLoadPage();
  }, [])

    return (
        <div className="min-h-screen px-4">
            <div className='md:w-4/5 m-auto mt-10'>
                <SearchInput placeholder='Search products...'/>

                <div className='mt-10'>
                    {isLoading ? (<div className='w-full flex justify-center items-center'>
                        <Spinner size="lg"/>
                    </div>) : (
                        <ProductsTable data={productList} onOpen={onOpen} setProduct={setProduct}/> 
                    )}                                      
                </div>
                {!isLoading && (
                    <div className='my-5 flex justify-center'>
                        <Pagination showControls total={10} initialPage={1} />
                    </div>
                )}
            </div>
            
            <ProductQuickViewModal isOpen={isOpen} onOpenChange={onOpenChange} product={product}/>
        </div>
    )
}

export default ProductsPage