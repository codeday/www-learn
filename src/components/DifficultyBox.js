import React from "react";
import PropTypes from "prop-types";
import Box from "@chakra-ui/core/dist/Box";

const DifficultyBox = ({ color, children, ...props }) => (
  <Box
    rounded={5}
    p={1}
    pl={2}
    pr={2}
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
