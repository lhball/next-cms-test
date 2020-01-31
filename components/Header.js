const Header = ({links, styles}) => {

  const headerStyles = {
    headerContainer: {
      padding: 0,
    },
    headerLink: {
      marginRight: 15,
      fontSize: 'small',
    },
    headerLinkImage: {
      maxWidth: 50,
      maxHeight: 50
    }
  };

  const { headerLink, headerContainer, headerLinkImage} = headerStyles

  !!styles && styles.map((style) => {
    style = JSON.parse(style)
    headerStyles[style.class][style.rule] = style.value
  })

  return (
  <div className="header" style={headerContainer}>
    {
      !!links && links.map((link, k) => {
        link = JSON.parse(link)
        return (
          <a key={k} href={"http://" + link.href} style={headerLink}>{
            link.image ?
              <img style={headerLinkImage} src={link.image}/> :
            link.title
          }</a>
        )
      })
    }
    <style jsx>{`
      .header { grid-area: header; }
    `}
    </style>
  </div>
  )
};

export default Header;