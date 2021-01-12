import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
 
const document = {
  nodeType: 'document',
  content: [
    {
      nodeType: 'embedded-entry-block',
      data: {
        target: (...)Link<'Entry'>(...);
      },
    },
  ]
};
 
const CustomComponent = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
 
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { title, description } = node.data.target.fields;
      return <CustomComponent title={title} description={description} />
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      console.log(node.data.target.fields);
    }
  }
};
 
documentToReactComponents(document, options);
// -> <div><h2>[title]</h2><p>[description]</p></div>