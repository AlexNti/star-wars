import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useFavouriteContext } from "src/features/favourites/hooks";

type FavouriteProps = { id: string };

const Favourite = ({ id }: FavouriteProps): JSX.Element => {
  const { state, addToFavourites, removeFromFavourites } =
    useFavouriteContext();

  const isFavourited = state.favourites[id] !== undefined;

  const handleOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      isFavourited ? removeFromFavourites(id) : addToFavourites(id);
    },
    [id, isFavourited, addToFavourites, removeFromFavourites]
  );
  return (
    <IconButton
      size="sm"
      onClick={handleOnClick}
      color={isFavourited ? "green.500" : "gray.600"}
      aria-label="Search database"
      icon={<StarIcon />}
    />
  );
};

export default React.memo(Favourite);
