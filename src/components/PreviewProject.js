import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import Page from "../../../components/page";
import Content from "@codeday/topo/Molecule/Content";
import Text, { Heading, Link, CopyText } from "@codeday/topo/Atom/Text";
import { Tooltip } from "@chakra-ui/react";
import Button from "@codeday/topo/Atom/Button";
import { Flex } from "@chakra-ui/core";
import { Item } from "@codeday/topo/Atom/List";
import { List } from "@chakra-ui/react";
import useSwr from "swr";
import Skelly from "@codeday/topo/Atom/Skelly";
import { apiFetch } from "@codeday/topo/utils";
import ContentfulRichText from "../../../components/ContentfulRichText";
import DifficultyBox from "../../../components/DifficultyBox";
import Box from "@codeday/topo/Atom/Box";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

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

export default function PreviewProjects() {
  const { data, error } = useSwr(query(capitalTrack, lessonID), apiFetch, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // Let pulled data from GraphQL be set equal to the lessons variable
  const {project1, project2, project3} = data?.showcase

  console.log(project1, project2, project3);
  return (
    <Box>
      
    </Box>
  );
}
