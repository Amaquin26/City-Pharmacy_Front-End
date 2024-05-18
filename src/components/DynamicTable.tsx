import React from 'react';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";

interface WithId {
  id: number;
}

interface DynamicTableProps<T extends WithId> {
  rows: T[];
  columns: { key: string; label: string }[];
  emptyContentMessage: string;
}

const DynamicTable = <T extends WithId>({ rows, columns,emptyContentMessage }: DynamicTableProps<T>): React.ReactElement => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key as string}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={emptyContentMessage}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DynamicTable;
