import React from "react";
import { Starships } from "src/features/wiki/types";
import storage from "src/utils/storage";
import { useGetProfileStarship } from "../services";

export type useProfileStarshipReturn = {
  isLoading: boolean;
  starship: Starships | undefined;
  starshipError: unknown;
};

const useProfileStarship = ({
  id,
}: {
  id: string;
}): useProfileStarshipReturn => {
  const {
    isLoading,
    data: starship,
    error: starshipError,
  } = useGetProfileStarship({ id });

  /**
   * Clear the session storage when we are refreshing the browser.
   */
  React.useEffect(() => {
    window.onbeforeunload = () => {
      storage.session.clear();
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return {
    isLoading,
    starship,
    starshipError,
  };
};

export default useProfileStarship;
