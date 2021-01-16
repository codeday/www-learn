import React from 'react';
import Box from '@codeday/topo/Atom/Box';
import Image from '@codeday/topo/Atom/Image';
import Text, { Link, Heading } from '@codeday/topo/Atom/Text';
import List, { Item as ListItem } from '@codeday/topo/Atom/List';
import Divider from '@codeday/topo/Atom/Divider';
import StaticContent from './StaticContent';
import CodeBlock from '@codeday/topo/Atom/CodeBlock';

const MEDIA_TYPE_VIDEO = ['video/mp4', 'video/mov'];
const MEDIA_TYPE_IMAGE = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

function getSize(initialSize, offset) {
  const sizes = [
    'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl',
  ];
  return sizes[sizes.indexOf(initialSize) + offset];
}

function ContentfulAsset({ id, links, ...props }) {
  const asset = links?.assets?.block?.filter((l) => l.sys.id === id)[0];
  if (!asset) return <></>;

  if (MEDIA_TYPE_VIDEO.includes(asset.contentType)) {
    return <Box {...props}><video src={asset.url} controls={true} preload="auto" /></Box>;
  }

  if (MEDIA_TYPE_IMAGE.includes(asset.contentType)) {
    return <Image src={`${asset.url}?w=600`} alt="" {...props} />
  }

}

function renderTextContent({ value, marks }) {
  if (["\r\n", "\n\r", "\r", "\n"].includes(value)) return <br />;

  const markMap = (marks || [])
    .reduce((accum, { type, ...rest }) => ({
      ...accum,
      [type]: Object.keys(rest).length > 0 ? rest : true,
    }), {});

  if (marks && marks.length > 0) {
    return (
      <Text as="span" fontWeight={markMap.bold && 'bold'} fontStyle={markMap.italic && 'italic'}>
        {value}
      </Text>
    );
  }
  return value;

}

function ContentfulParagraph({content, links, root, children, ...props}) {
  if (content.length === 3) {
    // We know that it is an embedded entry if the length of content is 3
    if (content[1].data.target) {
      const firstID = content[1].data.target.sys.id;
      const asset = links?.entries?.inline?.filter((l) => l.sys.id === firstID)[0];

      if (asset) {
        return <CodeBlock lang={asset.language} numbers={true}>{asset.code}</CodeBlock>
      }
    }
  }

  return <Text as={!root && 'span'} mb={root && 6}>{children}</Text>;
}

function mapRichText({
  nodeType, content, value, marks, data, links, h1Size, isRootElement,
}) {
  const h1SizeCalculated = h1Size || '4xl';

  if (nodeType === 'text') {
    return value.split(/(\r\n|\n\r|\r|\n)/g).map((part) => renderTextContent({ value: part, marks }));
  }

  const innerContent = content && content
    .map((c) => mapRichText({
      ...c, links, h1Size, isRootElement: nodeType === 'document',
    }));
  const nodeTypes = {
    document: <>{innerContent}</>,
    hyperlink: <Link href={data?.uri} target="_blank" rel="noopener">{innerContent}</Link>,
    paragraph: <ContentfulParagraph root={isRootElement} links={links} content={content}>{innerContent}</ContentfulParagraph>,
    'heading-1': <Heading mb={4} mt={8} as="h1" fontSize={h1SizeCalculated}>{innerContent}</Heading>,
    'heading-2': <Heading mb={4} mt={8} as="h2" fontSize={getSize(h1SizeCalculated, -1)}>{innerContent}</Heading>,
    'heading-3': <Heading mb={3} mt={6} as="h3" fontSize={getSize(h1SizeCalculated, -2)}>{innerContent}</Heading>,
    'heading-4': <Heading mb={2} mt={4} as="h4" fontSize={getSize(h1SizeCalculated, -3)}>{innerContent}</Heading>,
    'heading-5': <Heading mb={1} mt={2} as="h5" fontSize={getSize(h1SizeCalculated, -4)}>{innerContent}</Heading>,
    'heading-6': <Heading mb={1} mt={1} as="h6" fontSize={getSize(h1SizeCalculated, -5)}>{innerContent}</Heading>,
    'unordered-list': <List styleType="disc" mb={6} pl={4} stylePos="outside">{innerContent}</List>,
    'ordered-list': <List as="ol" styleType="decimal" mb={6} pl={4} stylePos="outside">{innerContent}</List>,
    'list-item': <ListItem mb={1}>{innerContent}</ListItem>,
    'hr': <Divider />,
    'embedded-asset-block': <ContentfulAsset mt={4} mb={8} id={data?.target?.sys?.id} links={links} />,
  };

  if (nodeType in nodeTypes) return nodeTypes[nodeType];
  return value;
}

export default function ContentfulRichText({ json, links, h1Size }) {
  if (!json) return <></>;  
  return (
    <StaticContent>
      {mapRichText({ ...json, links, h1Size })}
    </StaticContent>
  );
}