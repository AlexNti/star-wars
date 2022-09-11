import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Alert } from "src/components";
import { Table } from "src/features/wiki/components";

import { useWikiPeople } from "src/features/wiki/hooks";

import { useFavouriteContext } from "src/features/favourites/hooks";

const tableKeys = ["name"];

const PeopleTab = () => {
  const { people, isLoading, peopleError, handleSelectPerson } =
    useWikiPeople();
  const { state, addToFavourites, removeFromFavourites } =
    useFavouriteContext();

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (peopleError) {
    return (
      <Alert
        title="Error At fetching Characters"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }

  return (
    <Table
      data={people || []}
      tableKeys={tableKeys}
      handleSelection={handleSelectPerson}
      favourites={state.favourites}
      handleAddFavourites={addToFavourites}
      hanldeRemoveFavourites={removeFromFavourites}
    />
  );
};

export default PeopleTab;
