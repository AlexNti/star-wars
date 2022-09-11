import React from "react";
import { People } from "src/features/wiki/types";
import storage from "src/utils/storage";
import { useGetProfilePerson } from "../services";

export type useProfilePeopleReturn = {
  isLoading: boolean;
  person: People | undefined;
  personError: unknown;
};

const useProfilePeople = ({ id }: { id: string }): useProfilePeopleReturn => {
  const {
    isLoading,
    data: person,
    error: personError,
  } = useGetProfilePerson({ id });

  return {
    isLoading,
    person,
    personError,
  };
};

export default useProfilePeople;
