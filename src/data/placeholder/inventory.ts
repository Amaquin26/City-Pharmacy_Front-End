import { InventoryData } from "../../types/types";

export const inventory:InventoryData[] = [
    {
        id: 1,
        date: new Date(),
        beginningInventory:5,
    },
    {
        id: 2,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        beginningInventory:6,
        endingInventory: 5
    },
    {
        id: 3,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        beginningInventory:10,
        endingInventory: 6
    },
    {
        id: 4,
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        beginningInventory:20,
        endingInventory: 10
    },
    {
        id: 5,
        date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        beginningInventory:10,
        endingInventory:20,
    },
] 