import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CodeBlock from "@codeday/topo/Atom/CodeBlock";
import Box from "@codeday/topo/Atom/Box";
import Image from "@codeday/topo/Atom/Image";
import Text, { Link, Heading } from "@codeday/topo/Atom/Text";
import List, { Item as ListItem } from "@codeday/topo/Atom/List";
import Divider from "@codeday/topo/Atom/Divider";

function getSize(initialSize, offset) {
  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ];
  return sizes[sizes.indexOf(initialSize) + offset];
}

const CustomComponent = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <Text as="span" fontWeight={"bold"}>
        {text}
      </Text>
    ),
    [MARKS.ITALIC]: (text) => (
      <Text as="span" fontStyle={"italic"}>
        {text}
      </Text>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      console.log("Block Embedded Entry: ", node);
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      console.log("Inline Embedded Entry:", node);
    },
    [INLINES.HYPERLINK]: (node) => {
      console.log("Hyperlink Data: ", node);
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <Heading mb={4} mt={8} as="h1" fontSize="4xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Heading mb={4} mt={8} as="h2" fontSize="3xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <Heading mb={3} mt={6} as="h3" fontSize="2xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return (
        <Heading mb={2} mt={4} as="h4" fontSize="xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <Heading mb={1} mt={2} as="h5" fontSize="lg">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return (
        <Heading mb={1} mt={1} as="h6" fontSize="md">
          {children}
        </Heading>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <List styleType="disc" mb={6} pl={4} stylePos="outside">
          {children}
        </List>
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <List as="ol" styleType="decimal" mb={6} pl={4} stylePos="outside">
          {children}
        </List>
      );
    },
    [BLOCKS.HR]: () => {
      <Divider />;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {},
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <Text as={"span"} mb={6}>
          {children}
          <br></br>
        </Text>
      );
    },
  },
};

export default function NewContentfulRichText({ documentJson }) {
  console.log(documentJson);
  documentToReactComponents(documentJson);
}
// -> <div><h2>[title]</h2><p>[description]</p></div>
