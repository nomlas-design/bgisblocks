import './style.css';

const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { useState } = wp.element;
const { Popover, Button } = wp.components;
const { __experimentalLinkControl } = wp.blockEditor;

registerBlockType('bgistheme/button', {
  title: 'BGIS Button',
  icon: 'button',
  category: 'bgis-blocks',
  attributes: {
    text: {
      type: 'string',
      placeholder: 'Button Text',
    },
    url: {
      type: 'string',
      default: { url: '' },
    },
  },
  edit({ attributes, setAttributes }) {
    const { text, url } = attributes;
    const [urlChoose, setUrlChoose] = useState(false);

    return (
      <>
        {' '}
        <div className={`btn`}>
          <RichText
            allowedFormats={[]}
            className='btn__label'
            onChange={(text) => setAttributes({ text })}
            value={text}
          />
          <span className='btn__line'></span>
          <span className='btn__arrow'></span>
        </div>
        {urlChoose && (
          <Popover
            position='middle center'
            onFocusOutside={() => setUrlChoose(false)}
          >
            <LinkControl
              settings={[]}
              value={url}
              onChange={(url) => setAttributes({ url })}
            />
            <Button
              variant='primary'
              onClick={() => setUrlChoose(false)}
              style={{ display: 'block', width: '100%' }}
            >
              Set Link
            </Button>
          </Popover>
        )}
      </>
    );
  },
  save({ attributes }) {},
});
