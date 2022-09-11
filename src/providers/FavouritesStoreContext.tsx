import React from "react";

export type State = {
  favourites: Record<string, string>;
};

type Action<T, P = never> = {
  type: T;
  payload: P;
};

export enum Types {
  ADD_FAVOURITE_CHARACTER = "ADD_FAVOURITE_CHARACTER",
  REMOVE_FAVOURITE_CHARACTER = "REMOVE_FAVOURITE_CHARACTER",
}
type addFavouriteCharacter = Action<"ADD_FAVOURITE_CHARACTER", { id: string }>;

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
          [action.payload.id]: action.payload.id,
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
  addToFavourites: (id: string) => void;
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

  const addToFavourites = React.useCallback((id: string) => {
    dispatch({
      type: Types.ADD_FAVOURITE_CHARACTER,
      payload: { id },
    });
  }, []);

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
