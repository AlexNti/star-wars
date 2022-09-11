import {
  useQuery,
  UseQueryResult,
  useQueries,
  QueriesResults,
} from "@tanstack/react-query";
import { profileApi, GetProfileParams } from "../api";
import { Starships, Planets, People } from "src/features/wiki/types";
import { QUERY_KEYS } from "../types";

export const useGetProfilePerson = ({
  id,
}: GetProfileParams): UseQueryResult<People> =>
  useQuery([QUERY_KEYS.PERSON, id], () => profileApi.getProfilePerson({ id }));

export const useGetProfilePlanet = ({
  id,
}: GetProfileParams): UseQueryResult<Planets> =>
  useQuery([QUERY_KEYS.PLANET, id], () => profileApi.getProfilePerson({ id }));

export const useGetProfileStarship = ({
  id,
}: GetProfileParams): UseQueryResult<Starships> =>
  useQuery([QUERY_KEYS.STARSHIP, id], () =>
    profileApi.getProfileStarship({ id })
  );

export const useGetProfileStarships = ({
  ids,
}: {
  ids: string[];
}): QueriesResults<Starships[]> =>
  useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: [QUERY_KEYS.STARSHIP, id],
        queryFn: () => profileApi.getProfileStarship({ id }),
      };
    }),
  });
