import ImageAndTextBanner from './ImageAndTextBanner'

// Module types
const BANNER_WITH_IMAGE = 'banner';
const BANNER_TEXT_ONLY = 'banner-text-only';
const BANNER_WITH_BUTTON = 'banner-with-button';
const BANNER_MULTI_IMAGE = 'banner-multi-image';
const BANNER_WIDE = 'banner-wide';
const BANNER_VERTICAL = 'banner-vertical';

const ModuleContent = ({ module, styles }) => {
  console.log(module)
  module = JSON.parse(module)

  let selectedModule;
    switch (module.type) {
    case BANNER_WITH_IMAGE:
        selectedModule = <ImageAndTextBanner module={module} styles={styles} />
    case BANNER_WITH_BUTTON:
      break;
    case BANNER_TEXT_ONLY:
      break;
    case BANNER_MULTI_IMAGE:
      break;
    case BANNER_WIDE:
      break;
    case BANNER_VERTICAL:
      break;

    default:
      break;
  }

  return (
    <>
      <div className="banner-parent">
        {selectedModule}
      </div>
    </>
  )
};

export default ModuleContent;