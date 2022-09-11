import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Table } from "src/features/wiki/components";

import {
  useFavouriteContext,
  useFavourites,
} from "src/features/favourites/hooks";

const tableKeys = ["name"];

const FavouritesTab = () => {
  const { state } = useFavouriteContext();
  const { handleSelection } = useFavourites();

  if (Object.keys(state.favourites).length < 1)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Text>You have not added favourites yet</Text>
      </Flex>
    );

  const favouritesArray = Object.keys(state.favourites).map((favouriteKey) => {
    return { ...state.favourites[favouriteKey] };
  });

  return (
    <Table
      showFavourites
      handleSelection={handleSelection}
      data={favouritesArray}
      tableKeys={tableKeys}
    ></Table>
  );
};

export default FavouritesTab;
