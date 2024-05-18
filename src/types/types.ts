export type Product =  {
    id: string;
    name: string;
    manufacturer: string;
    category: string;
    description: string;
    directionsForUse: string;
    warningsPrecautions: string;
    packagingSize: string;
    price: number;
    storageConditions: string;
    storageLocation: string;
    image: string; // URL to the image
    availability: string;  
    quantity: number;
}
  
export type Medicine =  {
    id: string;
    name: string;
    brandName: string;
    genericName: string;
    manufacturer: string;
    nationalDrugCode:string;
    description: string;
    strength:string;
    dosageForm:string,
    packagingSize: string;
    packagingType: string;
    therapeuticIndications:string;
    intendedUse:string
    price: number;
    storageConditions: string;
    storageLocation: string;
    image: string; // URL to the image
    availability: string;  
    quantity: number;
}

export type InventoryData = {
    id: number;
    date: Date;
    itemId: number;
    beginningInventory: number;
    endingInventory?: number;
}

export type OrderProducts = {
    id: number;
    date: Date;
    quantity: number;
    totalAmount: number;
}

export type AllOrderProducts = {
    id: number;
    date: Date;
    totalItems: number;
    totalAmount: number;
}

export type Orders = {
    id: number;
    date: Date;
    totalItems: number;
    totalAmount: number;
}