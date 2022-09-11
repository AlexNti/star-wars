import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { IconButton } from "@chakra-ui/react";

const TableCell = () => {};

//TODO ADD HOVER
type TableProps<T extends { id: string; [key: string]: any }> = {
  data: T[];
  handleSelection: (id: string) => void;
  tableKeys: string[];
  showFavourite?: boolean;
};

const WikiTable = <T extends { id: string; [key: string]: any }>({
  data,
  handleSelection,
  tableKeys,
  showFavourite = false,
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
          {showFavourite && <Th color="gray.400">Favourite</Th>}
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
              return (
                <Td width="100%" key={key}>
                  {currentData[key]}
                </Td>
              );
            })}
            {showFavourite && (
              <Td>
                <IconButton
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  color={currentData.isFavourited ? "green.500" : "gray.600"}
                  aria-label="Search database"
                  icon={<StarIcon />}
                />
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WikiTable;
