import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

export const CardTile = ({ title }: { title: string }): JSX.Element => {
  return (
    <Flex
      p={1}
      width="100%"
      borderBottom="1px"
      borderColor="gray.400"
      flexDirection="row"
    >
      <Box pl="2">
        <Text as="b" fontSize="xl">
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export const CardItem = (): JSX.Element => {
  return (
    <Flex
      width="100"
      p={1}
      _notLast={{ borderBottom: "1px", borderColor: "gray.400" }}
      flexDirection="row"
    >
      <Text> Here is item</Text>
    </Flex>
  );
};

export const Card = (): JSX.Element => {
  return (
    <Flex w={500} flexDirection="column">
      <Flex borderRadius={10} bg="gray.700" flexDirection="column" width="100%">
        <Flex width="100%">
          <CardTile title="Biography" />
        </Flex>
        <Flex p={2} flexDirection="column" width="100%">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
