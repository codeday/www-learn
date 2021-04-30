import React from "react";
import PropTypes from "prop-types";
import Box from "@chakra-ui/core/dist/Box";

const DifficultyBox = ({ color, children, ...props }) => (
  <Box
    rounded={15}
    p={2}
    w={200}
    backgroundColor={color}
    fontWeight="bold"
    {...props}
  >
    {children}
  </Box>
);

DifficultyBox.propTypes = {
  color: PropTypes.string,
  ...(Box.propTypes || {}),
};
DifficultyBox.defaultProps = {
  color: "black",
  ...(Box.defaultProps || {}),
};

export default DifficultyBox;
