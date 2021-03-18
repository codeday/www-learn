import React, { forwardRef } from "react";
import Text, { Heading, Link, CopyText } from "@codeday/topo/Atom/Text";
import { Tooltip } from "@chakra-ui/react";
import Button from "@codeday/topo/Atom/Button";
import Image from "@codeday/topo/Atom/Image";
import { Flex } from "@chakra-ui/core";
import { Item } from "@codeday/topo/Atom/List";
import { List } from "@chakra-ui/react";
import useSwr from "swr";
import Skelly from "@codeday/topo/Atom/Skelly";
import { apiFetch } from "@codeday/topo/utils";
import Box from "@codeday/topo/Atom/Box";


const query = (proejct1ID, project2ID, project3ID) => `{
  showcase {
    project1: project(id: "${proejct1ID}") {
      name
      media {
        image
      }
    }
    project2: project(id: "${project2ID}") {
      name
      media {
        image
      }
    }
    project3: project(id: "${project3ID}") {
      name
      media {
        image
      }
    }
  }
}`;

export default function PreviewProjects({ project1ID, project2ID, project3ID }) {
  const { data, error } = useSwr(query(project1ID, project2ID, project3ID), apiFetch, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // Let pulled data from GraphQL be set equal to the project variables.
  const {project1, project2, project3} = data?.showcase

  console.log(project1, project2, project3);
  console.log(project1.media[0].image);
  return (
    <Flex
      size="100%"
      justify="left"
      alignItems="left"
      flexDirection="row"
      flexWrap="wrap"
      mt={2}
    >
      <Image src={project1.media[0].image} h={40} mr={5} borderRadius={5} />
      <Image src={project2.media[0].image} h={40} mr={5} borderRadius={5}/>
      <Image src={project3.media[0].image} h={40} borderRadius={5} />
    </Flex>
  );
}
