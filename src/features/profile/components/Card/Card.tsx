import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

export const CardTitle = ({ title }: { title: string }): JSX.Element => {
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

export const CardItem = ({
  title,
  value,
  children,
  underLine,
}: {
  title?: string;
  value?: string;
  children?: React.ReactNode;
  underLine?: boolean;
}): JSX.Element => {
  return (
    <Flex
      pt={1}
      pb={1}
      width="100%"
      _notLast={{ borderBottom: "1px", borderColor: "gray.400" }}
      justifyContent="space-between"
    >
      {children && children}
      {!children && (
        <>
          <Text color="gray.300" fontSize="sm">
            {title}
          </Text>
          <Text
            textDecor={underLine ? "underline" : "initial"}
            fontWeight="bold"
            color="gray.100"
            fontSize="md"
          >
            {value}
          </Text>
        </>
      )}
    </Flex>
  );
};

export const Card = ({
  children,
  cardTitle = "Biography",
}: {
  children: React.ReactNode;
  cardTitle?: string;
}): JSX.Element => {
  return (
    <Flex w={500} flexDirection="column">
      <Flex borderRadius={10} bg="gray.700" flexDirection="column" width="100%">
        <Flex width="100%">
          <CardTitle title={cardTitle} />
        </Flex>
        <Flex p={2} flexDirection="column" width="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
