import React, { useEffect } from "react";
import {Modal,Link, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Chip} from "@nextui-org/react";
import { Product } from "../../../types/types";
import { formatCurrency } from "../../../utils/format";
import { colorAvailability } from "../../../utils/colorCoding";

const ProductQuickViewModal: React.FC<{
    isOpen: boolean;
    onOpenChange: () => void;
    product: Product;
  }> = ({isOpen, onOpenChange,product}) => {

  return (
    
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Product Quick View</ModalHeader>
                <ModalBody>
                    <div className="m-auto">
                        <Image
                            isZoomed
                            width={240}
                            alt=""
                            src={product?.image}
                            />
                    </div>                
                    <h4 className="text-base font-bold leading-none text-default-600">{product?.name}</h4>
                    <div className="flex align-items justify-between">                      
                      <Chip size="lg" color="primary" variant="bordered">{formatCurrency(product?.price)}</Chip>
                      <Chip size="sm" color={colorAvailability(product?.availability)} variant="flat">{product?.availability} availability</Chip>
                    </div>
                    <p className="text-small tracking-tight text-default-500">Manufacturer: {product?.manufacturer}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging: {product?.packagingSize}</p>
                    <p className="text-small tracking-tight text-default-500">Category: {product?.category}</p>
                    <div className="border border-primary rounded-lg p-2">
                      <p className="text-small tracking-tight text-default-500">Description:</p>
                      <p className="text-base text-default-800">{product?.description}</p>
                    </div>                 
                    <div className="mt-2">
                      <p className="text-small tracking-tight text-default-500">{product?.storageConditions}</p>
                      <p className="text-small tracking-tight text-red-400">{product?.warningsPrecautions}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      href={`products/${product.id}`}
                      as={Link}
                      color="primary"
                    >
                      Full View
                    </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductQuickViewModal;
