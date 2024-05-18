import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Avatar,
  Button,
} from "@nextui-org/react";
import { EyeIcon } from "../../../components/Icons/EyeIcon ";
import { EditIcon } from "../../../components/Icons/EditIcon";
import { DeleteIcon } from "../../../components/Icons/DeleteIcon ";
import type { Medicine } from "../../../types/types";
import { formatCurrency } from "../../../utils/format";
import { colorAvailability } from "../../../utils/colorCoding";
import { Link } from "react-router-dom";

const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "image",
      label: "",
    },
    {
      key: "name",
      label: "Name",
    },
    {
        key: "brandName",
        label: "Brand Name",
    },
    {
        key: "genericName",
        label: "Generic Name",
    },
    {
      key: "manufacturer",
      label: "Manufacturer",
    },
    {
      key: "strength",
      label: "Strength",
    },
    {
      key: "dosageForm",
      label: "Dosage Form",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "qty",
      label: "Quantity",
    },
    {
      key: "availability",
      label: "Availability",
    },
    {
      key: "action",
      label: "Actions"
    }
  ];

const MedicineTable: React.FC<{
    data?: Medicine[];
    isLoading?: boolean;
    removeWrapper?: boolean;
    setMedicine: React.Dispatch<React.SetStateAction<Medicine>>
    onOpen: () => void
  }> = ({ data = [], isLoading = false, removeWrapper = false, onOpen,setMedicine }) => {
  
    const quickView = (item: Medicine) => {
        setMedicine(item);
        onOpen();
    }

  return (
    <Table removeWrapper={removeWrapper}>
        <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody
            emptyContent={"No Medicine To Display."}
            items={data}
            isLoading={isLoading}
        >
            {(item) => (
            <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                    <Link to={`/medicines/${item.id}`}>
                      <Avatar src={item.image} size="lg" radius="sm"/>
                    </Link>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.brandName}</TableCell>
                <TableCell>{item.genericName}</TableCell>
                <TableCell>{item.manufacturer}</TableCell>
                <TableCell>{item.strength}</TableCell>
                <TableCell>{item.dosageForm}</TableCell>
                <TableCell>{formatCurrency(item.price)}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                    <Chip size="sm" color={colorAvailability(item.availability)} variant="bordered">
                        {item.availability}
                    </Chip>
                </TableCell>
                <TableCell>
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Quick View">
                            <Button  isIconOnly onPress={() => quickView(item)} variant="light">
                                <EyeIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip content="Edit Product">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete Product">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                </TableCell>
            </TableRow>
            )}
        </TableBody>
        </Table>
  )
}

export default MedicineTable