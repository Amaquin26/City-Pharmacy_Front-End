import { get } from "../../api/baseRepo";
import { ProductDto } from "./type";

export async function getAllProducts() {
	return await get<ProductDto[]>(`/Product/GetAllProducts`);
}

export async function getProductById(id: number) {
	return await get<ProductDto>(`/Product/GetProductById`, {
		id
	});
}