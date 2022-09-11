import React from "react";
import { useParams } from "react-router-dom";
import { NotFound404 } from "src/components";

import {
  PeopleProfile,
  StarshipProfile,
  PlanetProfile,
} from "src/features/profile/components";

import { PROFILES } from "src/features/profile/types";

const Profile = (): JSX.Element => {
  const { itemId = "" } = useParams();

  if (itemId === PROFILES.STARSHIPS) return <StarshipProfile />;
  if (itemId === PROFILES.PEOPLE) return <PeopleProfile />;
  if (itemId === PROFILES.PLANETs) return <PlanetProfile />;

  return <NotFound404 />;
};

export default Profile;
