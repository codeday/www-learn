import React from 'react';
import PropTypes from 'prop-types';
import Box from '@chakra-ui/core/dist/Box';
import { pureRef } from '@codeday/topo/_utils';

const DifficultyBox = pureRef(({ color, ...props }, ref) => (
  <Box
    w="10%"
    rounded={5}
    p={1}
    border={1}
    d="inline-block"
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