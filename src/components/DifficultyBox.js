import React from "react";
import PropTypes from "prop-types";
import Box from "@chakra-ui/core/dist/Box";
import { pureRef } from "@codeday/topo/_utils";

const DifficultyBox = pureRef(({ color, ...props }, ref) => (
  <Box
    rounded={5}
    p={1}
    pl={2}
    pr={2}
    border={1}
    d="inline-block"
    textAlign="center"
    borderColor="#56ca53"
    backgroundColor={color}
    fontWeight="bold"
    {...props}
    ref={ref}
  />
));
DifficultyBox.propTypes = {
  color: PropTypes.string,
  ...(Box.propTypes || {}),
};
DifficultyBox.defaultProps = {
  color: "black",
  ...(Box.defaultProps || {}),
};
export default DifficultyBox;
