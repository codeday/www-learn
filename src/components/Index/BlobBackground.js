import React, { useMemo } from 'react';
import Box from '@codeday/topo/Atom/Box';
import Image from '@codeday/topo/Atom/Image';
import SvgBlobs from '../SVG/SvgBlobs';
import * as blobs2 from 'blobs/v2';

export default function BlobBackground({ ...props }) {

  return (
    <>
      <Box
        width="100%"
        height={1024}
        position="absolute"
        m="0 auto"
        textAlign="center"
        top={0}
        left={0}
        opacity="25%"
        zIndex="-1"
      >
        <SvgBlobs />
      </Box>
    </>
  )
}