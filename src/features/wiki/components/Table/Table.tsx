import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
//TODO ADD HOVER
type TableProps<T extends { id: string; [key: string]: any }> = {
  data: T[];
  handleSelection: (id: string) => void;
  tableKeys: string[];
};

const WikiTable = <T extends { id: string; [key: string]: any }>({
  data,
  handleSelection,
  tableKeys,
}: TableProps<T>): JSX.Element => {
  return (
    <Table size="md">
      <Thead>
        <Tr>
          {tableKeys.map((key) => (
            <Th key={key} color="gray.400">
              {key}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((currentData) => (
          <Tr
            _hover={{ cursor: "pointer" }}
            onClick={() => handleSelection(currentData.id)}
            key={currentData.id}
          >
            {tableKeys.map((key) => {
              return <Td key={key}>{currentData[key]}</Td>;
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WikiTable;
