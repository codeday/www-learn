import React, { useMemo } from 'react';
import Box from '@codeday/topo/Atom/Box';
import * as blobs2 from 'blobs/v2';

export default function BlobBackground({ ...props }) {
  const svgPath = blobs2.svgPath({
    seed: Math.random(),
    extraPoints: 8,
    randomness: 4,
    size: 256,
  });

  const svgPath2 = blobs2.svgPath({
    seed: Math.random(),
    extraPoints: 8,
    randomness: 4,
    size: 256,
  });

  return (
    <>
      <canvas 
        onRef={drawOnCanvas}
        width="100%"
        height={612}
        margin="0 auto"
        z-index="-5"
        {...props}
      >
      </canvas>
    </>
  )
}

function drawOnCanvas(canvas) {
  if (!canvas) {
    return;
  }

  const canvas2D = canvas.getContent("2d");

  const blobPaths = createBlobs();

  for (blob in blobPaths) {
    canvas2D.stroke(blob);
  }
}

function createBlobs() {
  let blobs = [];

  const numberOfBlobs = 12;
  for (let i = 0; i < numberOfBlobs; i++) {
    const path = blobs2.canvasPath(
      {
          seed: Math.random(),
          extraPoints: 16,
          randomness: 2,
          size: 128,
      },
      {
          offsetX: 16,
          offsetY: 32,
      },
    );
    blobs.push(path)
  }

  return blobs;
}