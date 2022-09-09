import React from "react";

import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound404 = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="x-large">404 Page Not Found</Text>
      <Button onClick={() => navigate("/")}>
        Click here to return to main page
      </Button>
    </Flex>
  );
};

export default NotFound404;
