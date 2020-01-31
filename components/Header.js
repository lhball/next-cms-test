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

  debugger

  !!styles && styles.map((style) => {
    headerStyles[style.class][style.rule] = style.value
  })

  return (
  <div style={headerContainer}>
    {
      !!links && [links].map((link, k) => {
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