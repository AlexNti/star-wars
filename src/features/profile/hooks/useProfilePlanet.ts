import { Planets } from "src/features/wiki/types";
import { useGetProfilePlanet } from "../services";

export type useProfilePlanetReturn = {
  isLoading: boolean;
  planet: Planets | undefined;
  planetError: unknown;
};

const useProfilePlanet = ({ id }: { id: string }): useProfilePlanetReturn => {
  const {
    isLoading,
    data: planet,
    error: planetError,
  } = useGetProfilePlanet({ id });

  return {
    isLoading,
    planet,
    planetError,
  };
};

export default useProfilePlanet;
