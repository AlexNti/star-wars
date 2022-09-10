import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const BackButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <IconButton
      width={50}
      onClick={() => navigate(-1)}
      aria-label="Go to main"
      size="lg"
      icon={<ArrowBackIcon />}
    />
  );
};

export default BackButton;
