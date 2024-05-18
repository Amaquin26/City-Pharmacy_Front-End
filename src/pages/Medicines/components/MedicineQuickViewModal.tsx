import React, { useEffect } from "react";
import {Modal,Link, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Chip} from "@nextui-org/react";
import { Medicine } from "../../../types/types";
import { formatCurrency } from "../../../utils/format";
import { colorAvailability } from "../../../utils/colorCoding";

const MedicineQuickViewModal: React.FC<{
    isOpen: boolean;
    onOpenChange: () => void;
    medicine: Medicine;
  }> = ({isOpen, onOpenChange,medicine}) => {
    
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Medicine Quick View</ModalHeader>
                <ModalBody>
                    <div className="m-auto">
                        <Image
                            isZoomed
                            width={240}
                            alt=""
                            src={medicine?.image}
                            />
                    </div>                
                    <h4 className="text-base font-bold leading-none text-default-600">{medicine?.name} {medicine?.brandName}</h4>
                    <div className="flex align-items justify-between">                      
                      <Chip size="lg" color="primary" variant="bordered">{formatCurrency(medicine?.price)}</Chip>
                      <Chip size="sm" color={colorAvailability(medicine?.availability)} variant="flat">{medicine?.availability} availability</Chip>
                    </div>
                    <p className="text-small tracking-tight text-default-500">Generic Name: {medicine?.genericName}</p>
                    <p className="text-small tracking-tight text-default-500">Manufacturer: {medicine?.manufacturer}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging: {medicine?.packagingSize}</p>
                    <p className="text-small tracking-tight text-default-500">Packaging Type: {medicine?.packagingType}</p>
                    <p className="text-small tracking-tight text-default-500">National Drug Code: {medicine?.nationalDrugCode}</p>
                    <p className="text-small tracking-tight text-default-500">Strength: {medicine?.strength}</p>
                    <p className="text-small tracking-tight text-default-500">Dosage Form: {medicine?.dosageForm}</p>
                    <div className="border border-primary rounded-lg p-2">
                      <p className="text-small tracking-tight text-default-500">Description:</p>
                      <p className="text-base text-default-800">{medicine?.description}</p>
                    </div>                 
                    <div className="mt-2">
                      <p className="text-small tracking-tight text-default-500">{medicine?.storageConditions}</p>
                      <p className="text-small tracking-tight text-default-500">{medicine?.therapeuticIndications}</p>
                      <p className="text-small tracking-tight text-default-500">{medicine?.intendedUse}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      href={`medicines/${medicine.id}`}
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
  )
}

export default MedicineQuickViewModal