import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { wikiApi, GetWikiParams } from "../api";
import { People, QUERY_KEYS } from "../types";

export const useGetWikiPeople = ({
  page = 1,
}: GetWikiParams): UseQueryResult<People[]> =>
  useQuery([QUERY_KEYS.PEOPLE, page], () => wikiApi.getWikiPeople({ page }));
