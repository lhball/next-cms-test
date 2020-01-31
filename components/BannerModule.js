import Markdown from 'react-markdown'
import { withoutPTags } from './utils//utils'

const BANNER_LEFT = "banner-left"

const BannerModule = ({module}, styles) => {
  console.log(module)
  const { type, body, image } = JSON.parse(module)

  const bannerStyles = {
  };

  // !!styles && styles.map((style) => {
  //   style = JSON.parse(style)
  //   bannerStyles[style.class][style.rule] = style.value
  // })

  const components = type === BANNER_LEFT ?
    <>
      <Markdown renderers={{ paragraph: withoutPTags }}>
        {body}
      </Markdown>
      <Markdown renderers={{ paragraph: withoutPTags }}>
        {image}
      </Markdown>
    </> :
    <>
      <Markdown renderers={{ paragraph: withoutPTags }}>
        {image}
      </Markdown>
      <Markdown renderers={{ paragraph: withoutPTags }}>
        {body}
      </Markdown>
    </>

  console.log(type, body, styles, bannerStyles)

  return (
    <>
      <div className="banner" style={bannerStyles} >
        {components}
      </div>
      <style jsx>{`
        .banner {
          display: grid;
          grid-column-gap: 15px;
          grid-template-areas: 'title image';
          justify-content: space-evenly;
        }
      `}
      </style>
    </>
  )
};

export default BannerModule;