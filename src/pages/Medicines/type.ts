export type MedicineDTO =  {
    id: number;
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