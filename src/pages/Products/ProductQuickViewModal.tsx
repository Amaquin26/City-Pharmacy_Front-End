import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";
import { Product } from "../../types/types";

const ProductQuickViewModal: React.FC<{
    isOpen: boolean;
    onOpenChange: () => void;
    product: Product;
  }> = ({isOpen, onOpenChange,product}) => {

  return (
    
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{product?.name}</ModalHeader>
                <ModalBody>
                    <div className="m-auto">
                        <Image
                            isZoomed
                            width={240}
                            alt="NextUI Fruit Image with Zoom"
                            src={product?.image}
                            />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Action
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
