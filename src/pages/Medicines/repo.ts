import { get } from '../../api/baseRepo'
import { MedicineDTO } from './type';

export async function getAllMedicines() {
	return await get<MedicineDTO[]>(`/Medicine/GetAllMedicines`);
}

export async function getMedicineById(id: number) {
	return await get<MedicineDTO>(`/Medicine/GetMedicineById`, {
		id
	});
}

/* export async function addUser(user: AddUserDTO) {
	return await post<CallResultDto<object>>(`/User/AddUser`,undefined,user);
} */