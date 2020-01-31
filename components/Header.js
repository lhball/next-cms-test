const Header = ({links, styles}) => {

  const headerStyles = {
    headerContainer: {
      padding: 0,
    },
    headerLink: {
      marginRight: 15,
      fontSize: 'small',
    },
  };

  const {headerLink, headerContainer} = headerStyles

  !!styles && styles.map((style) => {
    headerStyles[style.class][style.rule] = style.value
  })

  return (
  <div style={headerContainer}>
    {
      links.map((link, k) => {
        return (
          <a key={k} href={"http://" + link.href} style={headerLink}>{
            link.logo ?
            <img src={link.logo}/> :
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