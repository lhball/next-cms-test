const Footer = ({ links, styles }) => {

  const footerStyles = {
    footerContainer: {
      padding: 0,
      gridArea: 'footer',
    },
    footerLink: {
      marginRight: 15,
      fontSize: 'small',
    },
    footerLinkImage: {
      maxWidth: 50,
      maxHeight: 50
    }
  };

  const { footerLink, footerContainer, footerLinkImage } = footerStyles

  !!styles && styles.map((style) => {
    style = JSON.parse(style)
    if (!!footerStyles[style.class]) footerStyles[style.class][style.rule] = style.value
  })

  return (
    <div style={footerContainer}>
      {
        !!links && links.map((link, k) => {
          link = JSON.parse(link)
          return (
            <a key={k} href={"http://" + link.href} style={footerLink}>{
              link.image ?
                <img style={footerLinkImage} src={link.image} /> :
                link.title
            }</a>
          )
        })
      }
      <style jsx>{`
      .footer { grid-area: footer; }
    `}
      </style>
    </div>
  )
};

export default Footer;