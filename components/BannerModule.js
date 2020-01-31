import Markdown from 'react-markdown'

const BannerModule = ({module}, styles) => {
  console.log(module)
  const { type, body, image } = JSON.parse(module)

  const bannerStyles = {
  };

  // !!styles && styles.map((style) => {
  //   style = JSON.parse(style)
  //   bannerStyles[style.class][style.rule] = style.value
  // })

  console.log(type, body, styles, bannerStyles)

  return (
    <>
      <div className="banner" style={bannerStyles} >
        <Markdown>
          {body}
        </Markdown>
        <Markdown>
          {image}
        </Markdown>
      </div>
      <style jsx>{`
        .banner {
          display: grid;
          grid-template-areas: 'title image';
          justify-content: space-evenly;
        }
      `}
      </style>
    </>
  )
};

export default BannerModule;