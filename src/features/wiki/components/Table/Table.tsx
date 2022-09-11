import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Favourite } from "src/features/wiki/components";

type TableProps<T extends { id: string; [key: string]: any }> = {
  data: T[];
  handleSelection: (id: string) => void;
  tableKeys: string[];
  favourites?: Record<string, string>;
  handleAddFavourites?: (id: string) => void;
  hanldeRemoveFavourites?: (id: string) => void;
};

const WikiTable = <T extends { id: string; [key: string]: any }>({
  data,
  handleSelection,
  tableKeys,
  favourites,
  handleAddFavourites,
  hanldeRemoveFavourites,
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
          {favourites && <Th color="gray.400">Favourite</Th>}
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
            {favourites && handleAddFavourites && hanldeRemoveFavourites && (
              <Td>
                <Favourite
                  handleFavourite={() =>
                    favourites[currentData.id] !== undefined
                      ? hanldeRemoveFavourites(currentData.id)
                      : handleAddFavourites(currentData.id)
                  }
                  isFavourited={favourites[currentData.id] !== undefined}
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
