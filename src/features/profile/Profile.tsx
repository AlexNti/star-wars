import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { BackButton } from "src/components";

import { Card } from "src/features/profile/components";

const Profile = (): JSX.Element => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Flex mr="auto" pr={3} width={"100%"} flexDirection="row">
        <BackButton />
        <Text m="auto" fontSize="lg">
          (lg) In love with React & Next
        </Text>
      </Flex>
      <Flex m="auto" flex={1} mt={10} flexDirection="column">
        <Card />
      </Flex>
    </Flex>
  );
};

export default Profile;
