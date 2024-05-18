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
import type { Product } from "../../../types/types";
import { formatCurrency } from "../../../utils/format";
import { colorAvailability } from "../../../utils/colorCoding";

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
    key: "manufacturer",
    label: "Manufacturer",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "size",
    label: "Packaging Size",
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

const ProductsTable: React.FC<{
  data?: Product[];
  isLoading?: boolean;
  removeWrapper?: boolean;
  setProduct: React.Dispatch<React.SetStateAction<Product>>
  onOpen: () => void
}> = ({ data = [], isLoading = false, removeWrapper = false, onOpen,setProduct }) => {

    const quickView = (item: Product) => {
        setProduct(item);
        onOpen();
    }

    return (
        <Table removeWrapper={removeWrapper}>
        <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody
            emptyContent={"No Products To Display."}
            items={data}
            isLoading={isLoading}
        >
            {(item) => (
            <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                    <Avatar src={item.image} size="lg" radius="sm"/>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.manufacturer}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.packagingSize}</TableCell>
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
    );
};

export default ProductsTable;

