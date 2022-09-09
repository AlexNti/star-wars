import React from "react";
import { Planets } from "../types";
import storage from "src/utils/storage";
import { useNavigate } from "react-router-dom";
import { useGetWikiPlanets } from "../services";

export type UseWikiPlanetsReturn = {
  isLoading: boolean;
  planets: Planets[] | undefined;
  planetsError: unknown;
  page: number;
  handleSelect: (id: string) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

const useWikiPlanets = (): UseWikiPlanetsReturn => {
  const navigate = useNavigate();
  const [page, setCurrentPage] = React.useState(
    storage.session.read("page") || 1
  );
  const {
    isLoading,
    data: planets,
    error: planetsError,
  } = useGetWikiPlanets({ page });

  const handleSelect = React.useCallback(
    (id: string) => {
      navigate(`profile/planets/${id}`);
    },
    [navigate]
  );

  const handleNextPage = React.useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, []);

  const handlePreviousPage = React.useCallback(() => {
    if (page > 1) setCurrentPage((currentPage) => currentPage - 1);
  }, [page]);

  /**
   * Save page session to storage when so when we navigate back from person profile
   * we will continue from the page the we were previously.
   *
   */
  React.useEffect(() => {
    storage.session.write("page", page);
  }, [page]);

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
    planets,
    planetsError,
    page,
    handleSelect,
    handlePreviousPage,
    handleNextPage,
  };
};

export default useWikiPlanets;
