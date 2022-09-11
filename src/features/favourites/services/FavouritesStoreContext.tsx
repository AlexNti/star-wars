import React from "react";
import { People, Planets, Starships } from "src/features/wiki/types";

export type State = {
  favourites: Record<string, People | Starships | Planets>;
};

type Action<T, P = never> = {
  type: T;
  payload: P;
};

export enum Types {
  ADD_FAVOURITE_CHARACTER = "ADD_FAVOURITE_CHARACTER",
  REMOVE_FAVOURITE_CHARACTER = "REMOVE_FAVOURITE_CHARACTER",
}
type addFavouriteCharacter = Action<
  "ADD_FAVOURITE_CHARACTER",
  { favourite: People | Starships | Planets }
>;

type removeFavouriteCharacter = Action<
  "REMOVE_FAVOURITE_CHARACTER",
  { id: string }
>;

type Actions = addFavouriteCharacter | removeFavouriteCharacter;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ADD_FAVOURITE_CHARACTER":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload.favourite.id]: action.payload.favourite,
        },
      };
    case "REMOVE_FAVOURITE_CHARACTER":
      const { [action.payload.id]: keyToRemove, ...restFavourites } =
        state.favourites;
      return { ...state, favourites: { ...restFavourites } };
    default:
      throw new Error();
  }
}

export const FavouritesContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
  addToFavourites: (id: People | Starships | Planets) => void;
  removeFromFavourites: (id: string) => void;
}>({
  state: { favourites: {} },
  dispatch: (action: Actions) => null,
  addToFavourites: (id) => null,
  removeFromFavourites: (id) => null,
});

export const FavouritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(
    reducer,
    { favourites: {} }
  );

  const addToFavourites = React.useCallback(
    (favourite: People | Starships | Planets) => {
      dispatch({
        type: Types.ADD_FAVOURITE_CHARACTER,
        payload: { favourite },
      });
    },
    []
  );

  const removeFromFavourites = React.useCallback((id: string) => {
    dispatch({ type: Types.REMOVE_FAVOURITE_CHARACTER, payload: { id } });
  }, []);

  const contextValue = React.useMemo(
    () => ({ state, dispatch, removeFromFavourites, addToFavourites }),
    [state, dispatch, addToFavourites, removeFromFavourites]
  );

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};
