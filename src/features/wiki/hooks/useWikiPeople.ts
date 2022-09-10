import React from "react";
import { People } from "../types";
import storage from "src/utils/storage";
import { useNavigate } from "react-router-dom";
import { useGetWikiPeople } from "../services";

export type UseWikiPeopleReturn = {
  isLoading: boolean;
  people: People[] | undefined;
  peopleError: unknown;
  page: number;
  handleSelectPerson: (personId: string) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

const useWikiPeople = (): UseWikiPeopleReturn => {
  const navigate = useNavigate();
  const [page, setCurrentPage] = React.useState(
    storage.session.read("page") || 1
  );
  const {
    isLoading,
    data: people,
    error: peopleError,
  } = useGetWikiPeople({ page });

  const handleSelectPerson = React.useCallback(
    (personId: string) => {
      navigate(`${personId}`);
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
    people,
    peopleError,
    page,
    handleSelectPerson,
    handlePreviousPage,
    handleNextPage,
  };
};

export default useWikiPeople;
