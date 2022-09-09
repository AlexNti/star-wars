import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { wikiApi, GetWikiParams } from "../api";
import { People, Planets, QUERY_KEYS, Starships } from "../types";

export const useGetWikiPeople = ({
  page = 1,
}: GetWikiParams): UseQueryResult<People[]> =>
  useQuery([QUERY_KEYS.PEOPLE, page], () => wikiApi.getWikiPeople({ page }));

export const useGetWikiPlanets = ({
  page = 1,
}: GetWikiParams): UseQueryResult<Planets[]> =>
  useQuery([QUERY_KEYS.PLANETS, page], () => wikiApi.getWikiPlanets({ page }));

export const useGetWikiStarships = ({
  page = 1,
}: GetWikiParams): UseQueryResult<Starships[]> =>
  useQuery([QUERY_KEYS.STARSHIPS, page], () =>
    wikiApi.getWikiStarShips({ page })
  );
