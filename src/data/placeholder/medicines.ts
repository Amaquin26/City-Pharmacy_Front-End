import { Medicine } from "../../types/types";

const medicines: Medicine[] = [
    {
        id: 1,
        name: "Paracetamol",
        brandName: "Biogesic",
        genericName: "Paracetamol",
        manufacturer: "Unilab",
        nationalDrugCode:"123456789",
        description: "Pain reliever and fever reducer.",
        strength:"500 mg", 
        dosageForm: "Tablet",
        packagingSize: "10 tablets",
        packagingType: "Bottle",
        therapeuticIndications: "Headache, fever, muscle aches",
        intendedUse: "Relief of mild to moderate pain and fever.",
        price:100,
        storageConditions: "Store at room temperature.",
        storageLocation: "Aisle A Rack B Shelf 1",
        image: "/medicineimages/biogesic.png",
        availability: "high",
        quantity: 60
    },
    
  ];
  
  export default medicines;