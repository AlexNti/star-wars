import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useFavouriteContext } from "src/features/favourites/hooks";
import { People, Planets, Starships } from "src/features/wiki/types";

type FavouriteProps = { favourite: People | Starships | Planets };

const Favourite = ({ favourite }: FavouriteProps): JSX.Element => {
  const { state, addToFavourites, removeFromFavourites } =
    useFavouriteContext();

  const isFavourited = state.favourites[favourite.id] !== undefined;

  const handleOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      isFavourited
        ? removeFromFavourites(favourite.id)
        : addToFavourites(favourite);
    },
    [isFavourited, addToFavourites, removeFromFavourites, favourite]
  );
  console.log(state);
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
