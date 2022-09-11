import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Favourite } from "src/features/wiki/components";
import { People, Planets, Starships } from "src/features/wiki/types";

type TableProps<T extends People | Starships | Planets> = {
  data: T[];
  handleSelection: (id: string) => void;
  tableKeys: string[];
  showFavourites?: boolean;
};

const WikiTable = <T extends People | Starships | Planets>({
  data,
  handleSelection,
  tableKeys,
  showFavourites = false,
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
          {showFavourites && <Th color="gray.400">Favourite</Th>}
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
                  {/*// @ts-ignore */}
                  {currentData[key]}
                </Td>
              );
            })}
            {showFavourites && (
              <Td>
                <Favourite favourite={currentData} />
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WikiTable;
