import React from "react";
import { useParams } from "react-router-dom";
import { Alert } from "src/components";

import { Flex, Text, Spinner } from "@chakra-ui/react";
import { BackButton } from "src/components";
import { Card, CardItem } from "src/features/profile/components";

import { useProfileStarship } from "src/features/profile/hooks";
import { get } from "src/utils/get";

import { makeProfileMapper } from "src/features/profile/constants";

const Profile = () => {
  const { itemId = "", profileId = "" } = useParams();
  const { isLoading, starship, starshipError } = useProfileStarship({
    id: profileId,
  });

  const { bio } = makeProfileMapper()[itemId];
  const biokeys = Object.keys(bio);

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (starshipError) {
    return (
      <Alert
        title="Error At fetching People profile"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Flex mr="auto" pr={3} width={"100%"} flexDirection="row">
        <BackButton />
        <Text m="auto" fontSize="3xl">
          {get(starship || {}, "name")}
        </Text>
      </Flex>
      <Flex m="auto" flex={1} mt={10} flexDirection="column">
        <Card>
          {biokeys.map((bioKey) => {
            const { Component } = bio[bioKey];
            if (Component)
              return (
                <CardItem key={bioKey}>
                  <Component {...starship} />
                </CardItem>
              );
            return (
              <CardItem
                key={bioKey}
                title={bio[bioKey].title || bioKey}
                value={get(starship || {}, bioKey)}
              ></CardItem>
            );
          })}
        </Card>
      </Flex>
    </Flex>
  );
};

export default Profile;
