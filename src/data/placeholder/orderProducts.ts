import { AllOrderProducts, OrderProducts } from "../../types/types"

export const orderProducts:OrderProducts[] = [
    {
        id: 1,
        date: new Date(),
        quantity:10,
        totalAmount:200,
    },
    {
        id: 2,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        quantity:25,
        totalAmount:500,
    },
    {
        id: 3,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        quantity:35,
        totalAmount:1789,
    },
    {
        id: 4,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        quantity:22,
        totalAmount:456,
    },
    {
        id: 5,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        quantity:34,
        totalAmount:1908,
    },
]

export const allOrders:AllOrderProducts[] = [
    {
        id: 1,
        date: new Date(),
        totalItems:10,
        totalAmount:200,
    },
    {
        id: 2,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        totalItems:25,
        totalAmount:500,
    },
    {
        id: 3,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        totalItems:35,
        totalAmount:1789,
    },
    {
        id: 4,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        totalItems:22,
        totalAmount:456,
    },
    {
        id: 5,
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        totalItems:34,
        totalAmount:1908,
    },
]