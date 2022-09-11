import React from "react";
import { useParams } from "react-router-dom";
import { Alert } from "src/components";

import { Flex, Text, Spinner } from "@chakra-ui/react";
import { BackButton } from "src/components";
import {
  Card,
  CardItem,
  StarshipCardItem,
  PeopleProfile,
} from "src/features/profile/components";

import { useProfilePerson } from "src/features/profile/hooks";
import { get } from "src/utils/get";

const makePersonProfileMapper = (): Record<
  string,
  {
    bio: Record<
      string,
      {
        navigateTo: string;
        title?: string;
        Component?: (args: any) => JSX.Element;
      }
    >;
  }
> => ({
  people: {
    bio: {
      birth_year: { navigateTo: "", title: "birth year" },
      starships: { navigateTo: "starships", Component: StarshipCardItem },
      skin_color: { navigateTo: "", title: "skin color" },
      name: { navigateTo: "" },
      homeworld: { navigateTo: "planets" },
      height: { navigateTo: "" },
      hair_color: { navigateTo: "", title: "hair color" },
      gender: { navigateTo: "" },
    },
  },
});

const Profile = (): JSX.Element => {
  const { itemId = "", profileId = "" } = useParams();

  return <PeopleProfile />;
};

export default Profile;
