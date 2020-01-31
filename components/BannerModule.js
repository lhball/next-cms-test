const BannerModule = (module) => {
  const { type, body, image } = module

  const bannerStyles = {
    bannerContainer: {
      padding: 0,
    },
    bannerLink: {
      marginRight: 15,
      fontSize: 'small',
    },
    bannerLinkImage: {
      maxWidth: 50,
      maxHeight: 50
    }
  };

  const { bannerLink, bannerContainer, bannerLinkImage } = bannerStyles

  !!styles && styles.map((style) => {
    bannerStyles[style.class][style.rule] = style.value
  })

  console.log(type, body, image, bannerStyles)

  return (
    <div style={bannerContainer}>
      <style jsx>{`
      .banner { grid-area: main; }
    `}
      </style>
    </div>
  )
};

export default BannerModule;