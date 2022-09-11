import React from "react";
import { People } from "src/features/wiki/types";
import storage from "src/utils/storage";
import { useGetProfilePerson } from "../services";

export type UseWikiPeopleReturn = {
  isLoading: boolean;
  person: People | undefined;
  personError: unknown;
};

const useProfilePeople = ({ id }: { id: string }): UseWikiPeopleReturn => {
  const {
    isLoading,
    data: person,
    error: personError,
  } = useGetProfilePerson({ id });

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
    person,
    personError,
  };
};

export default useProfilePeople;
