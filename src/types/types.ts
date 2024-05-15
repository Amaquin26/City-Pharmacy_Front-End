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
    expirationDate: Date;
    barcode: string;
    storageConditions: string;
    image: string; // URL to the image
    promotionalInformation?: string;
    nutritionalInformation?: string;
    availability: string;  
    quantity: number;
}
  