import { Starships } from "src/features/wiki/types";
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

  return {
    isLoading,
    starship,
    starshipError,
  };
};

export default useProfileStarship;
